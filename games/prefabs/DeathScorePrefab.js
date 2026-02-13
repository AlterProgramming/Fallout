class DeathScorePrefab extends GameObject {
    constructor(name = 'DeathScorePrefab') {
        super(name);
        this.addComponent(new Text(`${Globals.score}`, "24px Arial", "white"));
    }
}

window.DeathScorePrefab = DeathScorePrefab;
export default DeathScorePrefab;
