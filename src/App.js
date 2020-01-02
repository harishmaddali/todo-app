import React from 'react';
import TodoForm from './components/todo-form';
import TodoList from './components/todo-list';
import './App.scss';

function App(props) {
  return (
    <div>
      <header className="text-center">
        Todo App
      </header>
      <TodoForm {...props} />
      <TodoList {...props} />
    </div>
  );
}

export default App;
