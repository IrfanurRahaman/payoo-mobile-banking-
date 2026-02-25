
document.getElementById('cashout-btn').addEventListener('click', function(){
    const cashOutNumber = document.getElementById('cashout-number').value;
    console.log(cashOutNumber);
    if(cashOutNumber !== '55555555555'){
        alert('Invalid Agent Number');
        return;
    }

    const balancetext = document.getElementById('balance');
    const balanceInput = balancetext.innerText; 
    const balance = Number(balanceInput.replace(/[^\d.]/g, ""));

    const cashOutAmount = document.getElementById('cashout-amount').value;
    if(balance < cashOutAmount){
        alert('Insufficient Fund')
        return;
    }
 
    const cashOutPin = document.getElementById('cashout-pin').value;
    console.log(cashOutPin);
    if(cashOutPin === '2244'){
        alert('Cashout Successfull');
        
    }else{
        alert('Wrong Pin');
        return;
    }


    const newBalance = balance - cashOutAmount;
    if(newBalance < 0){
        alert('Invalid Amount');
        return;
    }
    balancetext.innerText = newBalance;
    // console.log(newBalance);
    // balance.innerText = newBalance;

    
})