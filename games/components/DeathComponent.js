class DeathComponent extends Component {
    constructor() {
        super();
        // EventSystem.registerListener(this)
    }
    update() {
        let obstacles = GameObject.filter('SquareFoesPrefab')
        for (let obstacle of obstacles) {
            
            if (CollisionGeometric.isCircleRectangleCollision(


                new Circle2(
                    this.transform.x,
                    this.transform.y,
                    this.transform.scaleX
                ),
                new Rectangle2(
                    obstacle.transform.x,
                    obstacle.transform.y,
                    obstacle.transform.scaleX,
                    obstacle.transform.scaleY
                )
            )) {
                EventSystem.fireEvent({
                    origin: this.parent,
                    dest:null,
                    type: "collision"
                })
                
                return
            }
        }
    }
}
window.DeathComponent = DeathComponent