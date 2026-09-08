/* =========================
       CURRENT YEAR
    ========================== */

document.getElementById("year").textContent = new Date().getFullYear();

/* =========================
       NAVBAR SCROLL
    ========================== */

const navbar = document.getElementById("navbar");

window.addEventListener("scroll", function () {
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

/* =========================
       SCROLL REVEAL
    ========================== */

const revealElements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");

        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.12,
  },
);

revealElements.forEach((element) => {
  observer.observe(element);
});

/* =========================
       CLOSE MOBILE NAV
    ========================== */

const navLinks = document.querySelectorAll(".navbar .nav-link");

const navbarCollapse = document.querySelector(".navbar-collapse");

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (window.innerWidth < 992) {
      const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);

      if (bsCollapse) {
        bsCollapse.hide();
      }
    }
  });
});

/* =========================
       ACTIVE MENU
    ========================== */

const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 160;

    if (window.scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");

    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});
