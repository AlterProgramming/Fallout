class ScoreUpdaterComponent extends Component {
    start(){
      Globals.score = 0;
    }
    update() {
        Globals.score++
        this.parent.components[1].text = "" + Globals.score;
    }
  }
  
  window.ScoreUpdaterComponent = ScoreUpdaterComponent
  export default ScoreUpdaterComponent;