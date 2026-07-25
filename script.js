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

// ==========================================
// SCROLL-TRIGGERED AUTOPLAY FOR PORTFOLIO
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
  const videoBanners = document.querySelectorAll(".video-banner__media");

  if ("IntersectionObserver" in window) {
    const videoObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const video = entry.target;

        if (entry.isIntersecting) {
          // Play video when at least 25% is visible in viewport
          video.play().catch(err => {
            console.log("Autoplay blocked or video loading:", err);
          });
        } else {
          // Pause video when scrolled out of view to save CPU/battery
          video.pause();
        }
      });
    }, {
      threshold: 0.25 // Triggers when 25% of the video banner is visible
    });

    videoBanners.forEach(video => {
      videoObserver.observe(video);
    });
  } else {
    // Fallback for older browsers: play all videos immediately
    videoBanners.forEach(video => {
      video.play().catch(() => {});
    });
  }

  // Toggle mute/sound on video banner click
  document.querySelectorAll(".video-banner").forEach(banner => {
    const video = banner.querySelector(".video-banner__media");
    if (video) {
      banner.addEventListener("click", () => {
        video.muted = !video.muted;
      });
    }
  });
});

// Custom Cursor Logic
const cursor = document.createElement('div');
cursor.classList.add('custom-cursor');
document.body.appendChild(cursor);

document.addEventListener('mousemove', (e) => {
  // Hide custom cursor when hovering over scrollbars
  if (e.clientX >= document.documentElement.clientWidth || e.clientY >= document.documentElement.clientHeight) {
    cursor.style.opacity = '0';
  } else {
    cursor.style.opacity = '1';
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
  }
});

document.addEventListener('mouseleave', () => {
  cursor.style.opacity = '0';
});

document.addEventListener('mouseenter', () => {
  cursor.style.opacity = '1';
});

document.addEventListener('mousedown', () => cursor.classList.add('active'));
document.addEventListener('mouseup', () => cursor.classList.remove('active'));
