"use strict";
const input = document.getElementById("form2");
const addButton = document.getElementById("addButton");
const todoContainer = (document.getElementById("todoContainer"));
const todos = [];
const noTodoText = document.getElementById("noTodo");
let value = "";
// add todo on the todo button click
const addTodo = (event) => {
    event.preventDefault();
    value = input.value.toString();
    todos.push(value);
    input.value = "";
    displayTodo(todos);
    console.log(todos);
};
const displayTodo = (todos) => {
    const todoListItem = document.createElement("li");
    const todoDone = document.createElement("input");
    const todoText = document.createElement("span");
    todoListItem.classList.add("list-group-item", "rounded", "mb-3", "todoitem-bg", "border-0");
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
        }
        else {
            todoText.style.textDecoration = "none";
        }
    });
};
addButton.addEventListener("click", addTodo);
