const baseUrl = "http://127.0.0.1:5500/";

// Puzzle data

const puzzle = {
    "name": "test",
    "description": null,
    "path": "puzzles/test",
    "thumbnails": [
        "puzzles/test/thumbnail_500x300.jpg"
    ],
    "resolution": [746.0, 543.0],
    "resolution_path": "puzzles/test/746x543",
    "matrix": [3, 3],
    "matrix_path": "puzzles/test/746x543/3x3",
    "pieces_paths": [
        "puzzles/test/746x543/3x3/0_0.png",
        "puzzles/test/746x543/3x3/0_1.png",
        "puzzles/test/746x543/3x3/0_2.png",
        "puzzles/test/746x543/3x3/1_0.png",
        "puzzles/test/746x543/3x3/1_1.png",
        "puzzles/test/746x543/3x3/1_2.png",
        "puzzles/test/746x543/3x3/2_0.png",
        "puzzles/test/746x543/3x3/2_1.png",
        "puzzles/test/746x543/3x3/2_2.png"
    ],
    "piece_width": 248.67,
    "piece_height": 181.0
}


function createGame(baseUrl, puzzle) {
    let start, stop;

    // Create HTML puzzle

    function createPuzzle(baseUrl, puzzleResolution, puzzleMatrix, piecesPaths) {
        let [resX, resY] = puzzleResolution;
        let [m, n] = puzzleMatrix;
        let stackHeight = 0;
        let compounds = [];
        const catchDelta = 10;
        const neighbourAttributes = [
            "data-left",
            "data-top",
            "data-right",
            "data-bottom"
        ];

        function dragAndDrop(e) {      
            e.preventDefault();
            let piece = this;
            let startX = 0, startY = 0, deltaX = 0, deltaY = 0;
            let compound = new Set();
            let compoundPieces = [];
            let unconnected = {};
            

            function getCompound(pieceID) {
                for (let c of compounds) {
                    if (c.has(pieceID)) return c;
                }
            }

            function move(pc, deltaX, deltaY) {
                pc.style.left = toCSS(pc.offsetLeft + deltaX);
                pc.style.top = toCSS(pc.offsetTop + deltaY);
            }

            function completeGame() {
                stop = Date.now();
                let duration = stop - start;
                let secondsTotal = Math.floor(duration / 1000);
                let minutes = Math.floor(secondsTotal / 60);
                let seconds = secondsTotal - (60 * minutes);
                let div = document.createElement("div");
                div.className = "result";
                div.style.zIndex = stackHeight + 10;
                div.style.width = window.innerWidth;
                div.innerText = `Congratulations! You're a master puzzler!
                Puzzle solved in ${minutes} min ${seconds} s.`;
                document.body.appendChild(div);
            }

            function updateCompounds(pcID, nbrID) {
                let nbrCompound = getCompound(nbrID);
                let union = new Set([...compound, ...nbrCompound]);
                compounds = compounds.filter(
                    c => !(c.has(pcID) || c.has(nbrID))
                );
                compounds.push(union);
                if (compounds.length === 1 && compounds[0].size === m * n) {
                    completeGame();
                } else {
                    compound = new Set();
                    compoundPieces = [];
                    unconnected = {};
                }
            }

            function drop() {
                document.onmouseup = null;
                document.onmousemove = null;
            }

            function catchPiece(pc, nbr, targetX, targetY) {
                drop();
                let deltaX = targetX - pc.offsetLeft;
                let deltaY = targetY - pc.offsetTop;
                for (let piece of compoundPieces) {
                    move(piece, deltaX, deltaY);
                }
                updateCompounds(pc.id, nbr.id);
            }

            function checkCatch(pc, nbr) {
                let frameX = nbr.offsetLeft - parseInt(nbr.getAttribute("data-offset-x"));
                let targetX = frameX + parseInt(pc.getAttribute("data-offset-x"));
                let deltaX = Math.abs(targetX - pc.offsetLeft);
                let frameY = nbr.offsetTop - parseInt(nbr.getAttribute("data-offset-y"));
                let targetY = frameY + parseInt(pc.getAttribute("data-offset-y"));
                let deltaY = Math.abs(targetY - pc.offsetTop);
                if (deltaX < catchDelta && deltaY < catchDelta) {
                    catchPiece(pc, nbr, targetX, targetY);
                }
            }

            function drag(e) {
                e.preventDefault();
                deltaX = e.clientX - startX;
                deltaY = e.clientY - startY;
                startX = e.clientX;
                startY = e.clientY;
                for (let pc of compoundPieces) {
                    move(pc, deltaX, deltaY);
                    let unconnectedNbrs = unconnected[pc.id];
                    if (unconnectedNbrs && unconnectedNbrs.length > 0) {
                        for (let nbr of unconnectedNbrs) {
                            if (stop) break;
                            checkCatch(pc, nbr);
                        }
                    }
                }
            }
            
            function startDragging(e) {
                e.preventDefault();
                startX = e.clientX;
                startY = e.clientY;
                compound = getCompound(piece.id);
                for (let id of compound) {
                    let pc = document.getElementById(id);
                    compoundPieces.push(pc);
                    let unconnectedNbrs = [];
                    for (let attr of neighbourAttributes) {
                        let nbrID = pc.getAttribute(attr);
                        if (nbrID && !compound.has(nbrID)) {
                            unconnectedNbrs.push(document.getElementById(nbrID));
                        }
                    }
                    unconnected[id] = unconnectedNbrs;
                }            
                document.onmouseup = drop;
                document.onmousemove = drag;
            }
            
            if (checkAlpha(e, piece)) {
                stackHeight = piece.style.zIndex = stackHeight + 1;
                startDragging(e);
            } else {
                piece.style.pointerEvents = "none";
                let x = e.clientX;
                let y = e.clientY;
                document.elementFromPoint(x, y)
                .dispatchEvent(new MouseEvent("mousedown", {clientX: x, clientY: y}));
                piece.style.pointerEvents = "auto";
            }
        }

        function createPieces(baseUrl, piecesPaths) {
            let pieces = [];
            for (let path of piecesPaths) {
                let piece = new Image();
                piece.setAttribute("data-source", baseUrl + path);
                pieces.push(piece);
            }
            const promise = pieces.map(img => new Promise(
                res => img.onload = () => res(img)
            ));
            Promise.all(promise).then(pieces => {
                let rowWidth = 0;
                let columnHeight = 0;
                for (let piece of pieces) {
                    let path = piece.getAttribute("data-source");
                    let [i, j] = getPieceIndexes(path);
                    piece = setAttributes(piece, i, j, m, n);
                    if (i === 0) {
                        rowWidth += piece.width;
                    }
                    if (j === 0) {
                        columnHeight += piece.height;
                    }
                }
                const overlapX = (rowWidth - resX) / (n - 1);
                const overlapY = (columnHeight - resY) / (m - 1);
                for (let piece of pieces) {
                    piece = setFrameOffsets(piece, pieces, overlapX, overlapY);
                    piece.onmousedown = dragAndDrop;
                    compounds.push(new Set([piece.id]));
                    document.body.appendChild(piece);
                }
                start = Date.now();
            });
            for (let piece of pieces) {
                piece.src = piece.getAttribute("data-source");
            }
        }

        createPieces(baseUrl, piecesPaths);
    }

    createPuzzle(baseUrl, puzzle.resolution, puzzle.matrix, puzzle.pieces_paths);
}

// Create and start game

createGame(baseUrl, puzzle);
