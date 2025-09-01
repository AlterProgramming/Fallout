class KeyboardComponent extends Component{
    constructor(){
        super();
    }
    start(ctx){
        this.canMoveUpDown = false
    }
    update() {
        let speed = 500
        if (Input.keysDown.includes("ArrowLeft") || Input.keysDown.includes("KeyA"))
            this.transform.x -= speed / Time.fps
        if (Input.keysDown.includes("ArrowRight") || Input.keysDown.includes("KeyD"))
            this.transform.x += speed / Time.fps

        
        if(this.canMoveUpDown){
            if (Input.keysDown.includes("ArrowUp") || Input.keysDown.includes("KeyW"))
                this.transform.y -= speed / Time.fps
            if (Input.keysDown.includes("ArrowDown") || Input.keysDown.includes("KeyS"))
                this.transform.y += speed / Time.fps

        }
    }
}

window.KeyboardComponent = KeyboardComponent;
export default KeyboardComponent