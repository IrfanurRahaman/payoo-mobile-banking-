document.getElementById('cashout-btn').addEventListener('click', function(){

    //getting cashout number and varifying it
    const cashoutNumber = GetInputValue('cashout-number');
    const cashOutAmount = GetInputValue('cashout-amount');
    const cashOutPin = GetInputValue('cashout-pin');

        // cashout numeber varifying 
    if(cashoutNumber !== '01812323453'){
        alert('Invalid Agent Number');
        return;     
    }
        
        // varifying cashout amount if its above 0 
    if(cashOutAmount < 0)    {
        alert('Invalid Amount');
        return;
    }
        // getting main current balance
    const currentBalance =  getBalance();
        // calculating newbalance
    const newBalance = currentBalance - Number(cashOutAmount);

        // varifying if the cashout amount is not bigger then newbalance
    if(newBalance < cashOutAmount){
        alert('Insufficient Fund');
        return;
    }
    else{
        setNewBalance(newBalance);
    }     
    
        // varifying Pin
    if(cashOutPin !== '2244'){
        alert('Wrong Pin');
        return;
    }
    else{
        alert('Cashout Successful');

        // adding cashout history to transactions section

        const transaction = document.getElementById('transaction-container');

        const transactionDiv = document.createElement('div');

        transactionDiv.innerHTML = `
        <div class="transaction-card bg-white p-4 rounded-xl">
          Cashout Bdt ${cashOutAmount} To Account : ${cashoutNumber} successful at
            ${new Date()}
        </div>
        `

        transaction.append(transactionDiv);
    }
    
})




// document.getElementById('cashout-btn').addEventListener('click', function(){
//     const cashOutNumber = document.getElementById('cashout-number').value;
//     console.log(cashOutNumber);
//     if(cashOutNumber !== '55555555555'){
//         alert('Invalid Agent Number');
//         return;
//     }

//     const balancetext = document.getElementById('balance');
//     const balanceInput = balancetext.innerText; 
//     const balance = Number(balanceInput.replace(/[^\d.]/g, ""));

//     const cashOutAmount = document.getElementById('cashout-amount').value;
//     if(balance < cashOutAmount){
//         alert('Insufficient Fund')
//         return;
//     }
 
//     const cashOutPin = document.getElementById('cashout-pin').value;
//     console.log(cashOutPin);
//     if(cashOutPin === '2244'){
//         alert('Cashout Successfull');
        
//     }else{
//         alert('Wrong Pin');
//         return;
//     }


//     const newBalance = balance - cashOutAmount;
//     if(newBalance < 0){
//         alert('Invalid Amount');
//         return;
//     }
//     balancetext.innerText = newBalance;
//     // console.log(newBalance);
//     // balance.innerText = newBalance;

    
// })