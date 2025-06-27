    const form = document.getElementById('loginForm');
    const errorMsg = document.getElementById('errorMsg');

    form.addEventListener('submit', function (e) {
      e.preventDefault();

      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;

      if (password === "Rathi@3474") {
        // Store session (optional)
        sessionStorage.setItem("loggedIn", "true");
        sessionStorage.setItem("email", email);
        // Redirect to Dashboard
        window.location.href = "dashboard.html";
      } else {
        errorMsg.style.display = "block";
        errorMsg.textContent = "Invalid credentials. Please try again.";
      }
    });