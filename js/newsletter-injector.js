/**
 * NEWSLETTER INTEGRATION - FORMSPREE VERSION
 * Esta versão substitui a necessidade de Google Apps Script por uma API gratuita.
 * Mantém o layout e CSS originais.
 */

function injectNewsletter() {
    const mobileContainer = document.getElementById('banner-mobile-container');
    if (mobileContainer) {
        const newsletterHtml = `
            <div class="newsletter-sidebar-card" style="margin-top: 20px; background: #fff; padding: 20px; border-radius: 8px; border: 1px solid #eee; box-shadow: 0 2px 10px rgba(0,0,0,0.05);">
                <h3 style="font-size: 1.2rem; color: #c41e3a; margin-bottom: 10px; font-weight: 700;">Newsletter</h3>
                <p style="font-size: 0.9rem; color: #666; margin-bottom: 15px;">Receba as principais notícias jurídicas em seu e-mail.</p>
                <form id="newsletterFormSidebar" style="display: flex; flex-direction: column; gap: 12px;">
                    <input type="email" name="email" id="newsletterEmail" placeholder="Seu e-mail" required style="padding: 10px 15px; border: 1px solid #ddd; border-radius: 4px; font-family: inherit; font-size: 0.9rem;">
                    
                    <div style="display: flex; align-items: flex-start; gap: 8px;">
                        <input type="checkbox" name="consentimento" id="newsletterConsent" required style="margin-top: 4px; cursor: pointer;">
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
        
        // NOVO: Inserir banners pós-newsletter aqui
        if (typeof siteConfig !== 'undefined' && siteConfig.postNewsletterBanners) {
            const now = new Date();
            siteConfig.postNewsletterBanners.forEach(banner => {
                let isActive = true;
                if (banner.endDate) {
                    const end = new Date(banner.endDate);
                    end.setHours(23, 59, 59, 999);
                    if (now > end) isActive = false;
                }

                if (isActive && banner.pages && banner.pages !== "full") {
                    const currentPath = window.location.pathname;
                    isActive = banner.pages.some(page => {
                        return currentPath.endsWith(page) || currentPath.includes('/' + page);
                    });
                }

                if (isActive) {
                    const bannerDiv = document.createElement('div');
                    bannerDiv.className = 'banner-post-newsletter-custom'; // Nova classe para estilização
                    let imgPath = banner.img;
                    const isSubPageFlag = isSubPage(); // Reutiliza a função isSubPage do dynamic-content.js
                    if (isSubPageFlag && imgPath.startsWith('img/')) imgPath = '../' + imgPath;
let bannerContentHtml = `
                        <p class="banner-label" style="display: block !important; font-size: 0.7rem; color: #999; text-transform: uppercase; margin-top: 20px; margin-bottom: 5px;"></p>
                    `;

                    if (banner.link && banner.link !== "#" && banner.link.trim() !== "") {
                        bannerContentHtml += `
                            <a href="${banner.link}" target="_blank" rel="noopener noreferrer">
                                <img src="${imgPath}" alt="${banner.name}" style="max-width: 100%; height: auto; border-radius: 8px; margin-bottom: 15px;">
                            </a>
                        `;
                    } else {
                        bannerContentHtml += `
                            <img src="${imgPath}" alt="${banner.name}" style="max-width: 100%; height: auto; border-radius: 8px; margin-bottom: 15px;">
                        `;
                    }
                    bannerDiv.innerHTML = bannerContentHtml;
                    // Insere após o card da newsletter
                    mobileContainer.insertAdjacentElement('afterend', bannerDiv);
                }
            });
        }

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
                    messageDiv.style.backgroundColor = '#ffebee';
                    messageDiv.style.color = '#c41e3a';
                    messageDiv.style.display = 'block';
                    return;
                }

                // Feedback visual
                submitBtn.disabled = true;
                submitBtn.textContent = 'Enviando...';
                submitBtn.style.opacity = '0.7';

                // ⚠️ SUBSTITUA PELO SEU ID DO FORMSPREE (Crie em formspree.io)
                // Se deixar este, os dados irão para o sistema padrão de teste
                const FORMSPREE_ID = 'xzdayepv'; 
                const API_URL = `https://formspree.io/f/${FORMSPREE_ID}`;

                const formData = new FormData();
                formData.append('email', email);
                formData.append('data_cadastro', date);
                formData.append('origem', window.location.pathname);
                formData.append('aceite_termos', 'Sim');

                try {
                    const response = await fetch(API_URL, {
                        method: 'POST',
                        body: formData,
                        headers: {
                            'Accept': 'application/json'
                        }
                    });

                    if (response.ok) {
                        messageDiv.textContent = 'Inscrição realizada com sucesso! Obrigado.';
                        messageDiv.style.backgroundColor = '#d4edda';
                        messageDiv.style.color = '#155724';
                        messageDiv.style.display = 'block';
                        form.reset();
                    } else {
                        throw new Error('Erro na resposta da API');
                    }

                } catch (err) {
                    console.error('Erro:', err);
                    messageDiv.textContent = 'Erro ao processar. Tente novamente mais tarde.';
                    messageDiv.style.backgroundColor = '#ffebee';
                    messageDiv.style.color = '#c41e3a';
                    messageDiv.style.display = 'block';
                } finally {
                    submitBtn.disabled = false;
                    submitBtn.textContent = 'Inscrever';
                    submitBtn.style.opacity = '1';
                    
                    setTimeout(() => {
                        messageDiv.style.display = 'none';
                    }, 5000);
                }
            });
        }
    }
}


document.addEventListener('DOMContentLoaded', injectNewsletter);