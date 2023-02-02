import './styles/main.scss';
const submitForm = require('./submit')
import clear from './status.js'; // eslint-disable-line

const dataBase = JSON.parse(localStorage.getItem('dataBase')) || [];

const form = document.getElementById('formId');


const tasks = document.getElementById('tasks');
const htmlGenerator = () => {
  tasks.innerHTML = '';
  dataBase.forEach((element) => {
    if (element.check) {
      //  I should use input instead of contenteditable so that i can have all js event
      //  for input such as onfocus
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

//  i could make a task class with methods in it for more clarity  in code
// function submitForm() {
//   if (taskGen.value.trim() === '') return;
//   dataBase.push({ check: false, task: `${taskGen.value}`, id: dataBase.length });
//   localStorage.setItem('dataBase', JSON.stringify(dataBase));
//   taskGen.value = '';
// }

form.addEventListener('submit', submitForm);

const editAble = document.querySelectorAll('.task-list');
const dragBTn = document.querySelectorAll('.material-symbols-outlined');
const trash = document.querySelectorAll('.fa-trash-can');
const checkbox = document.querySelectorAll('.checkbox');
const strike = document.querySelectorAll('label');
// console.log(strike)

for (let i = 0; i < editAble.length; i += 1) {
  editAble[i].addEventListener('mouseover', () => {
    dragBTn[i].classList.add('hidden');
    trash[i].classList.remove('hidden');
  });

  editAble[i].addEventListener('mouseout', () => {
    dragBTn[i].classList.remove('hidden');
    trash[i].classList.add('hidden');
  });

  trash[i].addEventListener('click', () => {
    dataBase.splice(i, 1);
    localStorage.setItem('dataBase', JSON.stringify(dataBase));
    window.location.reload();
  });

  checkbox[i].addEventListener('input', () => {
    if (dataBase[i].check === false) {
      dataBase[i].check = true;
      strike[i].classList.add('strike');
      localStorage.setItem('dataBase', JSON.stringify(dataBase));
    } else if (dataBase[i].check === true) {
      dataBase[i].check = false;
      strike[i].classList.remove('strike');
      localStorage.setItem('dataBase', JSON.stringify(dataBase));
    }
  });

  strike[i].addEventListener('input', () => {
    dataBase[i].task = strike[i].innerText;
    localStorage.setItem('dataBase', JSON.stringify(dataBase));
  });
}

const clearBtn = document.getElementById('clearAll');
clearBtn.addEventListener('click', clear);
const refresh = document.querySelector('.fa-rotate');
refresh.addEventListener('click', () => {
  window.location.reload();
});
export default dataBase;
