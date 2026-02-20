// document.getElementById("cashout-btn").addEventListener("click", function () {

//     // 1. get the mobile number and verify the number
//     const mobileNumber = document.getElementById("cashout-nbr");
//     const mobileNumberValue = mobileNumber.value;
//     console.log(mobileNumberValue);

//     // 2. get the amount
//     const amountInput = document.getElementById("cashout-amount");
//     const amount = amountInput.value;
//     console.log(amount);

//     // 3. get the current balance
//     const balanceElement = document.getElementById("balance");
//     const balanceText = balanceElement.innerText;
//     console.log(balanceText);

//     // 4. calculate the new balance
//     const newBalance = Number(balanceText) - Number(amount);
    
//     if (newBalance < 0) {
//         alert("Insufficient balance. Please enter a smaller amount.");
//         return;
//     }
//     console.log(newBalance);

//     // 5. get the pin and verify the pin
//     const pinInput = document.getElementById("cashout-pin");
//     const pin = pinInput.value;
//     console.log(pin);

//     if (pin === "1234") {
//       // 5-1. true: show the new balance and alert the user that cashout is successful
//       balanceElement.innerText = newBalance;
//       alert("Cashout successful! Your new balance is: " + newBalance);
//     } else {
//       // 5-2. false: alert the user that pin is incorrect and return
//       alert("Incorrect PIN. Please try again.");
//     }
    
    
// })

// optimized code using function

document.getElementById("cashout-btn").addEventListener("click", function () {
  // 1. get the mobile number and verify the number
    const agentNumber = getValueFromInput("cashout-nbr");
    if (agentNumber.length !== 11) {
        alert("Please enter a valid 11-digit mobile number.");
        return;
    }

  // 2. get the amount
    const amount = getValueFromInput("cashout-amount");
    if (amount <= 0) {
        alert("Please enter a valid amount greater than zero.");
        return;
    }
   
    // 4. calculate the new balance
    const balance = getBalance();
    const newBalance = balance - Number(amount);
    if (newBalance < 0) {
        alert("Insufficient balance. Please enter a smaller amount.");
        return;
    }

    // 5. get the pin and verify the pin
    const pin = getValueFromInput("cashout-pin");
    if (pin === "1234") {
        // 5-1. true: show the new balance and alert the user that cashout is successful
        alert("Cashout successful! Your new balance is: " + newBalance);
        updateBalance(amount);
    } else {
        // 5-2. false: alert the user that pin is incorrect and return
        alert("Incorrect PIN. Please try again.");
        return;
    }
})