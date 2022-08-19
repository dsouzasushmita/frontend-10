let addToDoButton = document.getElementById("addToDo");
let toDoContainer = document.getElementById("toDoContainer");
let inputField = document.getElementById("inputField");

function removeEl(e) {
  toDoContainer.removeChild(e.target.parentElement);
}
addToDoButton.addEventListener("click", function () {
  if (inputField.value == "") {
    alert("Please enter a todo");
  } else {
    let todoItem = document.createElement("li");
    todoItem.classList.add("todo-styling");
    todoItem.innerHTML = `<ion-icon name="checkmark-outline"></ion-icon>${inputField.value}<ion-icon name="close-outline" class="close" onclick="removeEl(event)"></ion-icon>`;
    inputField.value = "";
    toDoContainer.appendChild(todoItem);
    todoItem.addEventListener("click", function () {
      todoItem.style.textDecoration = "line-through 3px #ffa8a8";
    });
  }
});
