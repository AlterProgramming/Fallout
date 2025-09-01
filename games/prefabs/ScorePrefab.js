import ScoreReaderComponent from "../components/ScoreReaderComponent.js"
import ScoreUpdaterComponent from "../components/ScoreUpdaterComponent.js"

class ScorePrefab extends GameObject {
    constructor(name ="ScorePrefab"){
        super(name)
        this.addComponent(new Text("", "16px Arial", "black"))
        this.addComponent(new ScoreUpdaterComponent())
        this.addComponent(new ScoreReaderComponent())

      
    }
}
window.ScorePrefab = ScorePrefab