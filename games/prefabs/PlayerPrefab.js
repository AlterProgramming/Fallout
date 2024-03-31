import "../components/KeyboardComponent.js"
import "../components/DeathComponent.js"

class PlayerPrefab extends GameObject {
    constructor(name="PlayerPrefab"){
        super(name);
        this.addComponent(new Circle())
        this.addComponent(new KeyboardComponent())   
        this.addComponent(new DeathComponent())
    }

}
window.PlayerPrefab = PlayerPrefab