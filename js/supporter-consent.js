/**
 * Gerenciador de Termo de Uso para Apoiadores
 * Modal com confirmação de autorização de uso de imagem, nome e artigos
 */

class SupporterConsent {
    constructor() {
        this.consentKey = 'justicaemdia_supporter_consent';
        this.init();
    }

    init() {
        // Verifica se há botões de apoiador na página
        this.attachEventListeners();
    }

    attachEventListeners() {
        // Adiciona listener a todos os cards de apoiadores
        document.addEventListener('click', (e) => {
            if (e.target.closest('.supporter-consent-btn')) {
                e.preventDefault();
                const supporterCard = e.target.closest('.supporter-card');
                const supporterName = supporterCard?.querySelector('.supporter-name')?.textContent || 'Apoiador';
                this.showConsentModal(supporterName, supporterCard);
            }
        });
    }

    hasConsent(supporterId) {
        const consents = this.getAllConsents();
        return consents.some(c => c.supporterId === supporterId && c.accepted);
    }

    getAllConsents() {
        const data = localStorage.getItem(this.consentKey);
        return data ? JSON.parse(data) : [];
    }

    saveConsent(supporterId, supporterName, accepted) {
        const consents = this.getAllConsents();
        
        // Remove consentimento anterior se existir
        const filtered = consents.filter(c => c.supporterId !== supporterId);
        
        // Adiciona novo consentimento
        filtered.push({
            supporterId: supporterId,
            supporterName: supporterName,
            accepted: accepted,
            date: new Date().toISOString(),
            ipAddress: 'anonymous'
        });
        
        localStorage.setItem(this.consentKey, JSON.stringify(filtered));
    }

    showConsentModal(supporterName, supporterCard) {
        // Remove modal anterior se existir
        const existingModal = document.getElementById('supporter-consent-modal');
        if (existingModal) existingModal.remove();

        const supporterId = supporterCard?.dataset.supporterId || 'supporter_' + Date.now();
        
        const modal = document.createElement('div');
        modal.id = 'supporter-consent-modal';
        modal.className = 'supporter-consent-modal';
        modal.innerHTML = `
            <div class="supporter-consent-overlay"></div>
            <div class="supporter-consent-content">
                <div class="consent-header">
                    <h2>Termo de Autorização</h2>
                    <button class="consent-close" aria-label="Fechar">&times;</button>
                </div>
                
                <div class="consent-body">
                    <div class="consent-intro">
                        <p>Para que <strong>${this.escapeHtml(supporterName)}</strong> possa ser listado como apoiador do Justiça em Dia, solicitamos sua autorização para:</p>
                    </div>

                    <div class="consent-items">
                        <div class="consent-item">
                            <div class="consent-checkbox-wrapper">
                                <input type="checkbox" id="consent-image" class="consent-checkbox" required>
                                <label for="consent-image">
                                    <strong>Uso de Imagem/Logo</strong>
                                    <p>Autorizo o uso de minha imagem ou logotipo da empresa no portal Justiça em Dia como apoiador.</p>
                                </label>
                            </div>
                        </div>

                        <div class="consent-item">
                            <div class="consent-checkbox-wrapper">
                                <input type="checkbox" id="consent-name" class="consent-checkbox" required>
                                <label for="consent-name">
                                    <strong>Uso de Nome/Razão Social</strong>
                                    <p>Autorizo o uso de meu nome completo ou razão social da empresa como apoiador do portal.</p>
                                </label>
                            </div>
                        </div>

                        <div class="consent-item">
                            <div class="consent-checkbox-wrapper">
                                <input type="checkbox" id="consent-articles" class="consent-checkbox" required>
                                <label for="consent-articles">
                                    <strong>Publicação de Artigos e Conteúdo</strong>
                                    <p>Autorizo a publicação de artigos, análises e conteúdo jurídico sob meu nome como respaldo jurídico e autoridade no assunto.</p>
                                </label>
                            </div>
                        </div>

                        <div class="consent-item">
                            <div class="consent-checkbox-wrapper">
                                <input type="checkbox" id="consent-terms" class="consent-checkbox" required>
                                <label for="consent-terms">
                                    <strong>Aceito os Termos</strong>
                                    <p>Confirmo que li e concordo com os termos acima e com a <strong>Política de Privacidade</strong> do Justiça em Dia.</p>
                                </label>
                            </div>
                        </div>
                    </div>

                    <div class="consent-legal-note">
                        <p><strong>Nota Legal:</strong> Este consentimento é registrado digitalmente e serve como comprovação jurídica de autorização. Ao aceitar, você confirma que possui autoridade legal para autorizar o uso dos dados acima mencionados.</p>
                    </div>
                </div>

                <div class="consent-footer">
                    <button id="consent-cancel-btn" class="consent-btn consent-cancel">Cancelar</button>
                    <button id="consent-accept-btn" class="consent-btn consent-accept" disabled>Confirmar Autorização</button>
                </div>
            </div>
        `;

        document.body.appendChild(modal);

        // Event listeners
        const closeBtn = modal.querySelector('.consent-close');
        const cancelBtn = modal.querySelector('#consent-cancel-btn');
        const acceptBtn = modal.querySelector('#consent-accept-btn');
        const checkboxes = modal.querySelectorAll('.consent-checkbox');
        const overlay = modal.querySelector('.supporter-consent-overlay');

        closeBtn.addEventListener('click', () => this.closeModal(modal));
        cancelBtn.addEventListener('click', () => this.closeModal(modal));
        overlay.addEventListener('click', () => this.closeModal(modal));

        // Habilita botão de aceitar quando todos os checkboxes estão marcados
        checkboxes.forEach(checkbox => {
            checkbox.addEventListener('change', () => {
                const allChecked = Array.from(checkboxes).every(cb => cb.checked);
                acceptBtn.disabled = !allChecked;
            });
        });

        acceptBtn.addEventListener('click', () => {
            this.saveConsent(supporterId, supporterName, true);
            this.closeModal(modal);
            
            // Mostra mensagem de sucesso
            this.showSuccessMessage();
        });

        // Anima entrada do modal
        modal.style.animation = 'fadeIn 0.3s ease-out';
    }

    closeModal(modal) {
        modal.style.animation = 'fadeOut 0.3s ease-out forwards';
        setTimeout(() => modal.remove(), 300);
    }

    showSuccessMessage() {
        const message = document.createElement('div');
        message.className = 'consent-success-message';
        message.innerHTML = `
            <div class="success-content">
                <i class="fas fa-check-circle"></i>
                <p>Autorização registrada com sucesso!</p>
            </div>
        `;
        
        document.body.appendChild(message);
        
        setTimeout(() => {
            message.style.animation = 'slideOutUp 0.3s ease-out forwards';
            setTimeout(() => message.remove(), 300);
        }, 3000);
    }

    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }
}

// Inicializa quando o DOM está pronto
document.addEventListener('DOMContentLoaded', () => {
    new SupporterConsent();
});
