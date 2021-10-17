const input = document.querySelector('input');
const submit = document.querySelector('button'); 
const list = document.querySelector('ul');

submit.addEventListener('click', function () {
  let myEntry = input.value;
  input.value = '';

  const listItem = document.createElement('li');
  const listText = document.createElement('span');
  const deleteBtn = document.createElement('button');

  input.maxLength = 15;

  listItem.appendChild(listText);
  listText.textContent = myEntry;

  listItem.appendChild(deleteBtn);
  deleteBtn.textContent = '❌';
  
  list.appendChild(listItem);

  deleteBtn.onclick = function(e) {
    list.removeChild(listItem);
  }

  input.focus();    
})



