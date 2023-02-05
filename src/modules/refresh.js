import { clearLocalStorage } from './localStorage.js';

const refreshButton = document.getElementById('refresh-button');

const clearBooks = () => {
  localStorage.clear();
  clearLocalStorage();
  window.location.reload();
};

refreshButton.addEventListener('click', clearBooks);

export { refreshButton, clearBooks, clearLocalStorage };
