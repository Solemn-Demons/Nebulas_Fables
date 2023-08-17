//logout function
const logout = async () => {
  const response = await fetch("/api/logout", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  });

  //if successfully logged out redirect wherever we want
  if (response.ok) {
    document.location.replace("/login");
  } else {
    alert(response.statusText);
  }
};

//once we make a logout button this will be the event listener to start the logout function
document.querySelector(".logout").addEventListener("submit", logout);
