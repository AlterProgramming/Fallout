class HealthComponent extends Component {
    constructor() {
        super();
        EventSystem.registerListener(this)
    }
    start() {
        this.health = 3
        this.cooldown = 0
        this.maxCooldown = 1

    }
    update() {

        let player = GameObject.find('PlayerPrefab')
        
        if (this.cooldown !== 0) {
            player.components[1].fill = 'yellow'
            player.components[1].stroke = 'yellow'
        }
        if (this.cooldown < 0) {
            this.cooldown = 0
        }
        else if (this.cooldown > 0) {
            this.cooldown -= Time.deltaTime
        }

    }
    handleEvent(event) {
        if (this.health === 0) {
            Engine.changeScene(new DeathScene())

        }
        if (event.type === "collision" && this.cooldown === 0) {
            this.health -= 1
            this.cooldown = this.maxCooldown
        }
        

    }
}
window.HealthComponent = HealthComponent