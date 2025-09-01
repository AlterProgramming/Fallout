class HealthDisplayComponent extends Component {
    constructor(){
        super();
        
        this.fill = "red"
        // this.text = this.parent.findComponent("HealthComponent").health
    }
    // start(ctx){
    //     this.text = this.parent.findComponent("HealthComponent").health
    //     super.start(ctx);

    // }
    draw(ctx){
        const isCooldown = this.parent.getComponent("HealthComponent").cooldown === 0
        
        ctx.fillStyle = this.fill;
        ctx.strokeStyle = this.stroke;
        ctx.beginPath()
        ctx.rect(
        this.transform.x - this.transform.scaleX / 2,
        this.transform.y - this.transform.scaleY / 2,
        this.transform.scaleX, this.transform.scaleY
        )
        ctx.fill();
        ctx.stroke()

        ctx.fillStyle = 'black'
        ctx.font = '32px Arial'

        ctx.fillText(this.parent.getComponent("HealthComponent").health, this.transform.x-32, this.transform.y+8)
    }
}
window.HealthDisplayComponent = HealthDisplayComponent