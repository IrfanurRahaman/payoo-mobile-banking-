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
        // calculating balance
    const balanceText = document.getElementById('balance');
    const balance = Number(balanceText.innerText.replace(/[^\d.]/g, ""));
    const newBalance = balance - cashOutAmount;

        // varifying if the cashout amount is not bigger then newbalance
    if(newBalance < cashOutAmount){
        alert('Insufficient Fund');
        return;
    }
    else{
        balanceText.innerText = newBalance;
    }     
    
        // varifying Pin
    if(cashOutPin !== '2244'){
        alert('Wrong Pin');
        return;
    }
    else{
        alert('Cashout Successfull');
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