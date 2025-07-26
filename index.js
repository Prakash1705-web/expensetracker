 // Run when the page is loaded
  window.onload = function () {
    // Button click → go to login/register page
    const button = document.querySelector(".butn");
    button.onclick = function () {
      alert("Redirecting to login/register page...");
      window.location.href = "register.html"; // Change this to your actual page
    }}
    ;