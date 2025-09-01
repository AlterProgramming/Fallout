import '../components/SkillDisplayComponent.js'
import '../components/FreeMovementComponent.js'
class FreeMovementSkillPrefab extends GameObject {
    constructor(){
        super()
    }
    start(ctx){
        this.addComponent(new SkillDisplayComponent('#FFF275', '  O'))
        this.addComponent(new FreeMovementComponent() )
        super.start(ctx)
    }
}
window.FreeMovementSkillPrefab = FreeMovementSkillPrefab