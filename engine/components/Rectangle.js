class Rectangle extends Component {
  constructor(fill = "yellow", stroke = "black") {
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
    this.graphics.drawRect(-this.transform.scaleX / 2, -this.transform.scaleY / 2, this.transform.scaleX, this.transform.scaleY);
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

window.Rectangle = Rectangle;
export default Rectangle;
