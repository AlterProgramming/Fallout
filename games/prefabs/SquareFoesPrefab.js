import "../components/MoveUpComponent.js"
import "../components/MarkForDeletionComponent.js"
import "../components/TimeSlowDownComponent.js"
class SquareFoesPrefab extends GameObject {
    constructor(name="SquareFoesPrefab"){
        super(name);
        this.transform.timeRatio = 1
        this.addComponent(new Rectangle("red", "lightgrey"))
        this.addComponent(new TimeSlowDownComponent())
        this.addComponent(new MoveUpComponent())
        this.addComponent(new MarkForDeletionComponent())
    }

}
window.SquareFoesPrefab = SquareFoesPrefab