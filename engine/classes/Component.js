class Component {
    parent = null //parentGameObject
    get transform() {
        return this.parent.transform;
    }
}

window.Component = Component
export default Component