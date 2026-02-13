class Text extends Component {
  constructor(text = "", fontSize = 30, fontFamily = "sans", fill = "gray") {
    super();
    this.text = text;
    this.fontSize = fontSize;
    this.fontFamily = fontFamily;
    this.fill = fill;
  }

  start() {
    this.textObject = new window.PIXI.Text(this.text, {
      fontSize: this.fontSize,
      fontFamily: this.fontFamily,
      fill: this.fill,
    });
    Engine.currentScene.worldContainer.addChild(this.textObject);
    this.parent.displayObject = this.textObject;
  }

  update() {
    if (!this.textObject || !this.textObject.style) return;

    this.textObject.text = this.text;
    this.textObject.style.fontSize = this.fontSize;
    this.textObject.style.fontFamily = this.fontFamily;
    this.textObject.style.fill = this.fill;
    this.textObject.position.set(this.transform.x, this.transform.y);
  }

  onDestroy() {
    this.textObject?.destroy();
    this.textObject = null;
  }
}

window.Text = Text;
export default Text;
