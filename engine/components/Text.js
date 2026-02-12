class Text extends Component {
  constructor(text = "", font = "30px sans", fill = "gray") {
    super();
    this.text = text;
    this.font = font;
    this.fill = fill;

  }

  start() {
    this.textObject = new window.PIXI.Text(this.text, {
      font: this.font,
      fill: this.fill,
    });
    Engine.currentScene.worldContainer.addChild(this.textObject);
    this.parent.displayObject = this.textObject;
  }

  update() {
    if (!this.textObject) return;
    this.textObject.text = this.text;
    this.textObject.style.font = this.font;
    this.textObject.style.fill = this.fill;
    this.textObject.position.set(this.transform.x, this.transform.y);
  }

  onDestroy() {
    this.textObject?.destroy();
  }
}

window.Text = Text;
export default Text;
