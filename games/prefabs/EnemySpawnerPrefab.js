import "../components/ObstacleSpawnComponent.js"
class EnemySpawnerPrefab extends GameObject {
    constructor(){
        super();
        this.addComponent(new ObstacleSpawnComponent())
    }
}
window.EnemySpawnerPrefab = EnemySpawnerPrefab