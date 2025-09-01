import "../components/CloudMovementController.js"
class CloudPrefab extends GameObject {
    constructor(){
        super();
        this.transform.speed= 5
    }
    
    onSpawn(ctx){
        this.layer = -1
            this.addComponent(new Circle("white", "transparent"))
            this.addComponent(new CloudMovementController())
            super.start(ctx)
    }


}
window.CloudPrefab = CloudPrefab