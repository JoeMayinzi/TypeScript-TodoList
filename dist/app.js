"use strict";
const input = document.getElementById("form2");
const addButton = document.getElementById("addButton");
let value = "";
const todos = [];
// add todo on the todo button click
const addTodo = (event) => {
    event.preventDefault();
    value = input.value.toString();
    todos.push(value);
    input.value = "";
    console.log(todos);
};
// Display todo on the web page
addButton.addEventListener("click", addTodo);
