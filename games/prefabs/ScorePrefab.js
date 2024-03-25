import ScoreReaderComponent from "../components/ScoreReaderComponent.js"
import ScoreUpdaterComponent from "../components/ScoreUpdaterComponent.js"

class ScorePrefab extends GameObject {
    constructor(name ="ScorePrefab"){
        super(name)
        this.addComponent(new Text("Score: ", "16px Arial", "black"))
        this.addComponent(new ScoreReaderComponent())
        this.addComponent(new ScoreUpdaterComponent())
    }
}
window.ScorePrefab = ScorePrefab