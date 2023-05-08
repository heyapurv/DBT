const debtItems = document.getElementById('debt-items');
const addBtn = document.getElementById('add-btn');

// Add debt item to the list
addBtn.addEventListener('click', () => {
  const name = document.getElementById('name').value;
  const amount = document.getElementById('amount').value;
  if (!name || !amount) {
    alert('Please enter name and amount.');
    return;
  }
  const row = `
    <tr>
      <td>${name}</td>
      <td>${amount}\u20B9</td>
      <td><button class="status-btn">Mark as Paid</button></td>
      <td><button class="delete-btn">Delete</button></td>
    </tr>
  `;
  debtItems.insertAdjacentHTML('beforeend', row);
  document.getElementById('name').value = '';
  document.getElementById('amount').value = '';
});

// Mark debt item as paid
debtItems.addEventListener('click', (event) => {
  const element = event.target;
  const parent = element.parentNode.parentNode;
  if (element.classList.contains('status-btn')) {
    parent.classList.add('paid');
    element.innerText = 'Paid';
    element.disabled = true;
  } else if (element.classList.contains('delete-btn')) {
    parent.remove();
  }
});
