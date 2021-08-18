import checkComplete from './check_complete';

export default function genHTML(list, arr) {
  for (let i = 0; i < arr.length; i += 1) {
    const item = document.createElement('li');
    const descCont = document.createElement('div');
    const checkbox = document.createElement('input');
    const desc = document.createElement('label');
    const itemIcon = document.createElement('i');
    descCont.classList.add('description-container');
    checkbox.type = 'checkbox';
    checkbox.addEventListener('change', () => {
      checkComplete(arr);
    });
    checkbox.id = `checkbox-${i}`;
    checkbox.classList.add('checkbox');
    checkbox.checked = arr[i].completed;
    desc.htmlFor = `checkbox-${i}`;
    desc.innerHTML = arr[i].description;
    if (checkbox.checked) {
      desc.classList.add('done');
    }
    itemIcon.classList.add('fas', 'fa-ellipsis-v', 'item-icon');

    descCont.appendChild(checkbox);
    descCont.appendChild(desc);

    item.appendChild(descCont);
    item.appendChild(itemIcon);

    list.appendChild(item);
  }
}