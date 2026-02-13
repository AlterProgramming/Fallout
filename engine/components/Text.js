class Text extends Component {
  constructor(text = "", font = "30px sans", fill = "gray") {
    super();
    this.text = text;
    this.font = font;
    this.fill = fill;
    this.anchorX = 0;
    this.anchorY = 0;

  }

  start() {
    this.textObject = new window.PIXI.Text(this.text, {
      font: this.font,
      fill: this.fill,
    });
    this.textObject.anchor.set(this.anchorX, this.anchorY);
    Engine.currentScene.worldContainer.addChild(this.textObject);
    this.parent.displayObject = this.textObject;
  }

  update() {
    if (!this.textObject || !this.textObject.style) return;

    this.textObject.text = this.text;
    this.textObject.style.font = this.font;
    this.textObject.style.fill = this.fill;
    this.textObject.anchor.set(this.anchorX, this.anchorY);
    this.textObject.position.set(this.transform.x, this.transform.y);
  }

  onDestroy() {
    this.textObject?.destroy();
    this.textObject = null;
  }
}

window.Text = Text;
export default Text;
