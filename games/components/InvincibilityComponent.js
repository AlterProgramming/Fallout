
class InvincibilityComponent extends Component {
    constructor() {
        super();
        EventSystem.registerListener(this)
    }
    start() {
        this.cooldown = 0
        this.maxCooldown = 3
    }
    handleEvent(event){
        if(event.type="collision"){
            this.cooldown = this.maxCooldown
        }
    }
    update() {
        
        if (this.cooldown < 0) {
            this.cooldown = 0
        }
        else {
            this.cooldown -= Time.deltaTime
        }
    }
}
window.InvincibilityComponent = InvincibilityComponent