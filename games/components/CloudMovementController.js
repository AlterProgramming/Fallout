class CloudMovementController extends Component {
    constructor(){
        super();
        // this.transform.x = 20
        // this.transform.speed = 5
    }
    update(){
        if(this.transform.x < Engine.currentScene.logicalStartX ||  this.transform.x > Engine.currentScene.logicalEndX ){
            this.transform.speed = -this.transform.speed
        }

        this.transform.x += this.transform.speed

    }
}
window.CloudMovementController = CloudMovementController