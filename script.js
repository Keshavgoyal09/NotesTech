const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

document.addEventListener("DOMContentLoaded", function () {
  // Toggle navigation menu for mobile
  const navToggle = document.querySelector(".nav-toggle");
  const navMenu = document.querySelector(".nav-menu");

  if (navToggle && navMenu) {
    navToggle.addEventListener("click", function () {
      navMenu.classList.toggle("active");
    });
  }

  // Ensure iframes (Google Drive previews) are responsive
  const iframes = document.querySelectorAll("iframe");
  iframes.forEach((iframe) => {
    const wrapper = document.createElement("div");
    wrapper.classList.add("responsive-iframe");
    iframe.parentNode.insertBefore(wrapper, iframe);
    wrapper.appendChild(iframe);
  });

  // Adjust text content or layout on small screens
  function resizeTextContent() {
    const sections = document.querySelectorAll(".section-text");
    sections.forEach((section) => {
      if (window.innerWidth < 768) {
        section.style.fontSize = "1rem";
        section.style.padding = "10px";
      } else {
        section.style.fontSize = "1.25rem";
        section.style.padding = "20px";
      }
    });
  }

  window.addEventListener("resize", resizeTextContent);
  resizeTextContent();
});
