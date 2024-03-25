class KeyboardComponent extends Component{
    constructor(){
        super();
    }
    update() {
        let speed = 250
        if (Input.keysDown.includes("ArrowLeft"))
            this.transform.x -= speed / Time.fps
        if (Input.keysDown.includes("ArrowRight"))
            this.transform.x += speed / Time.fps
    }
}

window.KeyboardComponent = KeyboardComponent;
export default KeyboardComponent