import React from 'react';
import TodoListItem from '../todo_list/todo_list_item';
import TodoForm from '../todo_list/todo_form';

class TodoList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchTodos();
  }

  render() {
    let { todos, receiveTodo, removeTodo, createTodo } = this.props;
    return (
      <div>
        <ul>
          {todos.map( todo => <TodoListItem key={todo.id} todo={todo} removeTodo={removeTodo}/>)}
        </ul>
        <TodoForm createTodo={createTodo}/>
      </div>
    );
  }
}


export default TodoList;
