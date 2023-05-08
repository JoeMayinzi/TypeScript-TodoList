type InputValue = string;
type todoList = string[];

const input = <HTMLInputElement>document.getElementById("form2");
const addButton = <HTMLButtonElement>document.getElementById("addButton");
let value: InputValue = "";
const todos: todoList = [];

// add todo on the todo button click

const addTodo = (event: Event): void => {
  event.preventDefault();
  value = input.value.toString();
  todos.push(value);
  input.value = "";
  console.log(todos);
};

// Display todo on the web page

addButton.addEventListener("click", addTodo);
