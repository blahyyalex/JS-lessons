const deleteBtn = document.getElementById('delete-btn');
const mySelect = document.getElementById('my-select');

deleteBtn.addEventListener('click', () => {
  mySelect.removeChild(mySelect.options[mySelect.selectedIndex]);
});