export default class TodoData {
  constructor() {
    this.todoData = [
      {
        todo_text: 'Sample existing Todo'
      },
      {
        todo_text: 'Sample existing Todo'
      },
      {
        todo_text: 'Sample existing Todo'
      },
      {
        todo_text: 'Sample existing Todo'
      }
    ];
  }

  getTodos() {
    return this.todoData;
  }

  addTodo(todoData) {
    this.todoData.push(todoData);
  }
}