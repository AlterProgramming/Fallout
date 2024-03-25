class ScoreReaderComponent extends Component {
    update() {
        this.parent.components[1].text = "Score: " + Globals.score;
    }
  }
  
  window.ScoreReaderComponent = ScoreReaderComponent;
  export default ScoreReaderComponent