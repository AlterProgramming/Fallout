import "../prefabs/ScorePrefab.js"
import "../prefabs/PlayerPrefab.js"
import "../prefabs/SquareFoesPrefab.js"
import "../prefabs/EnemySpawnerPrefab.js"
import "../prefabs/TimePrefab.js"
class GameScene extends Scene {
    constructor(){
        super('lightgray');
        Globals.score = 0
        let timeGameObject = new TimePrefab()
        this.gameObjects.push(timeGameObject)

        let circleGameObject = new PlayerPrefab()
        circleGameObject.addComponent(new Circle('darkgreen', 'lightgrey'))
        circleGameObject.addComponent(new KeyboardComponent())
        circleGameObject.transform.x = 300
        circleGameObject.transform.y = 100
        circleGameObject.transform.scaleX = 35

        this.gameObjects.push(circleGameObject)
        let scoreGameObject = new ScorePrefab()
        scoreGameObject.transform.x = window.innerWidth - 100;
        scoreGameObject.transform.y = 50;
        // scoreGameObject.addComponent(new Text("Score", "16px Arial", "black"))
        // scoreGameObject.addComponent(new ScoreUpdaterComponent());
        // scoreGameObject.addComponent(new ScoreReaderComponent())
        this.gameObjects.push(scoreGameObject)
        let squareFoeGameObject = new SquareFoesPrefab();
        // squareFoeGameObject.transform.x =500
        // squareFoeGameObject.transform.y= 500
        // squareFoeGameObject.transform.scaleX= 100
        // squareFoeGameObject.transform.scaleY = 100
        // squareFoeGameObject.transform.speed = 1
        // this.gameObjects.push(squareFoeGameObject)

        let enemySpawner = new EnemySpawnerPrefab();
        this.gameObjects.push(enemySpawner)




    }
    
    
    // start(ctx){
    //     // let circleGameObject = new GameObject('CircleGameObject')
    //     // circleGameObject.addComponent(new Circle())
    //     // circleGameObject.addComponent(new KeyboardComponent())
    //     // GameObject.instantiate(new PlayerPrefab(), 300, 100, 50)
    //     // let scoreGameObject = new GameObject("ScoreGameObject")
    //     // GameObject.instantiate(new ScorePrefab(), window.innerWidth - 100, 50)
    //     // scoreGameObject.transform.x = window.innerWidth - 100;
    //     // scoreGameObject.transform.y = 50;
    //     // scoreGameObject.addComponent(new Text("Score", "16px Arial", "black"))
    //     // scoreGameObject.addComponent(new ScoreUpdaterComponent());
    //     // scoreGameObject.addComponent(new ScoreReaderComponent())
        
    //     // this.gameObjects.push(scoreGameObject)
    // }
}
window.GameScene = GameScene
export default GameScene