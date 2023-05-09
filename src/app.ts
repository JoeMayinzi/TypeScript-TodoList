type InputValue = string;
type todoList = string[];
type todoItem = HTMLLIElement;
type todoCheck = HTMLInputElement;
type todoItemText = HTMLSpanElement;

const input = <HTMLInputElement>document.getElementById("form2");
const addButton = <HTMLButtonElement>document.getElementById("addButton");
const todoContainer = <HTMLUListElement>(
  document.getElementById("todoContainer")
);

const todos: todoList = [];
const noTodoText = document.getElementById("noTodo") as HTMLParagraphElement;
let value: InputValue = "";

// add todo on the todo button click

const addTodo = (event: Event): void => {
  event.preventDefault();
  value = input.value.toString();
  todos.push(value);
  input.value = "";

  displayTodo(todos);
  console.log(todos);
};

const displayTodo = (todos: string[]): void => {
  const todoListItem: todoItem = document.createElement("li");
  const todoDone: todoCheck = document.createElement("input");
  const todoText: todoItemText = document.createElement("span");

  todoListItem.classList.add(
    "list-group-item",
    "rounded",
    "mb-3",
    "todoitem-bg",
    "border-0"
  );

  todoDone.type = "checkbox";
  todoDone.classList.add("form-check-input", "me-2");

  todos.map((todo) => {
    if (todos.length) {
      noTodoText.style.display = "none";
      todoText.textContent = todo;
      todoContainer.append(todoListItem);
      todoListItem.append(todoDone);
      todoListItem.append(todoText);
    }
  });

  todoDone.addEventListener("click", () => {
    if (todoDone.checked === true) {
      todoText.style.textDecoration = "line-through";
    } else {
      todoText.style.textDecoration = "none";
    }
  });
};

addButton.addEventListener("click", addTodo);
