import React from 'react';
import ReactDOM from 'react-dom';
import './sass/main.scss';

import Header from './components/Header';
import todos from './todos';
import Todo from './components/Todo';
import Footer from './components/Footer';

class App extends React.Component {
    constructor(props) {
        super(props);



        this.handleClick = this.handleClick.bind(this);
        this.handleAdd = this.handleAdd.bind(this);


        this.state = {
            todos: this.props.initialData
        }


    }
    componentDidUpdate(){
        localStorage.clear();
        localStorage.setItem('todos', JSON.stringify(this.state.todos));
    }
    handleAdd(title){

        const titleSpaceRemove = title.trim()
        if(!titleSpaceRemove) return
        const todosLength = (this.state.todos.length +1);

        const todo = {
            id: todosLength,
            title,
            completed: false
        };
        const todos = [...this.state.todos, todo];
        this.setState({ todos });




    }

    handleClick(id){

        const todos = this.state.todos.map(todo => {
            if(todo.id == id) {
                todo.completed = !todo.completed

            }
            return todo;
        });

        this.setState({ todos });

    }

    render() {
        return (
            <article className="form-todo">
                <Header title={this.props.title}/>
                <main className="form-todo__main">
                    {this.state.todos.map(todo =>
                        <Todo
                            key={todo.id}
                            id={todo.id}
                            title={todo.title}
                            completed={todo.completed}
                            onClick={this.handleClick}

                        />)
                    }

                </main>
                <footer className="form-todo__footer">
                    <Footer onClick={this.handleAdd} />
                </footer>
            </article>
        )
    }
}

App.propTypes = {
    initialData: React.PropTypes.arrayOf(React.PropTypes.shape({
        id: React.PropTypes.number.isRequired,
        title: React.PropTypes.string.isRequired,
        completed: React.PropTypes.bool.isRequired
    })).isRequired
};
let t = JSON.parse(localStorage.getItem('todos'))

ReactDOM.render(<App initialData={t || todos} title="Дела" />, document.getElementById('root'));
