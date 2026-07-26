class CommonHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
	<!-- 1. MINIMALIST FIXED HEADER -->
	<header class="minimal-header">
		<div class="header-left">
			<a href="index.html" class="brand-logo">GrowBro.</a>
		</div>
		<div class="header-center">
			<button id="menuToggleBtn" class="menu-toggle">[ MENU ]</button>
		</div>
		<div class="header-right">
			<span id="scrollIndicator">(SCROLL 0%)</span>
		</div>
	</header>

	<!-- 2. FULLSCREEN DROPDOWN MENU OVERLAY -->
	<nav id="fullscreenMenu" class="fullscreen-menu">
		<div class="menu-links-wrapper">
			<a href="about.html" class="menu-link">ABOUT</a>
			<a href="index.html#work" class="menu-link menu-link-close">WORK</a>
			<a href="contact.html" class="menu-link">CONTACT</a>
		</div>
	</nav>

	<!-- 3. FIXED BOTTOM-LEFT DUBAI TIME CLOCK -->
	<div class="fixed-clock">
		<span id="dubaiClock">DUBAI (--:-- --)</span>
	</div>
        `;
    }
}
customElements.define('common-header', CommonHeader);

class CommonFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <footer class="slaps-footer">
            <!-- Massive Background Watermark Text -->
            <div class="footer-watermark">GROWBRO.</div>

            <div class="footer-content">
                <!-- Top Row -->
                <div class="footer-top">
                    <div class="footer-top__left">
                        <a href="https://wa.me/971502177595" target="_blank" rel="noopener noreferrer" class="whatsapp-link">
                            <svg class="whatsapp-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                            </svg>
                            <span>CONTACT BY WHATSAPP</span>
                        </a>
                    </div>
                    <div class="footer-top__right">
                        <div class="inquiry-group">
                            <span class="inquiry-label">GENERAL INQUIRIES</span>
                            <a href="mailto:contact@growbro.com" class="inquiry-value">CONTACT@GROWBRO.COM</a>
                        </div>
                        <div class="inquiry-group">
                            <span class="inquiry-label">PHONE / WHATSAPP</span>
                            <a href="tel:+971502177595" class="inquiry-value">+971502177595</a>
                        </div>
                    </div>
                </div>

                <!-- Bottom Row -->
                <div class="footer-bottom">
                    <div class="footer-bottom__left">
                        <p class="office-location">
                            Dubai - London - Islamabad <br>
                            WEST AVENUE, 1808, DUBAI MARINA, DUBAI, UAE<br>
                        </p>
                    </div>
                    <div class="footer-bottom__right">
                        <div class="social-links">
                            <a href="https://www.instagram.com/growbro.social/" target="_blank" rel="noopener noreferrer">INSTAGRAM</a>
                            <a href="https://www.linkedin.com/company/growbro/" target="_blank" rel="noopener noreferrer">LINKEDIN</a>
                        </div>
                        <p class="copyright-text">&copy; 2026 GROWBRO. ALL RIGHTS RESERVED.</p>
                    </div>
                </div>
            </div>
        </footer>
        `;
    }
}
customElements.define('common-footer', CommonFooter);
