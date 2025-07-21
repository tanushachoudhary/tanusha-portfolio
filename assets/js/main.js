document.addEventListener(
  "DOMContentLoaded",
  function () {
    new SweetScroll({}),
      particlesJS("particles-js", {
        particles: {
          number: { value: 30, density: { enable: !0, value_area: 800 } },
          color: { value: "#ffffff" },
          shape: {
            type: "polygon",
            stroke: { width: 0, color: "#000000" },
            polygon: { nb_sides: 5 },
            image: { src: "img/github.svg", width: 100, height: 100 },
          },
          opacity: {
            value: 0.5,
            random: !1,
            anim: { enable: !1, speed: 1, opacity_min: 0.1, sync: !1 },
          },
          size: {
            value: 3,
            random: !0,
            anim: {
              enable: !1,
              speed: 19.18081918081918,
              size_min: 0.1,
              sync: !1,
            },
          },
          line_linked: {
            enable: !0,
            distance: 150,
            color: "#ffffff",
            opacity: 0.4,
            width: 1,
          },
          move: {
            enable: !0,
            speed: 4,
            direction: "none",
            random: !0,
            straight: !1,
            out_mode: "out",
            bounce: !1,
            attract: { enable: !1, rotateX: 600, rotateY: 1200 },
          },
          nb: 80,
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: { enable: !1, mode: "grab" },
            onclick: { enable: !0, mode: "push" },
            resize: !0,
          },
          modes: {
            grab: { distance: 400, line_linked: { opacity: 1 } },
            bubble: {
              distance: 400,
              size: 40,
              duration: 2,
              opacity: 8,
              speed: 3,
            },
            repulse: { distance: 200, duration: 0.4 },
            push: { particles_nb: 4 },
            remove: { particles_nb: 2 },
          },
        },
        retina_detect: !0,
      });
  },
  !1
);
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault(); // prevent default form submission

  const name = document.getElementById("name").value.trim();
  const message = document.getElementById("message").value.trim();

  const mailtoLink = `mailto:tanushac1811@gmail.com?subject=New Contact Form Message&body=Name: ${encodeURIComponent(
    name
  )}%0D%0AMessage: ${encodeURIComponent(message)}`;

  window.location.href = mailtoLink;
});
// Add this JavaScript to make the mobile menu work
document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".hamburger");
  const menuItems = document.querySelector(".menu-items");

  if (hamburger && menuItems) {
    hamburger.addEventListener("click", function () {
      hamburger.classList.toggle("active");
      menuItems.classList.toggle("active");
    });

    // Close menu when clicking on a link
    const navLinks = document.querySelectorAll(".menu-items li a");
    navLinks.forEach((link) => {
      link.addEventListener("click", function () {
        hamburger.classList.remove("active");
        menuItems.classList.remove("active");
      });
    });

    // Close menu when clicking outside
    document.addEventListener("click", function (e) {
      if (!hamburger.contains(e.target) && !menuItems.contains(e.target)) {
        hamburger.classList.remove("active");
        menuItems.classList.remove("active");
      }
    });
  }
});
