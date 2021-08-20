export default function remove(num, list) {
  list.splice(num, 1);
  localStorage.setItem('toDoList', JSON.stringify(list));
  console.log('remove is running');
}