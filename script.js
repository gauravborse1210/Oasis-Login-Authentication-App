// Registration
const registerForm = document.getElementById("registerForm");
if (registerForm) {
  registerForm.addEventListener("click", function (e) {
    e.preventDefault();

    const username = document.getElementById("registerUsername").value.trim();
    const password = document.getElementById("registerPassword").value;
    const registerMsg = document.getElementById("registerMsg");

    if (!username || !password) {
      registerMsg.textContent = "Please enter username and password.";
    }

    let users = JSON.parse(localStorage.getItem("users") || "{}");
    if (users[username]) {
      registerMsg.textContent = "User already exists.";
    }

    users[username] = password;
    localStorage.setItem("users", JSON.stringify(users));
    registerMsg.style.color = "green";
    registerMsg.textContent = "Registration successful! You can now login.";
    registerForm.reset();
  });
}

// Login
const loginForm = document.getElementById("loginForm");
if (loginForm) {
  loginForm.addEventListener("click", function (e) {
    e.preventDefault();

    const username = document.getElementById("loginUsername").value.trim();
    const password = document.getElementById("loginPassword").value;
    const loginMsg = document.getElementById("loginMsg");
    let users = JSON.parse(localStorage.getItem("users") || "{}");
    
    if (users[username] && users[username] === password) {
      localStorage.setItem("loggedInUser", username);
      window.location.href = "secure.html";
    } else {
      loginMsg.textContent = "Invalid username or password.";
    }
  });
}
