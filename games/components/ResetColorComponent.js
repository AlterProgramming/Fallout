class ResetColorComponent extends Component {
    constructor(){
        super();
    }
    update(){    
        let player = this.parent
        player.components[1].fill = 'darkgreen'
        player.components[1].stroke = 'lightgrey'

    }
}
window.ResetColorComponent = ResetColorComponent