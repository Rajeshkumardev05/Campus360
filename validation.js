const form = document.getElementById("contactForm");
form.addEventListener("submit", function (e) 
{
    let isValid = true;
    const phoneInput = document.getElementById("phone");
    const phoneError = document.getElementById("phoneError");
    const phonePattern = /^\d{10}$/;
    if (!phonePattern.test(phoneInput.value)) {
        phoneError.textContent = "Invalid phone number";
        isValid = false;
    }
    else {
        phoneError.textContent = "";
    }

    
    const rollInput = document.getElementById("roll");
    const rollError = document.getElementById("rollError");
    const rollPattern = /^\d{8}$/;
    if (!rollPattern.test(rollInput.value)) {
        rollError.textContent = "Invalid Roll number";
        isValid = false;
    }
    else {
        rollError.textContent = "";
    }

    const emailInput = document.getElementById("email");
    const emailError = document.getElementById("emailError");
    const emailPattern = /^[A-Za-z0-9._%+-]+@nitj\.ac\.in$/;
    if (!emailPattern.test(emailInput.value)) {
        emailError.textContent = "Invalid email address. It should have the format 'string@nitj.ac.in'.";
        isValid = false;
    } else {
        emailError.textContent = "";
    }

    if (!isValid) {
        e.preventDefault();
    }
    else {
        alert("Form submitted successfully!");
    }
});