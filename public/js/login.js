//login handler if theyre already a user
const loginFormHandler = async (event) => {
  event.preventDefault();

  //collecting username and password from login screen
  const username = document.querySelector("#username-login").value.trim();
  const password = document.querySelector("#password-login").value.trim();

  if (username && password) {
    const response = await fetch("/api/users/login", {
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

//whatever we name our login form and button will go here and run the form handler functions
document.querySelector("login").addEventListener("click", loginFormHandler);
