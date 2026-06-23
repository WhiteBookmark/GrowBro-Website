class CommonHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
	<header class="header">
		<div class="container">
			<div class="nav-wrapper">
				<div class="logo">
					<a href="index.html">
						<h1>GrowBro</h1>
					</a>
				</div>
				<nav class="nav">
					<a href="about.html" class="nav-link">About Us</a>
					<a href="services.html" class="nav-link">Services</a>
					<a href="contact.html" class="nav-link">Contact</a>
				</nav>
				<button class="mobile-menu-btn" id="mobileMenuBtn">
					<span></span>
					<span></span>
					<span></span>
				</button>
			</div>
		</div>
	</header>
        `;

        const currentPath = window.location.pathname;
        const pageName = currentPath.split('/').pop() || 'index.html';
        const navLinks = this.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            if (link.getAttribute('href') === pageName) {
                link.classList.add('active');
            }
        });
    }
}
customElements.define('common-header', CommonHeader);

class CommonFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
	<footer class="footer">
		<div class="container">
			<div class="footer-grid">
				<div class="footer-column">
					<h3>GrowBro</h3>
					<p>Your trusted partner for video content creation, web design, and IT solutions.</p>
					<div class="footer-social">
						<a href="https://www.instagram.com/growbro.social/" class="social-link" target="_blank"
							rel="noopener noreferrer" aria-label="Instagram">
							<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor"
								stroke-width="2" aria-hidden="true">
								<rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
								<path d="M16 11.37a4 4 0 1 1-2.74-2.74 4 4 0 0 1 2.74 2.74z"></path>
								<line x1="17.5" y1="6.5" x2="17.5" y2="6.5"></line>
							</svg>
						</a>
					</div>
				</div>
				<div class="footer-column">
					<h4>Quick Links</h4>
					<ul class="footer-links">
						<li><a href="index.html">Home</a></li>
						<li><a href="about.html">About Us</a></li>
						<li><a href="services.html">Services</a></li>
						<li><a href="contact.html">Contact</a></li>
					</ul>
				</div>
				<div class="footer-column">
					<h4>Services</h4>
					<ul class="footer-links">
						<li><a href="#">Video Content</a></li>
						<li><a href="#">Web Design</a></li>
						<li><a href="#">IT Projects</a></li>
						<li><a href="#">Consulting</a></li>
					</ul>
				</div>
				<div class="footer-column">
					<h4>Contact</h4>
					<ul class="footer-links">
						<li>
							<a href="mailto:contact@growbro.com" style="display: flex; align-items: center; gap: 8px;">
								<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
								contact@growbro.com
							</a>
						</li>
						<li>
							<a href="tel:+971502177595" style="display: flex; align-items: center; gap: 8px;">
								<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
								+971502177595
							</a>
						</li>
						<li>
							<a href="https://maps.app.goo.gl/dmbA475pYptq7Vdx6" target="_blank" rel="noopener noreferrer" style="display: flex; align-items: center; gap: 8px;">
								<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
								Myriad, Academic City, Dubai, UAE
							</a>
						</li>
					</ul>
				</div>
			</div>
			<div class="footer-bottom">
				<p>&copy; 2026 GrowBro Agency. All rights reserved.</p>
			</div>
		</div>
	</footer>
        `;
    }
}
customElements.define('common-footer', CommonFooter);
