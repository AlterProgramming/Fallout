class MoveUpComponent extends Component {
    constructor(){
        super();
    }
    update(){
        
        this.transform.y -= 8 * this.transform.speed * this.transform.timeRatio
    }
}
window.MoveUpComponent = MoveUpComponent