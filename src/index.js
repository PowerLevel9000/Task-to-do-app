import './styles/main.scss';
import { complexFunctionality } from './complex.js';

const submitForm = require('./submit.js');
const dataBase = require('./local.js');

const clear = require('./status.js');

const form = document.getElementById('formId');

const tasks = document.getElementById('tasks');
const htmlGenerator = () => {
  tasks.innerHTML = '';
  dataBase.forEach((element) => {
    if (element.check) {
      tasks.innerHTML += `
        <div class="task-list" draggable="true">
          <div>
            <input class="checkbox" type="checkbox" name="" id="${element.id}" checked>
            <label class="list strike" contenteditable="true">${element.task}</label> 
          </div>
          <span class="material-symbols-outlined">
            drag_indicator
          </span>
          <i class="fa-solid fa-trash-can hidden"></i>
        </div>
    `;
    } else {
      tasks.innerHTML += `
        <div class="task-list" draggable="true">
          <div class='task-box'>
            <input class="checkbox" type="checkbox" name="" id="${element.id}">
            <label class="list" contenteditable="true">${element.task}</label>
          </div>
          <span class="material-symbols-outlined">
            drag_indicator
          </span>
          <i class="fa-solid fa-trash-can hidden"></i>
        </div>
    `;
    }
  });
};
htmlGenerator();

form.addEventListener('submit', submitForm);

complexFunctionality();

const clearBtn = document.getElementById('clearAll');
clearBtn.addEventListener('click', () => clear(dataBase));
const refresh = document.querySelector('.fa-rotate');
refresh.addEventListener('click', () => {
  window.location.reload();
});
