export default class Todos {
    constructor(props) {
        super(props)
        this.state = {
            id : "",
            text : "",
            checked : "",
        }
    }

    addTodo(e) {
        e.preventDefault();
        this.setState({id })
    }
};