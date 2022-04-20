function getInputValue(inputId){
    const depositInput = document.getElementById(inputId);
    const depositAmountText = depositInput.value;
    const depositAmount = parseFloat(depositAmountText);
    depositInput.value = '';
    return depositAmount;
}








document.getElementById('deposit-button').addEventListener('click', function(){
// const depositInput = document.getElementById('deposit-input');
// const depositAmountText = depositInput.value;
// console.log(depositAmount);
// get current deposit 
const depositAmount = getInputValue('deposit-input');
const depositTotal = document.getElementById('deposit-total')
const depositTotalText = depositTotal.innerText;
const previousDepositTotal = parseFloat(depositTotalText);
// const depositAmount = parseFloat(depositAmountText);
depositTotal.innerText = previousDepositTotal + depositAmount;
// update total balance
const balanceTotal = document.getElementById('balance-total');
const balanceTotalText = balanceTotal.innerText;
const previousBalanceTotal = parseFloat(balanceTotalText);
balanceTotal.innerText = previousBalanceTotal + depositAmount; 

// console.log(depositTotalText);
// clear input field
// depositInput.value = '';
})
// withdraw button 
document.getElementById('withdraw-button').addEventListener('click', function(){
const withdrawInput = document.getElementById('withdraw-input');
const withdrawAmountText = withdrawInput.value;
// current withdraw 
const withdrawTotal = document.getElementById('withdraw-total')
const withdrawTotalText = withdrawTotal.innerText;
const previousWithdrawTotal = parseFloat(withdrawTotalText);
const withdrawAmount = parseFloat(withdrawAmountText);
withdrawTotal.innerText = previousWithdrawTotal + withdrawAmount;
// update total balance 
const balanceTotal = document.getElementById('balance-total');
const balanceTotalText = balanceTotal.innerText;
const previousBalanceTotal = parseFloat(balanceTotalText);
balanceTotal.innerText = previousBalanceTotal - withdrawAmount; 


withdrawInput.value = '';
})