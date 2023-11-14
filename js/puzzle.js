const baseUrl = "http://127.0.0.1:5500/";

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
    "pieces": [
        {
            "file_path": "puzzles/test/746x543/3x3/0_0.png",
            "svg_path": "M 0,0  L 248.67,0  C 240.07,36.2 249.66,122.11 199.92,91.88  C 150.19,61.65 150.19,134.05 199.92,128.08  C 230.1,122.11 244.54,144.8 248.67,181  C 198.94,191.79 106.28,212.24 123.42,145.09  C 140.57,108.89 41.1,108.89 73.69,145.09  C 106.28,181.29 49.73,186.95 0,181  L 0,0  Z"
        },
        {
            "file_path": "puzzles/test/746x543/3x3/0_1.png",
            "svg_path": "M 0,0  L 248.67,0  C 244.54,36.2 250.2,80.7 200.47,60.31  C 150.74,39.91 150.74,112.31 200.47,96.51  C 287,80.7 256.84,144.8 248.67,181  C 198.94,179.72 119.1,202.91 148.61,155.44  C 178.13,119.24 78.66,119.24 98.88,155.44  C 119.1,191.64 49.73,191.79 0,181  C -4.13,144.8 -18.57,122.11 -48.75,128.08  C -98.48,134.05 -98.48,61.65 -48.75,91.88  C 0.99,122.11 -8.6,36.2 0,0  Z"
        },
        {
            "file_path": "puzzles/test/746x543/3x3/0_2.png",
            "svg_path": "M 0,0  L 248.66,0  L 248.66,181  C 198.94,163.66 142.87,176.39 175.17,185.68  C 207.46,221.88 107.99,221.88 125.43,185.68  C 142.87,149.48 49.73,176.9 0,181  C 8.17,144.8 38.33,80.7 -48.2,96.51  C -97.93,112.31 -97.93,39.91 -48.2,60.31  C 1.53,80.7 -4.13,36.2 0,0  Z"
        },
        {
            "file_path": "puzzles/test/746x543/3x3/1_0.png",
            "svg_path": "M 0,0  C 49.73,5.95 106.28,0.29 73.69,-35.91  C 41.1,-72.11 140.57,-72.11 123.42,-35.91  C 106.28,31.24 198.94,10.79 248.67,0  C 246.91,36.2 208.31,82.81 258.04,76.68  C 307.78,70.54 307.78,142.94 258.04,112.88  C 213.24,82.81 254.31,144.8 248.67,181  C 198.94,162.51 123.68,199.58 134.44,168.71  C 145.21,132.51 45.74,132.51 84.71,168.71  C 123.68,204.91 49.73,171.51 0,181  L 0,0  Z"
        },
        {
            "file_path": "puzzles/test/746x543/3x3/1_1.png",
            "svg_path": "M 0,0  C 49.73,10.79 119.1,10.64 98.88,-25.56  C 78.66,-61.76 178.13,-61.76 148.61,-25.56  C 119.1,21.91 198.94,-1.28 248.67,0  C 272.5,36.2 249.5,73 199.76,60.15  C 150.03,47.3 150.03,119.7 199.76,96.35  C 297.58,73 235.63,144.8 248.67,181  C 198.94,190.8 122.4,200.51 162.88,178.59  C 203.36,142.39 103.89,142.39 113.14,178.59  C 122.4,214.79 49.73,162.51 0,181  C 5.64,144.8 -35.43,82.81 9.37,112.88  C 59.11,142.94 59.11,70.54 9.37,76.68  C -40.36,82.81 -1.76,36.2 0,0  Z"
        },
        {
            "file_path": "puzzles/test/746x543/3x3/1_2.png",
            "svg_path": "M 0,0  C 49.73,-4.1 142.87,-31.52 125.43,4.68  C 107.99,40.88 207.46,40.88 175.17,4.68  C 142.87,-4.61 198.94,-17.34 248.66,0  L 248.66,181  C 198.94,165.72 154.47,184.83 168.6,211.76  C 182.72,247.96 83.26,247.96 118.86,211.76  C 154.47,175.56 49.73,186.27 0,181  C -13.04,144.8 48.91,73 -48.91,96.35  C -98.64,119.7 -98.64,47.3 -48.91,60.15  C 0.83,73 23.83,36.2 0,0  Z"
        },
        {
            "file_path": "puzzles/test/746x543/3x3/2_0.png",
            "svg_path": "M 0,0  C 49.73,-9.49 123.68,23.91 84.71,-12.29  C 45.74,-48.49 145.21,-48.49 134.44,-12.29  C 123.68,18.58 198.94,-18.49 248.67,0  C 262.13,36.2 252.83,70.18 203.1,61.34  C 153.37,52.49 153.37,124.89 203.1,97.54  C 301.45,70.18 255.91,144.8 248.67,181  L 0,181  L 0,0  Z"
        },
        {
            "file_path": "puzzles/test/746x543/3x3/2_1.png",
            "svg_path": "M 0,0  C 49.73,-18.49 122.4,33.79 113.14,-2.41  C 103.89,-38.61 203.36,-38.61 162.88,-2.41  C 122.4,19.51 198.94,9.8 248.67,0  C 269.67,36.2 289.72,114.15 239.99,79.91  C 190.26,45.68 190.26,118.08 239.99,116.11  C 241.04,114.15 225.37,144.8 248.67,181  L 0,181  C 7.24,144.8 52.78,70.18 -45.57,97.54  C -95.3,124.89 -95.3,52.49 -45.57,61.34  C 4.16,70.18 13.46,36.2 0,0  Z"
        },
        {
            "file_path": "puzzles/test/746x543/3x3/2_2.png",
            "svg_path": "M 0,0  C 49.73,5.27 154.47,-5.44 118.86,30.76  C 83.26,66.96 182.72,66.96 168.6,30.76  C 154.47,3.83 198.94,-15.28 248.66,0  L 248.66,181  L 0,181  C -23.3,144.8 -7.63,114.15 -8.68,116.11  C -58.41,118.08 -58.41,45.68 -8.68,79.91  C 41.05,114.15 21,36.2 0,0  Z"
        }
    ],
    "piece_width": 248.67,
    "piece_height": 181.0
};

