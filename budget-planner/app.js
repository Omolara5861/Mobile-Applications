const expenseReason = document.querySelector('#expense-reason');
const expenseAmount = document.querySelector('#expense-amount');
const clearBtn = document.querySelector('#clear-btn');
const addBtn = document.querySelector('#add-btn');
const expenseList = document.querySelector('#expense-list');
const totalExpenses = document.querySelector('#total-expenses');
let totalAmount = 0;

// Adding Expense
addBtn.addEventListener('click', () => {
    const reason = expenseReason.value;
    const amount = expenseAmount.value;
    if(reason.trim().length === 0 || amount <= 0 || amount.length === 0) {
        presentAlert();
        return; // Stops execution of other codes
    }
    const newItem = document.createElement('ion-item');
    newItem.textContent = reason + ': $' + amount;
    expenseList.appendChild(newItem);
    clearInputs();
    totalAmount += +amount;
    totalExpenses.textContent = totalAmount;
});

// Clearing Input
function clearInputs() {
    console.log('worked!');
    expenseAmount.value = '';
    expenseReason.value = '';
}
clearBtn.addEventListener('click', clearInputs);

// Warning Alert
async function presentAlert() {
    const alert = document.createElement('ion-alert');
    alert.header = 'Invalid Inputs';
    alert.message = 'Please enter a valid reason and amount!';
    alert.buttons = ['OK'];
    alert.style.marginTop = '-100px';
  
    document.body.appendChild(alert);
    await alert.present();
  }