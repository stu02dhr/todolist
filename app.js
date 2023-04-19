const form = document.querySelector('#todo-form');
const todoInput = document.querySelector('#todo-form input[type="text"]');
const todoList = document.querySelector('#todo-list');

let todos = [];

function renderTodos() {
  todoList.innerHTML = '';

  todos.forEach(todo => {
    const li = document.createElement('li');
    li.innerText = todo;
    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('delete-btn');
    deleteBtn.innerText = 'X';
    li.appendChild(deleteBtn);
    todoList.appendChild(li);

    deleteBtn.addEventListener('click', () => {
      todos = todos.filter(item => item !== todo);
      renderTodos();
    });
  });
}

form.addEventListener('submit', event => {
  event.preventDefault();
  const todo = todoInput.value.trim();
  if (todo !== '') {
    todos.push(todo);
    todoInput.value = '';
    renderTodos();
  }
});

renderTodos();
