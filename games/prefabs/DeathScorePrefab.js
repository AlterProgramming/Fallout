class DeathScorePrefab extends GameObject {
    constructor(name = 'DeathScorePrefab') {
        super(name);
        const scoreText = new Text(`Score: ${Globals.score}`, "32px Arial", "white");
        scoreText.anchorX = 0.5;
        scoreText.anchorY = 0.5;
        this.addComponent(scoreText);
    }
}

window.DeathScorePrefab = DeathScorePrefab;
export default DeathScorePrefab;
