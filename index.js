  document.addEventListener("DOMContentLoaded", function () {
    const sidebar = document.getElementById("sidebar");
    const menu = document.querySelector(".menu");
    const close = document.querySelector(".close");

    // Open sidebar when menu is clicked
    menu.addEventListener("click", function (e) {
      e.stopPropagation(); // prevent document click from firing
      sidebar.classList.add("active");
    });

    // Close sidebar when close icon is clicked
    close.addEventListener("click", function (e) {
      e.stopPropagation(); // prevent document click from firing
      sidebar.classList.remove("active");
    });

    // Close sidebar when clicking outside of it
    document.addEventListener("click", function (e) {
      if (!sidebar.contains(e.target) && !menu.contains(e.target)) {
        sidebar.classList.remove("active");
      }
    });
  });

