class GameOverTextPrefab extends GameObject {
    constructor(name = 'GameOverTextPrefab') {
        super(name);
        this.addComponent(new Text("Game Over!", "64px Arial", "white"));
    }
}

window.GameOverTextPrefab = GameOverTextPrefab;
export default GameOverTextPrefab;
