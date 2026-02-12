class SkillDisplayComponent extends Component{
    constructor(fill='#FFF275', text){
        super();
        this.fill = fill
        this.text = text
    }

    start(){
        this.graphics = new window.PIXI.Graphics();
        this.label = new window.PIXI.Text(this.text, { font: '32px Arial', fill: 'black' });
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

        this.label.text = this.text;
        this.label.position.set(this.transform.x - 32, this.transform.y - 16);
    }

    onDestroy() {
        this.graphics?.destroy();
        this.label?.destroy();
    }
    
}
window.SkillDisplayComponent = SkillDisplayComponent
