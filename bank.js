 
//step-1:add event listener to the deposit button
document.getElementById('btn-deposit').addEventListener('click',function(){
     //step-2: get the deposite amount from the deposite input field
     //for input field use .value to the value inside the input field
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value ;
    const newDepositAmount = parseFloat(newDepositAmountString);

    //step-3:get the current deposit total
    //for non-input(element other than input textarea)use innertext to get the text

    const deposiTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = deposiTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);

    //step-4 add numbers to set the total deposit
    const currentDepositTotal = previousDepositTotal + newDepositAmount;
    //set the deposit total
     deposiTotalElement.innerText = currentDepositTotal;
     //step-5: get balance current total
     const balanceTotalElement = document.getElementById('balance-total');
     const previousBalanceTotalString=balanceTotalElement.innerText;
     const previousBalanceTotal = parseFloat(previousBalanceTotalString);

     //step-6: calculate current total balance
     const currentBalanceTotal = previousBalanceTotal + newDepositAmount;
     balanceTotalElement.innerText =currentBalanceTotal;


     //step-7:deposit field clear
     depositField.value= '';
})