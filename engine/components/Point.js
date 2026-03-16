class Point extends Component {
  constructor(fill = "blue") {
      super();
      this.fill = fill;
  }

  start() {
    this.graphics = new window.PIXI.Graphics();
    Engine.currentScene.worldContainer.addChild(this.graphics);
    this.parent.displayObject = this.graphics;
  }

  update() {
      if (!this.graphics) return;
      this.graphics.clear();
      this.graphics.beginFill(window.PIXI.utils.string2hex(this.fill));
      this.graphics.drawCircle(0, 0, 10);
      this.graphics.endFill();
      this.graphics.position.set(this.transform.x, this.transform.y);
  }

  onDestroy() {
    this.graphics?.destroy();
  }
}

window.Point = Point;
export default Point;
