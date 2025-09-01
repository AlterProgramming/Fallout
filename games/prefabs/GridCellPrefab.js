import GameObject from "../../engine/classes/GameObject.js";

export default class GridCellPrefab extends GameObject {
    constructor(width = 64, height = 32, color = "rgba(0,200,255,0.3)") {
        super();
        // For isometric, you might want to use a diamond shape instead of a rectangle
        this.addComponent(new Rectangle(0, 0, width, height, color));
        // If you have a Diamond component, use:
        // this.addComponent(new Diamond(0, 0, width, height, color));
    }
}
window.GridCellPrefab = GridCellPrefab;