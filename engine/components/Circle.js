class Circle extends Component {
    constructor(fill = "green", stroke = "purple") {
        super()
        this.fill = fill;
        this.stroke = stroke
    }
    draw(ctx) {
        ctx.beginPath();
        ctx.fillStyle = this.fill
        ctx.strokeStyle = this.stroke
        ctx.lineWidth = 5
        ctx.arc(this.transform.x, this.transform.y, this.transform.scaleX, 0, Math.PI * 2)
        ctx.fill()
        ctx.stroke()
    }
}

window.Circle = Circle
export default Circle;