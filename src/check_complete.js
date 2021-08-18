import { listArr } from "./index.js";

export default function checkComplete() {
  const checkboxes = document.querySelectorAll('.checkbox');
  for (let i = 0; i < listArr.length; i += 1) {
    listArr[i].completed = checkboxes[i].checked;
  }
  localStorage.setItem('toDoList', JSON.stringify(listArr));
}