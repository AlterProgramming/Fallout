class MoveUpComponent extends Component {
    constructor(speed){
        super();
        this.speed = 1
    }
    update(){    
        this.transform.y -= 8 * this.speed * this.transform.timeRatio
    }
}
window.MoveUpComponent = MoveUpComponent