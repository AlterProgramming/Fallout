class GameOverTextPrefab extends GameObject {
    constructor(name = 'GameOverTextPrefab') {
        super(name);
        const gameOverText = new Text("Game Over!", "64px Arial", "white");
        gameOverText.anchorX = 0.5;
        gameOverText.anchorY = 0.5;
        this.addComponent(gameOverText);
    }
}

window.GameOverTextPrefab = GameOverTextPrefab;
export default GameOverTextPrefab;
