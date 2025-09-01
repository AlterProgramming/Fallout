import "../prefabs/SquareFoesPrefab.js"
const level = {
    EASY : 1,
    MEDIUM :1.5,
    HARD :2,
    IMPOSSIBLE : 2.5
}
class ObstacleSpawnComponent extends Component {
    constructor() {
        super();

    }
    start() {
        this.spawnX = 0
        this.secondsToSpawn = 0
        this.timeBetweenSpawns = .5
    }
    update() {
        let difficulty = level.EASY;
        if (Globals.score > 1000) {
            difficulty = level.MEDIUM
        } else if (Globals.score > 2000) {
            difficulty = level.HARD
        } else if (Globals.score > 5000) {
            difficulty = level.IMPOSSIBLE
        }


        if (this.secondsToSpawn <= 0) {
            //Randomly generate the x- axis postion of the new obstacle
            let squareFoeGameObject = new SquareFoesPrefab();
            let side = 100
            squareFoeGameObject.transform.scaleX = side
            squareFoeGameObject.transform.scaleY = side
            // Spawn in the area the player is in
            let player = GameObject.find('PlayerPrefab')
            let radius = 500
            let x = Math.random() * radius + player.transform.x - radius / 2;
            // Regenerate x if out of bounds
            while ((x < side || x > window.innerWidth) || Math.abs(this.spawnX - x) < 100) {

                x = Math.random() * radius + player.transform.x - radius / 2;
            }
            this.spawnX = x
            squareFoeGameObject.transform.x = x
            squareFoeGameObject.transform.y = window.innerHeight + squareFoeGameObject.transform.x / 2
            // Generate a number to use a speed of obstacle
            let speed = Math.random() * (1) + difficulty

            squareFoeGameObject.transform.speed = speed
            GameObject.instantiate(squareFoeGameObject, x, window.innerHeight + side/2, side,side)

            this.secondsToSpawn = this.timeBetweenSpawns

        }
        else {
            this.secondsToSpawn -= Time.deltaTime
        }
    }
}
window.ObstacleSpawnComponent = ObstacleSpawnComponent