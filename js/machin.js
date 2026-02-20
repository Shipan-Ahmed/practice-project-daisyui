function getValueFromInput(id) {
    const inputField = document.getElementById(id);
    const input = inputField.value;
    console.log("id: " + id + ", input: " + input);
    return input;
}


// function to give current balance after cashout(amount) 
function updateBalance(amount) {
    const balanceElement = document.getElementById("balance");
    const balanceText = balanceElement.innerText;
    const newBalance = Number(balanceText) - Number(amount);
    balanceElement.innerText = newBalance;
    return newBalance;
}


// current balance
function getBalance() {
    const balanceElement = document.getElementById("balance");
    const balanceText = balanceElement.innerText;
    return Number(balanceText);
}


// machine id > hide all > show id
function showSection(Id) {
    const sections = document.querySelectorAll(".container");
    for (const section of sections) {
        section.classList.add("hidden");
    }
    const section = document.getElementById(Id);
    section.classList.remove("hidden");
}