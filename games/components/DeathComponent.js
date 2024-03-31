class DeathComponent extends Component {
    constructor() {
        super();
    }
    update() {
        let obstacles = GameObject.filter('SquareFoesPrefab')
        for (let obstacle of obstacles) {


            if (Collisions.isRectangleRectangleCollision(
                {
                    x: this.transform.x,
                    y: this.transform.y,
                    width: this.transform.scaleX,
                    height: this.transform.scaleY
                },
                {
                    x: obstacle.transform.x,
                    y: obstacle.transform.y,
                    width: obstacle.transform.scaleX,
                    height: obstacle.transform.scaleY
                }
            )) {
                Engine.currentScene = new DeathScene()
            }
        }
    }
}
window.DeathComponent = DeathComponent