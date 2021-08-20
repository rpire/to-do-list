import genHTML from './gen_html';
import addNew from './add_new';
import './style.css';

let listArr = [];

const list = document.getElementById('list');

const reload = () => {
  if (localStorage.getItem('toDoList')) {
    const oldStorage = localStorage.getItem('toDoList');
    const newStorage = JSON.parse(oldStorage);
    list.innerHTML = '';
    listArr = newStorage;
    genHTML(list, listArr);
  } else {
    const defaultItem = [
      {
      description: 'Add your first task',
      completed: false,
      index: 0,
      },
    ];
    const newStorage = JSON.stringify(defaultItem);
    listArr = defaultItem;
    localStorage.setItem('toDoList', newStorage);
    list.innerHTML = '';
    genHTML(list, JSON.parse(newStorage));
  }
  const checkboxes = document.querySelectorAll('.checkbox');
  for (let i = 0; i < checkboxes.length; i += 1) {
    checkboxes[i].addEventListener('change', () => {
      reload();
    });
  }
};

window.onload = reload();

const task = document.getElementById('add-item');
const addNewBtn = document.getElementById('add-new-btn');
addNewBtn.addEventListener('click', () => {
  listArr.push(addNew(task.value, listArr.length));
  const newStorage = JSON.stringify(listArr);
  localStorage.setItem('toDoList', newStorage);
  task.value = '';
  reload();
});