function createGame(baseUrl, puzzle) {
    let start, stop;

    // Create HTML puzzle

    function createPuzzle(baseUrl, matrix, piecesPaths, rectWidth, rectHeight) {
        let [m, n] = matrix;
        let stack = 0;
        let compounds = [];
        const catchDelta = 5;
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
                div.innerText = `Congratulations! You're a master puzzler!
                Puzzle solved in ${minutes} min ${seconds} s.`;
                div.style.width = toCSS(window.innerWidth);
                div.style.zIndex = stack + 1;
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
                console.log(compounds);
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
                    pc.style.zIndex = stack + 1;
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
                stack = piece.style.zIndex = stack + 1;
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
            for (let paths of piecesPaths) {
                let filePath = paths["file_path"];
                let svgPath = paths["svg_path"];
                let piece = new Image();
                piece.onload = function () {
                    let [i, j] = getPieceIndexes(filePath);
                    piece = setAttributes(piece, i, j, m, n);
                    piece = setOffsets(piece, i, j, svgPath, rectWidth, rectHeight);
                    piece.onmousedown = dragAndDrop;
                    compounds.push(new Set([piece.id]));
                    document.body.appendChild(piece);
                }
                piece.src = baseUrl + filePath;
            }
            start = Date.now();
        }

        createPieces(baseUrl, piecesPaths);
    }

    createPuzzle(
        baseUrl,
        puzzle.matrix,
        puzzle.pieces,
        puzzle.piece_width,
        puzzle.piece_height
    );
}

// Create and start game

createGame(baseUrl, puzzle);
