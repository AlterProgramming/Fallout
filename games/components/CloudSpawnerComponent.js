class CloudSpawnerComponent extends Component{
    constructor(){
        super();
        EventSystem.registerListener(this)
    }
    start(){
        
    }
    handleEvent(event){
        // console.log(event)
        let cooldown =GameObject.find("HealthPrefab").getComponent("HealthComponent").cooldown  
        if(event.type === 'collision' &&  cooldown ===0){
            // console.log("Should spawn cloud")
            // minus health bar
            // spawn one moving cloud
            GameObject.instantiate(new CloudPrefab(), Engine.currentScene.logicalStartX + 20, Engine.currentScene.logicalStartY, 20  );
        }
    }
}
window.CloudSpawnerComponent = CloudSpawnerComponent