const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')



function newTodo() {

  var inputField = document.getElementById("inputField")
  inputField.style.display = "block";

}


function createNewDiv() {
  let todoName = document.getElementById("todoName");
  text = todoName.value;

  let div = document.createElement('div');
  div.style = "display: inline-block; width:100%"
  div.class = classNames.TODO_ITEM;

  let checkbox = document.createElement('input');
  checkbox.type = "checkbox";
  checkbox.class = classNames.TODO_CHECKBOX;
  checkbox.id = text + "id";

  div.appendChild(checkbox);

  let label = document.createElement('p');
  label.class = classNames.TODO_TEXT;
  label.style = "display:inline";
  label.textContent = text;

  div.appendChild(label);

  div.appendChild(document.createElement('hr'));

  list.appendChild(div);
}