class FreeMovementComponent extends Component {
    constructor(){
        super();
    }
    start(ctx){
        this.isReady = true
        this.cooldown = 15
        this.timeUntilSkillReady = 0
        this.timeInEffect = 0
    }
    update(ctx){
        if(Input.keysDown.includes("KeyO")&& this.isReady){
            let player = GameObject.find('PlayerPrefab')
            player.components[2].canMoveUpDown = true
            player.components[1].fill = 'blue'
            player.components[1].stroke = 'blue'
            this.timeUntilSkillReady = this.cooldown
            this.timeInEffect = 5;
            this.isReady = false;
        }
        if(this.timeInEffect < 0){
            this.timeInEffect = 0;
            let player = GameObject.find('PlayerPrefab')
            player.components[2].canMoveUpDown = false
            // player.components[1].fill = 'darkgreen'
            // player.components[1].stroke = 'darkgreen'
        }
        else if(this.timeInEffect > 0){
            this.timeInEffect -= Time.deltaTime
            let player = GameObject.find('PlayerPrefab')
            // player.components[2].canMoveUpDown = true
            player.components[1].fill = 'blue'
            player.components[1].stroke = 'blue'
        }

        if(this.timeUntilSkillReady < 0){
            this.isReady = true;
            this.timeUntilSkillReady = 0;
            // this.timeInEffect = 0
            this.parent.components[1].text = '  O'
        } 
        else if(this.timeUntilSkillReady > 0) {
            this.timeUntilSkillReady -= Time.deltaTime
            this.parent.components[1].text = Math.round(this.timeUntilSkillReady * 10) /10

        }

        
    }
}
window.FreeMovementComponent = FreeMovementComponent