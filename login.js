var attempt = 3; // Variable to count the number of attempts

// Function to register a new user
function registerUser() {
    var newUsername = document.getElementById("new_username").value;
    var newPassword = document.getElementById("new_password").value;

    if (newUsername && newPassword) {
        // Store the new user credentials in localStorage
        localStorage.setItem(newUsername, newPassword);
        alert("User registered successfully.");

        // Redirect to a new page after successful registration
        window.location.href = "welcome.html"; // Change "welcome.html" to the path of your new page
    } else {
        alert("Please fill in both fields to register.");
    }
}


// Function to validate login
function validateLogin() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Check if the user exists in localStorage
    if (localStorage.getItem(username) === password) {
        alert("Login successfully");
        
        // Generate a student number (for example, a random number between 1 and 1000)
        var studentNumber = Math.floor(Math.random() * 1000) + 1;

        // Store the student number in localStorage
        localStorage.setItem('studentNumber', studentNumber);
        
        window.location = "success.html"; // Redirecting to success page
        return false;
    } else {
        attempt--; // Decrementing by one
        alert("Incorrect Password! You have left " + attempt + " attempt(s);");

        // Disabling fields after 3 attempts
        if (attempt === 0) {
            document.getElementById("username").disabled = true;
            document.getElementById("password").disabled = true;
            document.getElementById("submit").disabled = true;
            return false;
        }
    }
}
