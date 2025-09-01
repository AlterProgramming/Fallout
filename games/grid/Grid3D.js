export default class Grid3D {
    constructor(width, height, depth, tileWidth, tileHeight) {
        this.width = width;         // Number of tiles along X
        this.height = height;       // Number of tiles along Y
        this.depth = depth;         // Number of tiles along Z (elevation)
        this.tileWidth = tileWidth; // Width of a tile in pixels
        this.tileHeight = tileHeight; // Height of a tile in pixels
    }

    // Isometric projection: converts (x, y, z) grid coordinates to 2D screen coordinates
    project(x, y, z = 0) {
        const screenX = (x - y) * this.tileWidth / 2;
        const screenY = (x + y) * this.tileHeight / 2 - z * this.tileHeight;
        return { screenX, screenY };
    }

    // Generator for iterating over all grid cells
    *cells() {
        for (let z = 0; z < this.depth; z++) {
            for (let y = 0; y < this.height; y++) {
                for (let x = 0; x < this.width; x++) {
                    yield { x, y, z };
                }
            }
        }
    }
}