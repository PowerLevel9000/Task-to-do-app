const dataBase = require('./local.js');

export const showTrash = (i) => {
  const dragBTn = document.querySelectorAll('.material-symbols-outlined');
  const trash = document.querySelectorAll('.fa-trash-can');
  dragBTn[i].classList.add('hidden');
  trash[i].classList.remove('hidden');
};

export const hideTrash = (i) => {
  const dragBTn = document.querySelectorAll('.material-symbols-outlined');
  const trash = document.querySelectorAll('.fa-trash-can');
  dragBTn[i].classList.remove('hidden');
  trash[i].classList.add('hidden');
};

export const removeTask = (dataBase, i) => {
  dataBase.splice(i, 1);
  localStorage.setItem('dataBase', JSON.stringify(dataBase));
  if (process.env.NODE_ENV !== 'test') {
    window.location.reload();
  }
};

export const completibilty = (i) => {
  const strike = document.querySelectorAll('label');
  if (dataBase[i].check === false) {
    dataBase[i].check = true;
    strike[i].classList.add('strike');
    localStorage.setItem('dataBase', JSON.stringify(dataBase));
  } else if (dataBase[i].check === true) {
    dataBase[i].check = false;
    strike[i].classList.remove('strike');
    localStorage.setItem('dataBase', JSON.stringify(dataBase));
  }
};

export const valueUpdate = (i) => {
  const strike = document.querySelectorAll('label');
  dataBase[i].task = strike[i].innerText;
  localStorage.setItem('dataBase', JSON.stringify(dataBase));
};

export const complexFunctionality = () => {
  const editAble = document.querySelectorAll('.task-list');
  const trash = document.querySelectorAll('.fa-trash-can');
  const checkbox = document.querySelectorAll('.checkbox');
  const strike = document.querySelectorAll('label');
  for (let i = 0; i < editAble.length; i += 1) {
    strike[i].addEventListener('input', () => valueUpdate(i));
    checkbox[i].addEventListener('input', () => completibilty(i));
    trash[i].addEventListener('click', () => removeTask(dataBase, i));
    editAble[i].addEventListener('mouseout', () => hideTrash(i));
    editAble[i].addEventListener('mouseover', () => showTrash(i));
  }
};
