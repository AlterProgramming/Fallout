class SkillDisplayComponent extends Component{
    constructor(fill='#FFF275', text){
        super();
        this.fill = fill
        this.text = text
    }
    // start(ctx){
    //     this.text = "   P"
    // }

    draw(ctx){
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

        ctx.fillText(this.text, this.transform.x-32, this.transform.y+8)
    }
    
}
window.SkillDisplayComponent = SkillDisplayComponent