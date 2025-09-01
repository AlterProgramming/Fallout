import Scene from "../../engine/classes/Scene.js";
import GridCellPrefab from "../prefabs/GridCellPrefab.js";
import Grid3D from "../grid/Grid3D.js";

export default class ThreeDScene extends Scene {
    constructor() {
        super("green");
    }

    start() {
        // Initialize your 3D grid here
        // Example: this.createGrid();
        //   new Grid3D(10, 10, 3, 64, 32);
        

        // for (const {x, y, z} of this.grid.cells()) {
        //     const {screenX, screenY} = this.grid.project(x, y, z);
        //     // Instantiate a GameObject at (screenX, screenY)
        //     // Example:
        //     GameObject.instantiate(new GridCellPrefab(), screenX, screenY);
        // }
    }

    update(dt) {
        // Update logic for the 3D grid scene
    }
}
window.ThreeDScene = ThreeDScene;