class TimeSlowDownComponent extends Component {
    constructor(){
        super();
    }
    update(){
        if(Input.keysDown.includes("KeyP")){
            this.transform.timeRatio = .5
        }
    }
}
window.TimeSlowDownComponent = TimeSlowDownComponent