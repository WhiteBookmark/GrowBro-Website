document.addEventListener("DOMContentLoaded", () => {
  // 1. FULLSCREEN MENU TOGGLE ([ MENU ] <-> [ CLOSE ])
  const menuBtn = document.getElementById("menuToggleBtn");
  const fullscreenMenu = document.getElementById("fullscreenMenu");
  let isMenuOpen = false;

  if (menuBtn && fullscreenMenu) {
    menuBtn.addEventListener("click", () => {
      isMenuOpen = !isMenuOpen;
      if (isMenuOpen) {
        fullscreenMenu.classList.add("active");
        menuBtn.textContent = "[ CLOSE ]";
        document.body.style.overflow = "hidden"; // Disable background scrolling
      } else {
        fullscreenMenu.classList.remove("active");
        menuBtn.textContent = "[ MENU ]";
        document.body.style.overflow = ""; // Enable background scrolling
      }
    });

    // Close menu when clicking internal anchor links (like WORK)
    document.querySelectorAll(".menu-link-close").forEach(link => {
      link.addEventListener("click", () => {
        isMenuOpen = false;
        fullscreenMenu.classList.remove("active");
        menuBtn.textContent = "[ MENU ]";
        document.body.style.overflow = "";
      });
    });
  }

  // 2. DYNAMIC SCROLL PERCENTAGE INDICATOR (SCROLL XX%)
  const scrollIndicator = document.getElementById("scrollIndicator");
  const updateScrollPercent = () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPercent = scrollHeight > 0 ? Math.round((scrollTop / scrollHeight) * 100) : 0;

    if (scrollIndicator) {
      scrollIndicator.textContent = `(SCROLL ${scrollPercent}%)`;
    }
  };
  window.addEventListener("scroll", updateScrollPercent);
  updateScrollPercent();

  // 3. LIVE DUBAI CLOCK (AM/PM FORMAT)
  const dubaiClock = document.getElementById("dubaiClock");
  function updateDubaiTime() {
    if (!dubaiClock) return;

    const now = new Date();
    // Format time strictly to Asia/Dubai timezone in 12-hour AM/PM format
    const options = {
      timeZone: "Asia/Dubai",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true
    };

    const timeString = new Intl.DateTimeFormat("en-US", options).format(now);
    dubaiClock.textContent = `DUBAI (${timeString})`;
  }

  // Initial call and set interval to update every second
  updateDubaiTime();
  setInterval(updateDubaiTime, 1000);

  // 4. SMOOTH SCROLL FOR HERO [ VIEW WORK ] CLICK
  const viewWorkBtn = document.querySelector(".view-work-overlay");
  if (viewWorkBtn) {
    viewWorkBtn.addEventListener("click", (e) => {
      e.preventDefault();
      const target = document.querySelector("#work");
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  }

  // 5. SCROLL-TRIGGERED AUTOPLAY FOR PORTFOLIO
  const videoBanners = document.querySelectorAll(".video-banner__media");

  if ("IntersectionObserver" in window) {
    const videoObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const video = entry.target;

        if (entry.isIntersecting) {
          video.play().catch(err => {
            console.log("Autoplay blocked or video loading:", err);
          });
        } else {
          video.pause();
        }
      });
    }, {
      threshold: 0.25
    });

    videoBanners.forEach(video => {
      videoObserver.observe(video);
    });
  } else {
    videoBanners.forEach(video => {
      video.play().catch(() => { });
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

// Smooth scroll for general anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const href = this.getAttribute("href");
    if (href && href !== "#") {
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  });
});

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

console.log("[v0] GrowBro website initialized");
