import genHTML from './gen_html';
import './style.css';

let listArr = [
  {
    description: 'wash the dishes',
    completed: false,
    index: 0,
  },
  {
    description: 'walk the dog',
    completed: false,
    index: 0,
  },
  {
    description: 'clean my room',
    completed: false,
    index: 0,
  },
];

const list = document.getElementById('list');

const reload = () => {
  if (localStorage.getItem('toDoList')) {
    const oldStorage = localStorage.getItem('toDoList');
    const newStorage = JSON.parse(oldStorage);
    list.innerHTML = '';
    listArr = newStorage;
    genHTML(list, listArr);
  } else {
    const newStorage = JSON.stringify(listArr);
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