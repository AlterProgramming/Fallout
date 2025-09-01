import "../components/CameraMoverComponent.js"
class ControllerPrefab extends GameObject {
    constructor(){
        super("ControllerPrefab")
      }
      start(ctx){
        this.addComponent(new CameraMoverComponent())
        super.start(ctx)
      }
      
}
window.ControllerPrefab = ControllerPrefab