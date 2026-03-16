class Sprite extends Component {
  constructor(textureKey, tint = "white") {
    super();
    this.textureKey = textureKey;
    this.fill = tint;
    this.stroke = tint;
  }

  start() {
    const texture = window.PIXI.Assets.get(this.textureKey);
    this.sprite = new window.PIXI.Sprite(texture);
    this.sprite.anchor.set(0.5);
    this.sprite.tint = window.PIXI.utils.string2hex(this.fill);
    Engine.currentScene.worldContainer.addChild(this.sprite);
    this.parent.displayObject = this.sprite;
  }

  update() {
    if (!this.sprite) return;
    this.sprite.position.set(this.transform.x, this.transform.y);

    const width = this.sprite.texture.width || 1;
    const height = this.sprite.texture.height || 1;

    let renderScaleX = this.transform.scaleX;
    let renderScaleY = this.transform.scaleY;

    if (renderScaleX === 1 && renderScaleY !== 1) {
      renderScaleX = renderScaleY;
    }
    if (renderScaleY === 1 && renderScaleX !== 1) {
      renderScaleY = renderScaleX;
    }

    this.sprite.scale.set(renderScaleX / width, renderScaleY / height);
    this.sprite.tint = window.PIXI.utils.string2hex(this.fill);
  }

  onDestroy() {
    this.sprite?.destroy();
  }
}

window.Sprite = Sprite;
export default Sprite;
