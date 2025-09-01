class CameraMoverComponent extends Component{
    start(ctx){
      Camera.main.transform.x = Engine.currentScene.letterBox1End
      Camera.main.transform.y = 0
      Camera.main.transform.scaleX = 1;
      Camera.main.transform.scaleY = 1
    }
}
window.CameraMoverComponent = CameraMoverComponent