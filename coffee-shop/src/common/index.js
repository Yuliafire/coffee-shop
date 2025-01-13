// BURGER

document.addEventListener("DOMContentLoaded", function () {
  document.querySelector(".header").classList.remove("open");

  document.getElementById("burger").addEventListener("click", () => {
    window.scrollTo({
      top: 0,
    });
    document.querySelector(".header").classList.toggle("open");
    document.body.classList.toggle("menu-open");
  });

  document.querySelectorAll(".menu__link").forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const targetUrl = link.getAttribute("href");

      document.querySelector(".header").classList.remove("open");
      document.body.classList.remove("menu-open");

      setTimeout(() => {
        window.location.href = targetUrl;
      }, 300);
    });
  });
});
