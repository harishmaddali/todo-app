import React from 'react';

function TodoList(props) {
  return (
    <div className="mt-4">
      <header className="text-center">Your To-dos:</header>
      <div className="row mt-2">
        <div className="offset-md-4"></div>
        <div className="col-md-4">
          {
            props.todoService.getTodos().map((todo, index) => {
              return (
                <div key={index}>
                  {todo.todo_text}
                </div>
              );
            })
          }
        </div>
      </div>
    </div>
  );
}

export default TodoList;