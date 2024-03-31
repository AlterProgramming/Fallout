class MarkForDeletionComponent extends Component {
    constructor(){
        super();
    }
    update(){
        if (
            this.transform.y +50 < 0){
            GameObject.destroy(this.parent)
        }
    }
}
window.MarkForDeletionComponent = MarkForDeletionComponent
export default MarkForDeletionComponent