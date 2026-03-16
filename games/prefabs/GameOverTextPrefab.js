class GameOverTextPrefab extends GameObject {
    constructor(name = 'GameOverTextPrefab') {
        super(name);
        const gameOverText = new Text("Game Over!", 64, "Arial", "white");
        this.addComponent(gameOverText);
    }
}

window.GameOverTextPrefab = GameOverTextPrefab;
export default GameOverTextPrefab;
