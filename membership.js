const form = document.getElementById("membershipForm");
const successMessage = document.getElementById("successMessage");
const paymentSection = document.getElementById("paymentSection");
const qrCard = document.getElementById("qrCard");
const flipCard = document.getElementById("flipCard");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const formData = new FormData(form);

  fetch("register.php", {
    method: "POST",
    body: formData
  })
  .then(response => response.text())
  .then(data => {
    if (data.trim() === "success") {
      successMessage.style.display = "block";
      paymentSection.style.display = "block";
      qrCard.style.display = "block";
      flipCard.classList.add("flip");
      form.reset();

      setTimeout(() => {
        successMessage.style.display = "none";
      }, 4000);
    } else {
      alert("success field " + data);
    }
  })
  .catch(error => {
    console.error("Error:", error);
  });
});


