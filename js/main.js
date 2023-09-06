let action;
let balance = 1000;
let deposite;
let withdraw;

action = prompt('Select an action');

if (action === 'balance') {
    alert(balance);
}
else if (action === 'deposite') {
    deposite = +(prompt('How much?'));
    alert('Your balance now: ' + (balance + deposite) + ' UAH');
}

else if (action === 'withdraw') {
    withdraw = +(prompt('How much?')); {
        if (withdraw <= 1000) {
            alert('Your balance now: ' + (balance - withdraw));
        } else {
            alert('There is not enough money on your balance');
        }
    }
}

