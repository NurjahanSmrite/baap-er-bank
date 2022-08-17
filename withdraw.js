//add event handler with the withdraw button
//get the withdraw amount from the withdraw input field
//also make sure to convert the input into a number by using parseFloat
//get previous withdraw total
//step-1: add event listener
document.getElementById('btn-withdraw').addEventListener('click',function(){
    //step-2
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmountString = withdrawField.value ;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);

    //step-7 clear the withdraw field
    withdrawField.value='';

    if(isNaN(newWithdrawAmount)){
        alert('please provide a valid number');
        return;
    }
    
//step-3
    const withdrawTotalElement=document.getElementById('withdraw-total');
    const previousWithdrawTotalStreing = withdrawTotalElement.innerText;
    const previousBalanceTotalS = parseFloat(previousWithdrawTotalStreing);

   
    //step-5 get the previous balance total
    const balanceTotalElement=document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    
     

    if(newWithdrawAmount > previousBalanceTotal){
        alert('baap er bank a etto taka nai');
        return ;
    }

     //step-4
     const currentWithdrawTotal = previousBalanceTotalS + newWithdrawAmount;
     withdrawTotalElement.innerText = currentWithdrawTotal;
 

    //step-6 
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceTotalElement.innerText = newBalanceTotal;


    
})