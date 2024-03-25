import "../components/KeyboardComponent.js"
import "../prefabs/ScorePrefab.js"
import "../prefabs/PlayerPrefab.js"
class GameScene extends Scene {
    constructor(){
        super('lightgray');
    }
    start(ctx){
        // let circleGameObject = new GameObject('CircleGameObject')
        // circleGameObject.addComponent(new Circle())
        // circleGameObject.addComponent(new KeyboardComponent())
        GameObject.instantiate(new PlayerPrefab(), 300, 100, 50)
        // let scoreGameObject = new GameObject("ScoreGameObject")
        GameObject.instantiate(new ScorePrefab(), window.innerWidth - 100, 50)
        // scoreGameObject.transform.x = window.innerWidth - 100;
        // scoreGameObject.transform.y = 50;
        // scoreGameObject.addComponent(new Text("Score", "16px Arial", "black"))
        // scoreGameObject.addComponent(new ScoreUpdaterComponent());
        // scoreGameObject.addComponent(new ScoreReaderComponent())
        
        // this.gameObjects.push(scoreGameObject)
    }
}
window.GameScene = GameScene
export default GameScene