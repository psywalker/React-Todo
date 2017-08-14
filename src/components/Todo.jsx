import React from 'react';

class Todo extends React.Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(id) {
        this.props.onClick(id)
    }

    render() {

        return (
            <button type="button" id={this.props.id} className={`todo todo-padding ${this.props.completed ? ' todo_type_completed' : ''}`} onClick={(event) => { this.handleClick(this.props.id)}} >
                <span type="radio" className="todo__radio">•</span>
                <span className="todo__title">{this.props.title}</span>
            </button>
        );
    }

}

export default Todo;
