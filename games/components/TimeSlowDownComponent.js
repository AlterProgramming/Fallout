class TimeSlowDownComponent extends Component {
    constructor(){
        super();
    }
    start(ctx){
        this.isReady = true
        this.cooldown = 15
        this.timeUntilSkillReady = 0
    }
    update(ctx){
        if(Input.keysDown.includes("KeyP")&& this.isReady){
            let ennemies = GameObject.filter('SquareFoesPrefab')
            for (let gameObject of ennemies){
                gameObject.transform.timeRatio = .5
                gameObject.components[1].fill = 'grey'
            }
            this.timeUntilSkillReady = this.cooldown
            this.isReady = false;
        }

        if(this.timeUntilSkillReady < 0){
            this.isReady = true;
            this.timeUntilSkillReady = 0;
            this.parent.components[1].text = '  P'
        } 
        else if(this.timeUntilSkillReady > 0) {
            this.timeUntilSkillReady -= Time.deltaTime
            this.parent.components[1].text = Math.round(this.timeUntilSkillReady * 10) /10

        }

        
    }
}
window.TimeSlowDownComponent = TimeSlowDownComponent