import "../../engine/components/Sprite.js"
import "../components/MoveUpComponent.js"
import "../components/MarkForDeletionComponent.js"
import "../components/TimeSlowDownComponent.js"
class SquareFoesPrefab extends GameObject {
    constructor(name="SquareFoesPrefab"){
        super(name);
        this.hasStarted = false
        
    }
    onSpawn(ctx){
        this.transform.timeRatio = 1
        this.addComponent(new Sprite("monster", "white"))
        // this.addComponent(new TimeSlowDownComponent())
        this.addComponent(new MoveUpComponent(1))
        this.addComponent(new MarkForDeletionComponent())
        super.start(ctx)

    }

}
window.SquareFoesPrefab = SquareFoesPrefab