import "../components/KeyboardComponent.js"
import "../components/DeathComponent.js"
import "../components/InvincibilityComponent.js"
import "../components/ResetColorComponent.js"

class PlayerPrefab extends GameObject {
    constructor(name="PlayerPrefab"){
        super(name);
        this.addComponent(new Circle('darkgreen', 'lightgrey'))
        this.addComponent(new KeyboardComponent())   
        this.addComponent(new DeathComponent())
        this.addComponent(new InvincibilityComponent())
        this.addComponent(new ResetColorComponent())

    }

}
window.PlayerPrefab = PlayerPrefab