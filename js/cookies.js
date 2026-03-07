/**
 * Gerenciador de Cookies e Consentimento
 * Controla o banner de cookies e armazena preferências do usuário
 */

class CookieConsent {
    constructor() {
        this.cookieName = 'justicaemdia_cookie_consent';
        this.cookieExpiry = 365; // dias
        this.init();
    }

    init() {
        // Verifica se o usuário já aceitou cookies
        if (!this.hasConsent()) {
            this.showBanner();
        }
    }

    hasConsent() {
        const cookie = document.cookie.split('; ').find(row => row.startsWith(this.cookieName + '='));
        return cookie !== undefined;
    }

    getCookie() {
        const cookie = document.cookie.split('; ').find(row => row.startsWith(this.cookieName + '='));
        if (cookie) {
            return JSON.parse(decodeURIComponent(cookie.split('=')[1]));
        }
        return null;
    }

    setCookie(data) {
        const expiryDate = new Date();
        expiryDate.setTime(expiryDate.getTime() + (this.cookieExpiry * 24 * 60 * 60 * 1000));
        const expires = "expires=" + expiryDate.toUTCString();
        
        document.cookie = this.cookieName + "=" + encodeURIComponent(JSON.stringify(data)) + ";" + expires + ";path=/";
    }

    showBanner() {
        const banner = document.createElement('div');
        banner.id = 'cookie-consent-banner';
        banner.innerHTML = `
            <div class="cookie-consent-container">
                <div class="cookie-content">
                    <div class="cookie-text">
                        <h3>Política de Cookies</h3>
                        <p>Utilizamos cookies para melhorar sua experiência no site. Ao continuar navegando, você concorda com nossa <strong>Política de Privacidade</strong> e uso de cookies.</p>
                    </div>
                    <div class="cookie-actions">
                        <button id="cookie-accept-btn" class="cookie-btn cookie-accept">Aceitar</button>
                        <button id="cookie-reject-btn" class="cookie-btn cookie-reject">Rejeitar</button>
                        <a href="politica-privacidade.html" target="_blank" class="cookie-link">Saiba mais</a>
                    </div>
                </div>
            </div>
        `;
        
        document.body.appendChild(banner);

        // Event listeners
        document.getElementById('cookie-accept-btn').addEventListener('click', () => {
            this.acceptCookies();
            this.removeBanner();
        });

        document.getElementById('cookie-reject-btn').addEventListener('click', () => {
            this.rejectCookies();
            this.removeBanner();
        });
    }

    acceptCookies() {
        const consentData = {
            accepted: true,
            date: new Date().toISOString(),
            analytics: true,
            marketing: true,
            preferences: true
        };
        this.setCookie(consentData);
        
        // Dispara evento customizado
        window.dispatchEvent(new CustomEvent('cookieConsent', { detail: consentData }));
    }

    rejectCookies() {
        const consentData = {
            accepted: false,
            date: new Date().toISOString(),
            analytics: false,
            marketing: false,
            preferences: false
        };
        this.setCookie(consentData);
        
        // Dispara evento customizado
        window.dispatchEvent(new CustomEvent('cookieConsent', { detail: consentData }));
    }

    removeBanner() {
        const banner = document.getElementById('cookie-consent-banner');
        if (banner) {
            banner.style.animation = 'slideOutDown 0.3s ease-out forwards';
            setTimeout(() => banner.remove(), 300);
        }
    }
}

// Inicializa quando o DOM está pronto
document.addEventListener('DOMContentLoaded', () => {
    new CookieConsent();
});
