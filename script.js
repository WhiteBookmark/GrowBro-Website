// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById("mobileMenuBtn")
const nav = document.querySelector(".nav")

if (mobileMenuBtn) {
  mobileMenuBtn.addEventListener("click", () => {
    nav.classList.toggle("active")
    mobileMenuBtn.classList.toggle("active")
  })
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  })
})

// Add scroll effect to header
let lastScroll = 0
const header = document.querySelector(".header")

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset

  if (currentScroll > 100) {
    header.style.boxShadow = "0 2px 10px rgba(255, 255, 255, 0.1)"
  } else {
    header.style.boxShadow = "none"
  }

  lastScroll = currentScroll
})

// Initialize 3D Tilt Effects
if (typeof VanillaTilt !== 'undefined') {
  VanillaTilt.init(document.querySelectorAll(".feature-card"), {
    max: 15,
    speed: 400,
    glare: true,
    "max-glare": 0.15,
    scale: 1.05
  });

  VanillaTilt.init(document.querySelectorAll(".work-item"), {
    max: 10,
    speed: 400,
    glare: true,
    "max-glare": 0.1,
    scale: 1.02
  });

  VanillaTilt.init(document.querySelectorAll(".benefit-item"), {
    max: 15,
    speed: 400,
    glare: true,
    "max-glare": 0.15,
    scale: 1.05
  });

  VanillaTilt.init(document.querySelectorAll(".logo-item"), {
    max: 20,
    speed: 400,
    scale: 1.1
  });
}

console.log("[v0] GrowBro website initialized")

// Video play overlay logic
document.querySelectorAll('.work-media').forEach(media => {
  const video = media.querySelector('video');
  const overlay = media.querySelector('.play-overlay');

  if (video && overlay) {
    overlay.addEventListener('click', () => {
      video.play();
    });

    video.addEventListener('play', () => {
      video.setAttribute('controls', 'controls');
      overlay.style.display = 'none';
    });

    video.addEventListener('pause', () => {
      // Show overlay again on pause if desired, but user said "before it should only have a play icon"
      // If we want to hide controls and show overlay when paused:
      // video.removeAttribute('controls');
      // overlay.style.display = 'flex';
    });
  }
});
