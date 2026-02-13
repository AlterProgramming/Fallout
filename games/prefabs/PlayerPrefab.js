import "../../engine/components/Sprite.js"
import "../components/KeyboardComponent.js"
import "../components/DeathComponent.js"
import "../components/InvincibilityComponent.js"
import "../components/ResetColorComponent.js"

class PlayerPrefab extends GameObject {
    constructor(name="PlayerPrefab"){
        super(name);
        // this.addComponent(new Sprite('player', 'darkgreen'))
        const sprite= new Sprite('player_img', 'darkgreen')
        // sprite.scale.set(2)
        console.log(sprite)
        this.addComponent(new Sprite('player_img', 'darkgreen'))
        this.addComponent(new KeyboardComponent())   
        this.addComponent(new DeathComponent())
        this.addComponent(new InvincibilityComponent())
        this.addComponent(new ResetColorComponent())

    }

}
window.PlayerPrefab = PlayerPrefab