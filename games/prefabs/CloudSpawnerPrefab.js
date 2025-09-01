import "../components/CloudSpawnerComponent.js"
class CloudSpawnerPrefab extends GameObject {
    constructor(){
        super();
        this.addComponent(new CloudSpawnerComponent())
    }
}
window.CloudSpawnerPrefab = CloudSpawnerPrefab