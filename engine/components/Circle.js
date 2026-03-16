class Circle extends Component {
    constructor(fill = "green", stroke = "purple") {
        super();
        this.fill = fill;
        this.stroke = stroke;
    }

    start() {
        this.graphics = new window.PIXI.Graphics();
        Engine.currentScene.worldContainer.addChild(this.graphics);
        this.parent.displayObject = this.graphics;
        this.redraw();
    }

    redraw() {
        this.graphics.clear();
        this.graphics.lineStyle(2, window.PIXI.utils.string2hex(this.stroke));
        this.graphics.beginFill(window.PIXI.utils.string2hex(this.fill));
        this.graphics.drawCircle(0, 0, this.transform.scaleX);
        this.graphics.endFill();
    }

    update() {
        if (!this.graphics) return;
        this.redraw();
        this.graphics.position.set(this.transform.x, this.transform.y);
    }

    onDestroy() {
        this.graphics?.destroy();
    }
}

window.Circle = Circle;
export default Circle;
