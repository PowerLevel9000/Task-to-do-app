export const loadData = (key) => {
  if (localStorage.getItem(key)) {
    return JSON.parse(localStorage.getItem(key));
  }
  return [];
};

export const saveData = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};

export const clearLocalStorage = (key) => {
  localStorage.removeItem(key);
};
let store = {};

export function setItem(key, value) {
  store[key] = value;
}

export function getItem(key) {
  return store[key];
}

export function removeItem(key) {
  delete store[key];
}

export function clear() {
  store = {};
}
