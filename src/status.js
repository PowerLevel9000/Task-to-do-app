const clear = (dataBase) => {
  dataBase = dataBase.filter((data) => data.check === false);
  localStorage.setItem('dataBase', JSON.stringify(dataBase));
  if (process.env.NODE_ENV !== 'test') {
    window.location.reload();
  }
};
module.exports = clear;