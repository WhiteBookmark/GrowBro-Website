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

// Video play overlay logic & Expand Animation
const backdrop = document.createElement('div');
backdrop.className = 'video-backdrop';
document.body.appendChild(backdrop);

let expandedItem = null;
let placeholder = null;

function closeExpandedVideo() {
  if (!expandedItem) return;

  const video = expandedItem.querySelector('video');
  if (video) video.pause();

  const rect = placeholder.getBoundingClientRect();
  expandedItem.style.top = rect.top + 'px';
  expandedItem.style.left = rect.left + 'px';
  expandedItem.style.width = rect.width + 'px';
  expandedItem.style.height = rect.height + 'px';
  expandedItem.style.setProperty('transform', 'none', 'important');

  backdrop.classList.remove('active');
  document.body.classList.remove('video-active');

  setTimeout(() => {
    if (placeholder && placeholder.parentNode) {
      placeholder.parentNode.replaceChild(expandedItem, placeholder);
    }
    expandedItem.style = '';
    expandedItem.classList.remove('video-expanded');
    expandedItem = null;
    placeholder = null;
  }, 500);
}

backdrop.addEventListener('click', closeExpandedVideo);

document.querySelectorAll('.work-media').forEach(media => {
  const video = media.querySelector('video');
  const overlay = media.querySelector('.play-overlay');
  const item = media.closest('.work-item');

  if (video && overlay) {
    overlay.addEventListener('click', (e) => {
      e.stopPropagation();
      
      if (expandedItem === item) {
          video.play();
          return;
      }

      if (expandedItem) closeExpandedVideo();

      expandedItem = item;
      
      const rect = item.getBoundingClientRect();
      
      placeholder = document.createElement('div');
      placeholder.className = 'work-item-placeholder';
      placeholder.style.width = rect.width + 'px';
      placeholder.style.height = rect.height + 'px';
      item.parentNode.insertBefore(placeholder, item);
      
      item.style.position = 'fixed';
      item.style.top = rect.top + 'px';
      item.style.left = rect.left + 'px';
      item.style.width = rect.width + 'px';
      item.style.height = rect.height + 'px';
      item.style.margin = '0';
      item.style.zIndex = '2001';
      item.style.transition = 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)';
      item.style.setProperty('transform', 'none', 'important');

      item.classList.add('video-expanded');
      document.body.appendChild(item);

      item.offsetHeight; // Force reflow
      
      backdrop.classList.add('active');
      document.body.classList.add('video-active');

      item.style.top = '50%';
      item.style.left = '50%';
      item.style.width = '90vw';
      item.style.maxWidth = '800px';
      item.style.height = 'auto';
      item.style.setProperty('transform', 'translate(-50%, -50%)', 'important');

      video.play();
    });

    video.addEventListener('play', () => {
      video.setAttribute('controls', 'controls');
      overlay.style.display = 'none';
    });
  }
});
