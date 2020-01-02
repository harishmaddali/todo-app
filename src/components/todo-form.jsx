import React from 'react';

export default class TodoForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todo_text: ''
    }

    this.onInputChange = this.onInputChange.bind(this);
    this.addTodo = this.addTodo.bind(this);
  }

  onInputChange(event) {
    event.preventDefault();

    this.setState({
      todo_text: event.target.value
    });
  }

  addTodo(e) {
    e.preventDefault();

    this.props.todoService.addTodo(this.state);
    this.setState({
      todo_text: ''
    });
    this.props.reloadData();
  }

  render() {
    return (
      <div className="row">
        <div className="offset-md-4"></div>
        <div className="col-md-4">
          <form className="form-group d-flex justify-content-center">
            <input className="form-control" type="text" onChange={this.onInputChange} value={this.state.todo_text} placeholder="Type your todo ..." />
            <button className="ml-2 btn btn-success" onClick={this.addTodo}>Add</button>
          </form>
        </div>
      </div>
    );
  }
}