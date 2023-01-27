import './styles/main.scss';

const dataBase = JSON.parse(localStorage.getItem('dataBase')) || [];

const form = document.getElementById('formId');
const taskGen = document.getElementById('taskGen');

const tasks = document.getElementById('tasks');
const htmlGenerator = () => {
  tasks.innerHTML = '';
  dataBase.forEach((element) => {
    if (element.check) {
      tasks.innerHTML += `
        <div class="task-list" draggable="true">
          <div>
            <input class="checkbox" type="checkbox" name="" id="${element.id}" checked>
            <label contenteditable="true">${element.task}</label>
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
          <div>
            <input class="checkbox" type="checkbox" name="" id="${element.id}">
            <label contenteditable="true">${element.task}</label>
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

function submitForm() {
  dataBase.push({ check: false, task: `${taskGen.value}`, id: dataBase.length });
  localStorage.setItem('dataBase', JSON.stringify(dataBase));
  taskGen.value = '';
}

form.addEventListener('submit', submitForm);

const editAble = document.querySelectorAll('.task-list');
const dragBTn = document.querySelectorAll('.material-symbols-outlined');
const trash = document.querySelectorAll('.fa-trash-can');
const checkbox = document.querySelectorAll('.checkbox');

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
      localStorage.setItem('dataBase', JSON.stringify(dataBase));
    } else if (dataBase[i].check === true) {
      dataBase[i].check = false;
      localStorage.setItem('dataBase', JSON.stringify(dataBase));
    }
  });
}

const clear = () => {
  const filteredBase = dataBase.filter((c) => c.check === false);
  localStorage.setItem('dataBase', JSON.stringify(filteredBase));
  window.location.reload();
};

const clearBtn = document.getElementById('clearAll');
clearBtn.addEventListener('click', clear);
