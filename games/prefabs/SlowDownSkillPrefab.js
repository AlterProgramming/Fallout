import '../components/SkillDisplayComponent.js'
import '../components/TimeSlowDownComponent.js'
class SlowDownSkillPrefab extends GameObject {
    constructor(){
        super()
    }
    start(ctx){
        this.addComponent(new SkillDisplayComponent('#FFF275', '   P'))
        this.addComponent(new TimeSlowDownComponent() )
        super.start(ctx)
    }
}
window.SlowDownSkillPrefab = SlowDownSkillPrefab