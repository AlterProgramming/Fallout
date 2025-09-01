import "../prefabs/ScorePrefab.js"
import "../prefabs/PlayerPrefab.js"
import "../prefabs/SquareFoesPrefab.js"
import "../prefabs/EnemySpawnerPrefab.js"
import "../prefabs/TimePrefab.js"
import "../prefabs/SlowDownSkillPrefab.js"
import "../prefabs/FreeMovementSkillPrefab.js"
import "../prefabs/ControllerPrefab.js"
import "../prefabs/CloudPrefab.js"
import "../prefabs/CloudSpawnerPrefab.js"
import "../prefabs/HealthPrefab.js"
class GameScene extends Scene {
    constructor(){
        super('lightgray');
        Globals.score = 0
        this.aspectRatio = 1;
        this.logicalWidth = 750; 
    }
    start(ctx){
        GameObject.instantiate(new TimePrefab())
        GameObject.instantiate(new PlayerPrefab(),300 + this.letterBox1End, 100,35 )
        // GameObject.instantiate(new ScorePrefab(),window.innerWidth - 100, 50 )
        GameObject.instantiate(new ScorePrefab(),this.letterBox2Start  , 50 )
        GameObject.instantiate(new EnemySpawnerPrefab())
        // GameObject.instantiate(new SlowDownSkillPrefab(), window.innerWidth-60, window.innerHeight-100,100,100)
        GameObject.instantiate(new SlowDownSkillPrefab(), this.letterBox2Start, this.logicalWidthViewHeightInPixels ,100,100)
        GameObject.instantiate(new FreeMovementSkillPrefab(), this.letterBox2Start -120, this.logicalWidthViewHeightInPixels,100,100)   
        GameObject.instantiate(new ControllerPrefab()) 
        
        GameObject.instantiate(new CloudPrefab(), this.logicalStartX, this.logicalStartY , 25)
        GameObject.instantiate(new CloudPrefab(), this.logicalStartX + 25, this.logicalStartY , 25)
        GameObject.instantiate(new CloudSpawnerPrefab())
        GameObject.instantiate(new HealthPrefab(), this.logicalStartX +50, this.logicalWidthViewHeightInPixels, 100,100)
        

        // GAME object to spawn clouds on layer 2 every time the button C is pressed through the event system, blurred
        // Need EventSystem.js


    }

}
window.GameScene = GameScene
export default GameScene