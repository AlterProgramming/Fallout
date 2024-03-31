import "../components/TimeSlowDownComponent.js"
class TimePrefab extends GameObject {
    constructor(){
        super();
        this.timeRatio = 1
        this.addComponent(new TimeSlowDownComponent())
    }
}
window.TimePrefab = TimePrefab