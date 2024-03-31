import "../components/ScoreReaderComponent.js";

class DeathScene extends Scene {
    constructor(){
        super('black');
        this.timeBeforeRespawn = 5
        this.timeSpent = 0
        let gameOver = new GameObject('GameOverText')
        gameOver.addComponent(new Text("GameOver  ", "16px Arial", "red"))
        gameOver.transform.x = 200
        gameOver.transform.y = 200
        this.gameObjects.push(gameOver)
        let score = new GameObject("Score")
        score.addComponent(new Text(Globals.score, "16px Arial", "red"))
        score.transform.x = 350
        score.transform.y = 200
        this.gameObjects.push(score)

    }
    update(){
        if(this.timeSpent >= this.timeBeforeRespawn){
            Engine.currentScene = new GameScene()
        }
        this.timeSpent += Time.deltaTime 
    }
}
window.DeathScene = DeathScene