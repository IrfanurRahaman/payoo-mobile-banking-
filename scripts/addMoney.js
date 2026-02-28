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
        
        alert(`Added Money Bdt ${addAmount} successfully 
        ${new Date()}`);

        // adding add money history to transaction section

        const transaction = document.getElementById('transaction-container');

        const transactionDiv = document.createElement('div');

        transactionDiv.innerHTML = `
        <div class="transaction-card bg-white p-4 rounded-xl">
          Added Money Bdt ${addAmount} from Account : ${accountNo} successfully at
            ${new Date()}
        </div>
        `

        transaction.append(transactionDiv);
    }

    


})