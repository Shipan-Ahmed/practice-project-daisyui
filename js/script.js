console.log("Hello, World!");

document.getElementById("login-btn").addEventListener("click", function () {
    // 1. get the mobile number
    const mobileNumber = document.getElementById("login-nbr");
    const mobileNumberValue = mobileNumber.value;
    console.log(mobileNumberValue);

    // 2. get the password
    const password = document.getElementById("login-pin");
    const passwordValue = password.value;
    console.log(passwordValue);

    // 3. check the mobile number and password is valid or not
    if (mobileNumberValue === "01776256168" && passwordValue === "1234") {
        alert("Login successful!");
        window.location.assign("./home.html");
    } else {
        alert("Invalid mobile number or password. Please try again.");
        return;
    }
})