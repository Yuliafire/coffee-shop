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


  //UP BUTTON


	const scrollToTopBtn = document.getElementById("scrollToTopBtn");
	function handleScroll() {
		if (window.innerWidth <= 768) {
			if (window.scrollY > 300) {
				scrollToTopBtn.style.display = "block";
			} else {
				scrollToTopBtn.style.display = "none";
			}
		} else {
			scrollToTopBtn.style.display = "none";
		}
	}

	window.addEventListener("scroll", handleScroll);
	window.addEventListener("resize", handleScroll); // Обработчик для изменения размера окна

	scrollToTopBtn.addEventListener("click", function () {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	});
	handleScroll();
});


