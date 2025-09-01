class MarkForDeletionComponent extends Component {
    constructor(){
        super();
    }
    update(){
        if (
            this.transform.y +this.transform.scaleY < 0){
            GameObject.destroy(this.parent)
        }
    }
}
window.MarkForDeletionComponent = MarkForDeletionComponent
