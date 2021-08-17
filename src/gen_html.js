export default function genHTML(list, arr) {
  for (let i = 0; i < arr.length; i += 1) {
    const item = document.createElement('li');
    const checkbox = document.createElement('input');
    const desc = document.createElement('label');
    checkbox.type = 'checkbox';
    checkbox.class = 'checkbox';
    checkbox.id = `checkbox-${i}`;
    desc.htmlFor = `checkbox-${i}`;
    desc.innerHTML = arr[i].description;

    item.appendChild(checkbox);
    item.appendChild(desc);

    list.appendChild(item);
  }
}