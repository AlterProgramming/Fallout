class Point extends Component {
  constructor(fill = "blue") {
      super()
      this.fill = fill;
  }
  draw(ctx) {
      ctx.beginPath();
      ctx.fillStyle = this.fill
      ctx.arc(this.transform.x, this.transform.y, 10, 0, Math.PI * 2)
      ctx.fill()
  }
}

window.Point = Point
export default Point;