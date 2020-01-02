import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import TodoData from './services/todo-data';
import * as serviceWorker from './serviceWorker';

const todoService = new TodoData();

function handleReload() {
  render();
}

function render() {
  return ReactDOM.render(<App todoService={todoService} reloadData={handleReload} />, document.getElementById('root'));
}

render();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
