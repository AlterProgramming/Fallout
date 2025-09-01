import "../components/HealthComponent.js"
import "../components/HealthDisplayComponent.js"
class HealthPrefab extends GameObject {
    constructor(name="HealthPrefab"){

        super(name);
    }
    
    start(ctx){
        this.addComponent(new HealthComponent());
        this.addComponent(new HealthDisplayComponent())
        super.start(ctx);
    }


}
window.HealthPrefab = HealthPrefab