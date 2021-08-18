import genHTML from './gen_html';
import './style.css';

const listArr = [
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

window.onload = genHTML(list, listArr);