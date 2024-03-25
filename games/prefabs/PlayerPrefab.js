class PlayerPrefab extends GameObject {
    constructor(name="PlayerPrefab"){
        super(name);
        this.addComponent(new Circle())
        this.addComponent(new KeyboardComponent())   
    }

}
window.PlayerPrefab = PlayerPrefab