const HIGHCOLOR = "red";
const MEDIUMCOLOR = "yellow";
const LOWCOLOR = "green";
const HIGH = "high";
const MEDIUM = 'medium';
const LOW = "low";

document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector('form');
  let taskField = document.querySelector('#new-task-description');
  let userField = document.querySelector('#user');
  let priorityField = document.getElementById('priority');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    let p = document.createElement(`p`);
    let btnDelete = document.createElement('button');
    let btnEdit = document.createElement('button');
    let tasks;
    let parentNode = e.target.parentNode;

    btnDelete.addEventListener('click', e  => {parentNode.remove()});
    btnDelete.textContent = ' X ';
    btnEdit.addEventListener('click', function (e) {
      let task = parentNode.querySelector('span.todo').textContent;
      let user = parentNode.querySelector('span.user').textContent;
      let color = parentNode.style.color;

      taskField.value = task;
      userField.value = user;
      
      if(color === HIGHCOLOR){
        priorityField.value = HIGH;
      } else if(color === MEDIUMCOLOR){
        priorityField.value = MEDIUM;
      } else {priorityField.value = LOW}
    
      parentNode.remove();
    }
    );
    
    btnEdit.textContent = 'edit';
    p.innerHTML = `<span class="user">${userField.value}</span>: <span class="todo">${taskField.value}</span> `;
    
    if (priorityField.value === HIGH) {
      tasks = document.querySelector('#tasksHigh')
      p.style.color = HIGHCOLOR;
    } else if(priorityField.value ===MEDIUM) {
      tasks = document.querySelector('#tasksMedium')
      p.style.color = MEDIUMCOLOR;
    } else {
      tasks = document.querySelector('#tasksLow')
      p.style.color = LOWCOLOR;
    };

    p.appendChild(btnDelete);
    p.appendChild(btnEdit)
    tasks.appendChild(p);   
    
    form.reset();
  })
});