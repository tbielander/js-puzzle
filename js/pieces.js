// Helpers

function buildID(i, j, prefix="pc") {
    return `${prefix}-${i}-${j}`;
}

function toCSS(number) {
    return `${number}px`;
}

// Piece properties

function getPieceIndexes(imagePath) {
    let splitPath = imagePath.split("/");
    let imageFileName = splitPath[splitPath.length - 1].split(".")[0];
    let indexes = imageFileName.split("_").map((s) => parseInt(s));
    return indexes;
}

function determineNeighbours(i, j, m, n) {
    return {
        "data-left": j > 0 ? buildID(i, j - 1) : null,
        "data-top": i > 0 ? buildID(i - 1, j) : null,
        "data-right": j < n - 1 ? buildID(i, j + 1) : null,
        "data-bottom": i < m - 1 ? buildID(i + 1, j) : null
    };
}

function setAttributes(piece, i, j, m, n) {
    let id = buildID(i, j);
    piece.id = id;
    piece.className = "piece";
    piece.setAttribute("alt", id);
    piece.setAttribute("data-i", i);
    piece.setAttribute("data-j", j);
    piece.style.width = toCSS(piece.width);
    piece.style.height = toCSS(piece.height);
    piece.style.position = "absolute";
    piece.style.left = toCSS(Math.random() * (window.innerWidth - piece.width));
    piece.style.top = toCSS(Math.random() * (window.innerHeight - piece.height));
    let neighbours = determineNeighbours(i, j, m, n);
    for (const [key, value] of Object.entries(neighbours)) {
        value === null || piece.setAttribute(key, value);
    }
    return piece;
}

function checkAlpha(e, piece) {
    let ctx = document.getElementById("canvas").getContext("2d");
    let x = e.clientX - piece.offsetLeft;
    let y = e.clientY - piece.offsetTop;
    let w = ctx.canvas.width = piece.width;
    let h = ctx.canvas.height = piece.height;
    let alpha;
    ctx.drawImage(piece, 0, 0, w, h);
    alpha = ctx.getImageData(x, y, 1, 1).data[3]; // [0]R [1]G [2]B [3]A
    return alpha !== 0;
}

function setOffsets(piece, i, j, svgPath, rectWidth, rectHeight) {
    let svg = document.getElementById("svg");
    let pathElement = document.getElementById("path");
    pathElement.setAttribute("d", svgPath);
    let box = svg.getBBox();
    let offsetX = j * rectWidth + box["x"];
    let offsetY = i * rectHeight + box["y"];
    piece.setAttribute("data-offset-x", String(offsetX));
    piece.setAttribute("data-offset-y", String(offsetY));
    piece.setAttribute("data-svg-path", svgPath);
    console.log(piece);
    pathElement.setAttribute("d", "");
    return piece;
}