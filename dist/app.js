"use strict";
const input = document.getElementById("form2");
const addButton = document.getElementById("addButton");
const todoContainer = (document.getElementById("todoContainer"));
const noTodoText = document.getElementById("noTodo");
let value = "";
const todos = [];
// add todo on the todo button click
const addTodo = (event) => {
    event.preventDefault();
    value = input.value.toString();
    todos.push(value);
    input.value = "";
    displayTodo(todos);
};
// Display todo on the web page
const displayTodo = (todos) => {
    todos.map((todo) => {
        if (todos.length) {
            todoContainer.removeChild(noTodoText);
            todoContainer.insertAdjacentHTML("beforebegin", `<li
           class="list-group-item d-flex align-items-center border-0 mb-2 rounded"
            style="background-color: #f4f6f7"
        >
            <input
              class="form-check-input me-2"
              type="checkbox"
              value=""
              aria-label="..."
              />
            <span>${todo}</span>
      </li>`);
        }
    });
};
addButton.addEventListener("click", addTodo);
