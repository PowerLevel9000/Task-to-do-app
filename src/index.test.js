import * as localStorage from './modules/localStorage.js';

jest.mock('./modules/localStorage.js', () => ({
  getItem: jest.fn().mockReturnValue(null),
  setItem: jest.fn(),
  clear: jest.fn(),
}));

describe('index.js', () => {
  beforeEach(() => {
    jest.spyOn(localStorage, 'getItem').mockReturnValue(JSON.stringify([]));
    document.body.innerHTML = '<form id="add-form"> <input id="book-title" type="text"> <input id="author-name" type="text"> <button type="submit">Add</button> </form> <button id="refresh-button">Refresh</button> <div id="list"></div> ';
  });

  it('clears the local storage when the refresh button is clicked', () => {
    const spy = jest.spyOn(localStorage, 'clear');
    document.getElementById('refresh-button').dispatchEvent(new Event('click'));
    localStorage.clear();
    expect(spy).toHaveBeenCalled();
  });
});