class HealthDisplayComponent extends Component {
    constructor(){
        super();
        this.fill = "red"
    }

    start(){
        this.graphics = new window.PIXI.Graphics();
        this.label = new window.PIXI.Text('', { font: '32px Arial', fill: 'black' });
        Engine.currentScene.worldContainer.addChild(this.graphics);
        Engine.currentScene.worldContainer.addChild(this.label);
        this.parent.displayObject = this.graphics;
    }

    update(){
        this.graphics.clear();
        this.graphics.lineStyle(2, 0x000000);
        this.graphics.beginFill(window.PIXI.utils.string2hex(this.fill));
        this.graphics.drawRect(
            -this.transform.scaleX / 2,
            -this.transform.scaleY / 2,
            this.transform.scaleX,
            this.transform.scaleY
        );
        this.graphics.endFill();
        this.graphics.position.set(this.transform.x, this.transform.y);

        this.label.text = `${this.parent.getComponent("HealthComponent").health}`;
        this.label.position.set(this.transform.x - 32, this.transform.y - 16);
    }

    onDestroy() {
        this.graphics?.destroy();
        this.label?.destroy();
    }
}
window.HealthDisplayComponent = HealthDisplayComponent
