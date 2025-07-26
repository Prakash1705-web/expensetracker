
  window.onload = function () {
    const registerBtn = document.getElementById("register");

    registerBtn.onclick = function (event) {
      event.preventDefault(); // Prevent page refresh

      // Get form values
      const name = document.querySelector('input[placeholder="Enter your name"]').value.trim();
      const email = document.querySelector('input[placeholder="Enter your email"]').value.trim();
      const password = document.querySelector('input[placeholder="Enter your password"]').value.trim();
      const phone = document.querySelector('input[placeholder="Enter your phone number"]').value.trim();
      const income = document.querySelector('input[placeholder="Enter your income"]').value.trim();
      
      const genderInputs = document.querySelectorAll('.radio');
      let gender = "";
      if (genderInputs[0].checked) gender = "Male";
      if (genderInputs[1].checked) gender = "Female";

      // Validate
      if (!name || !email || !password || !phone || !income || !gender) {
        alert("Please fill in all the fields!");
        return;
      }

      // Optional: Store in localStorage for testing
      const userData = { name, email, gender, phone, income };
      localStorage.setItem("user", JSON.stringify(userData));

      // Show alert and redirect to dashboard
      alert("Registration successful!");
      window.location.href = "dashboard.html"; // ✅ Redirect here
    };
  };

