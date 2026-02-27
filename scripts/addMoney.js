document.getElementById('add-money-btn').addEventListener('click', function(){
    const selectBank = GetInputValue('add-money-bank');
    if(selectBank == 'Select Bank'){
        alert('Please Select a Bank First');
        return;
    }  
    
    // varifying add money account number
    const accountNo = GetInputValue('add-money-number');
    if(accountNo.length != 11 || isNaN(accountNo)){
        alert('Invalid Account Num');
        return;
    }

    const addMoneyPin = GetInputValue('add-money-pin');
    if(addMoneyPin != '2244'){
        alert('Wrong Pin');
        return;
    }
    
    const addAmount = GetInputValue('add-money-amount');
    if(addAmount <= 0 || isNaN(addAmount)){
        alert('Invalid Amount');
        return;
    }
    else{
        const addedMoney = getBalance() + Number(addAmount);
        setNewBalance(addedMoney);
    }

    alert(`Added Money Bdt ${addAmount} successfully 
    ${new Date()}`);

})