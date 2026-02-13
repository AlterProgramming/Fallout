import "../components/ScoreReaderComponent.js";
import GameScene from "./GameScene.js";
import GameOverTextPrefab from "../prefabs/GameOverTextPrefab.js";
import DeathScorePrefab from "../prefabs/DeathScorePrefab.js";

class DeathScene extends Scene {
    constructor(){
        super('black');
        this.aspectRatio = 1;
        this.logicalWidth = 750; 
        this.timeBeforeRespawn = 5;
        this.timeSpent = 0;
    }

    start() {
        GameObject.instantiate(new GameOverTextPrefab(), this.logicalStartX + 450, window.innerHeight / 2);
        GameObject.instantiate(new DeathScorePrefab(), 50, 40);
    }

    update(){
        if (this.timeSpent >= this.timeBeforeRespawn) {
            Engine.changeScene(new GameScene());
            return;
        }

        this.timeSpent += Time.deltaTime;
    }
}

window.DeathScene = DeathScene;
export default DeathScene;
