export default function checkComplete(arr) {
  const checkboxes = document.querySelectorAll('.checkbox');
  for (let i = 0; i < arr.length; i += 1) {
    arr[i].completed = checkboxes[i].checked;
  }
  return JSON.stringify(arr);
}