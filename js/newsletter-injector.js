
function injectNewsletter() {
    const mobileContainer = document.getElementById('banner-mobile-container');
    if (mobileContainer) {
        const newsletterHtml = `
            <div class="newsletter-sidebar-card" style="margin-top: 20px; background: #fff; padding: 20px; border-radius: 8px; border: 1px solid #eee; box-shadow: 0 2px 10px rgba(0,0,0,0.05);">
                <h3 style="font-size: 1.2rem; color: #c41e3a; margin-bottom: 10px; font-weight: 700;">Newsletter</h3>
                <p style="font-size: 0.9rem; color: #666; margin-bottom: 15px;">Receba as principais notícias jurídicas em seu e-mail.</p>
                <form id="newsletterFormSidebar" style="display: flex; flex-direction: column; gap: 12px;">
                    <input type="email" id="newsletterEmail" placeholder="Seu e-mail" required style="padding: 10px 15px; border: 1px solid #ddd; border-radius: 4px; font-family: inherit; font-size: 0.9rem;">
                    
                    <div style="display: flex; align-items: flex-start; gap: 8px;">
                        <input type="checkbox" id="newsletterConsent" required style="margin-top: 4px; cursor: pointer;">
                        <label for="newsletterConsent" style="font-size: 0.75rem; color: #777; line-height: 1.3; cursor: pointer;">
                            Aceito receber notificações e e-mails informativos do Justiça em Dia.
                        </label>
                    </div>

                    <button type="submit" id="newsletterSubmitBtn" style="background: #c41e3a; color: #fff; border: none; padding: 10px; border-radius: 4px; font-weight: 700; cursor: pointer; transition: background 0.3s;">Inscrever</button>
                </form>
                <div id="newsletterMessage" style="margin-top: 10px; font-size: 0.85rem; display: none; padding: 8px; border-radius: 4px;"></div>
            </div>
        `;
        mobileContainer.insertAdjacentHTML('afterend', newsletterHtml);
        
        const form = document.getElementById('newsletterFormSidebar');
        const messageDiv = document.getElementById('newsletterMessage');
        const submitBtn = document.getElementById('newsletterSubmitBtn');

        if (form) {
            form.addEventListener('submit', async (e) => {
                e.preventDefault();
                
                const email = document.getElementById('newsletterEmail').value;
                const consent = document.getElementById('newsletterConsent').checked;
                const date = new Date().toLocaleString('pt-BR');

                if (!consent) {
                    messageDiv.textContent = 'Você precisa aceitar os termos para continuar.';
                    messageDiv.style.color = '#c41e3a';
                    messageDiv.style.display = 'block';
                    return;
                }

                // Feedback visual de carregamento
                submitBtn.disabled = true;
                submitBtn.textContent = 'Enviando...';
                submitBtn.style.opacity = '0.7';

                // URL do seu Google Apps Script (Você deve substituir após configurar)
                // Se estiver vazio, ele apenas salvará localmente como backup
                const GOOGLE_SCRIPT_URL = ''; 

                const formData = {
                    email: email,
                    data: date,
                    aceite: 'Sim',
                    origem: window.location.pathname
                };

                try {
                    // 1. Salvar no LocalStorage (Backup Local)
                    let subscribers = JSON.parse(localStorage.getItem('newsletter_subscribers') || '[]');
                    if (!subscribers.some(s => s.email === email)) {
                        subscribers.push(formData);
                        localStorage.setItem('newsletter_subscribers', JSON.stringify(subscribers));
                    }

                    // 2. Enviar para Google Sheets (Se a URL estiver configurada)
                    if (GOOGLE_SCRIPT_URL) {
                        await fetch(GOOGLE_SCRIPT_URL, {
                            method: 'POST',
                            mode: 'no-cors', // Necessário para Google Apps Script
                            cache: 'no-cache',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify(formData)
                        });
                    }

                    // Sucesso
                    messageDiv.textContent = 'Inscrição realizada com sucesso! Verifique sua caixa de entrada.';
                    messageDiv.style.backgroundColor = '#d4edda';
                    messageDiv.style.color = '#155724';
                    messageDiv.style.display = 'block';
                    form.reset();

                } catch (err) {
                    console.error('Erro:', err);
                    messageDiv.textContent = 'Erro ao processar. Tente novamente mais tarde.';
                    messageDiv.style.color = '#c41e3a';
                    messageDiv.style.display = 'block';
                } finally {
                    submitBtn.disabled = false;
                    submitBtn.textContent = 'Inscrever';
                    submitBtn.style.opacity = '1';
                    
                    setTimeout(() => {
                        messageDiv.style.display = 'none';
                    }, 6000);
                }
            });
        }
    }
}

document.addEventListener('DOMContentLoaded', injectNewsletter);
