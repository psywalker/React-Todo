import React from 'react';

class Footer extends React.Component {
    constructor(props) {
        super(props);


        this.handleAdd = this.handleAdd.bind(this);

        this.handleKeyPress = this.handleKeyPress.bind(this);


    }
    handleGeneral(){
        const field = this.refs.add;
        const title = this.refs.add.value;
        this.props.onClick(title)

        field.value = '';
        field.focus();
    }
    handleAdd(event) {
        event.preventDefault();
        this.handleGeneral()

    }

    handleKeyPress(target) {
        if(target.charCode==13){
            this.handleGeneral()
        }


    }

    render() {

        return (
            <form className="todo-add" onSubmit={(event) => {event.preventDefault()}}>
                <input className="todo-add__text" type="text" placeholder="Новое дело" ref="add" onKeyPress={this.handleKeyPress}/>
                <button type="button" className="todo-add__btn" onClick={(event) => {event.preventDefault(); this.handleAdd(event)}}>+</button>
            </form>

        );
    }

}

export default Footer;
