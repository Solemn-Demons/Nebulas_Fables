//login handler if theyre already a user
const loginFormHandler = async (event) => {
  event.preventDefault();

  //collecting username and password from login screen
  const username = document.querySelector("#username-login").value.trim();
  const password = document.querySelector("#password-login").value.trim();

  if (username && password) {
    const response = await fetch("/api/user/login", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      //if successfully logged in redirect to whatever page we want
      document.location.replace("/");
    } else {
      alert(response.statusText);
    }
  }
};

//sign up handler if creating new user
const signupFormHandler = async (event) => {
  event.preventDefault();

  const username = document.querySelector("#user-signup").value.trim();
  const email = document.querySelector("#email-signup").value.trim();
  const password = document.querySelector("#password-signup").value.trim();

  if (username && email && password) {
    const response = await fetch("/api/users", {
      method: "POST",
      body: JSON.stringify({ username, email, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      //after they create account redirect wherever we want
      document.location.replace("/");
    } else {
      alert(response.statusText);
    }
  }
};

//whatever we name our login form and button will go here and run the form handler functions
document.querySelector("").addEventListener("", loginFormHandler);

document.querySelector("").addEventListener("", signupFormHandler);
