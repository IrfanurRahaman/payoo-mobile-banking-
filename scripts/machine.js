// 
function GetInputValue(id){
    const input = document.getElementById(id);
    const value = input.value;
    return value;
}


// get current balance function
function getBalance(){
    const balanceText = document.getElementById('balance');
    const balance = balanceText.innerText;
    return Number(balance);
}

// set new balance funcation
function setNewBalance(value){
    const balanceText = document.getElementById('balance');
    balanceText.innerText = value;
}


// button toggling function

function showOnly(id){
    
    const addMoney = document.getElementById('add-money-section');
    const cashout = document.getElementById('cashout-section');
    const neutralSection = document.getElementById('neutral-section');

    
    addMoney.classList.add('hidden');    
    cashout.classList.add('hidden');    
    neutralSection.classList.add('hidden');

    document.getElementById(id).classList.remove('hidden');


}