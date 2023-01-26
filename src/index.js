import './styles/main.scss';

const dataBase = [
  {
    checked: true,
    task: 'stop Procrastination',
    id: new Date('December 17, 1995 03:24:00'),
  },
  {
    checked: false,
    task: 'stop Procrastination',
    id: new Date('December 17, 1995 03:24:00'),
  },
  {
    checked: true,
    task: 'stop Procrastination',
    id: new Date('December 17, 1995 03:24:00'),
  },
];

const form = document.getElementById('formId');
const taskGen = document.getElementById('taskGen');

const tasks = document.getElementById('tasks');
const htmlGenerator = () => {
  tasks.innerHTML = '';
  dataBase.forEach((element) => {
    if (element.checked) {
      tasks.innerHTML += `
        <div class="task-list" draggable="true">
          <div>
            <input type="checkbox" name="" id="${element.id}" checked>
            <label for="${element.id}" contenteditable="true">${element.task}</label>
          </div>
          <span class="material-symbols-outlined">
            drag_indicator
          </span>
        </div>
    `;
    } else {
      tasks.innerHTML += `
        <div class="task-list" draggable="true">
          <div>
            <input type="checkbox" name="" id="task-1">
            <label for="task-1" contenteditable="true">${element.task}</label>
          </div>
          <span class="material-symbols-outlined">
            drag_indicator
          </span>
        </div>
    `;
    }
  });
};
htmlGenerator();
function submitForm(event) {
  // Preventing page refresh
  event.preventDefault();
  dataBase.push({ checked: false, task: `${taskGen.value}`, id: new Date() });
  htmlGenerator();
  taskGen.value = '';
  return false;
}
form.addEventListener('submit', submitForm);
// draggable and other functionalities