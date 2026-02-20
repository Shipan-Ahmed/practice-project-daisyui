document.getElementById("add-money-btn").addEventListener("click", function () {
    // 1. get the selected bank
    const bankSelect = document.getElementById("add-money-bnk");
    if (bankSelect.value === "Select a bank") {
        alert("Please select a bank.");
        return;
    }

    //2. get the account number and verify the number
    const accountNumber = getValueFromInput("add-money-acc");
    if (accountNumber.length !== 11) {
        alert("Please enter a valid 11-digit account number.");
        return;
    }

    // 3. get the amount
    const amount = getValueFromInput("add-money-amount");
    if (amount <= 0) {
        alert("Please enter a valid amount greater than zero.");
        return;
    }
    const newBalance = getBalance() + Number(amount);

    // 4. get the pin and verify the pin
    const pin = getValueFromInput("add-money-pin");
    if (pin === "1234") {
        // 4-1. true: show the new balance and alert the user that adding money is successful
        alert(`Money added successfully! Your new balance is: ${newBalance} from ${bankSelect.value} at account number ${accountNumber} on ${new Date()}`);
        updateBalance(Number(amount));

        // added money history
        // 1. get the history container
        const history = document.getElementById("history-container");
        // 2. create a new history item
        const historyItem = document.createElement("div");
        // 3. add this.innerHTML to the history item
        historyItem.innerHTML = `
            <div class="transaction-card p-5 bg-base-100 rounded-lg mb-4">
                Added money successfully: ${amount} BDT from ${bankSelect.value} at account number ${accountNumber} on ${new Date()}
            </div>
        `;

        // 4. append the history item to the history container
        history.append(historyItem);


    } else {
        // 4-2. false: alert the user that pin is incorrect and return
        alert("Incorrect PIN. Please try again.");
        return;
    }



} )