import "../components/ScoreReaderComponent.js";

class DeathScene extends Scene {
    constructor(){
        super('black');
        this.aspectRatio = 1;
        this.logicalWidth = 750; 
        this.timeBeforeRespawn = 5
        this.timeSpent = 0
        let gameOver = new GameObject('GameOverText')
        gameOver.addComponent(new Text("Game Over!", "64px Arial", "white"))
        gameOver.transform.x = this.logicalStartX  + 450
        gameOver.transform.y = window.innerHeight/2
        this.gameObjects.push(gameOver)
        let score = new GameObject("Score")
        score.addComponent(new Text(Globals.score, "24px Arial", "white"))
        score.transform.x = 50
        score.transform.y = 40
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