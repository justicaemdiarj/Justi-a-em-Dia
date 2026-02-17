
// ========== CONFIGURAÇÃO DE NEWSLETTER ==========
// Altere a URL abaixo para sua planilha Google Sheets
const NEWSLETTER_CONFIG = {
    // URL do Google Apps Script para salvar dados na planilha
    googleScriptUrl: 'https://script.google.com/macros/s/AKfycbwLrq1GUmSq2ZlDtRD2Ma54VJrk8RdJG40vC2bODcjJNRSU6M3_nZFfNj_T1xFx2uuN/exec',
    
    // Habilitar/desabilitar funcionalidades
    enableLocalStorage: true, // Salvar backup local em localStorage
    enableGoogleSheets: true, // Enviar para Google Sheets
    enableEmailNotification: false, // Enviar email de confirmação (requer backend)
    
    // Mensagens personalizáveis
    messages: {
        success: 'Inscrição realizada com sucesso! Verifique sua caixa de entrada.',
        error: 'Erro ao processar. Tente novamente mais tarde.',
        sending: 'Enviando...',
        requireConsent: 'Você precisa aceitar os termos para continuar.',
        invalidEmail: 'Por favor, insira um e-mail válido.'
    }
};
// ================================================

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
        const emailInput = document.getElementById('newsletterEmail');

        if (form) {
            form.addEventListener('submit', async (e) => {
                e.preventDefault();
                
                const email = emailInput.value.trim();
                const consent = document.getElementById('newsletterConsent').checked;
                const date = new Date().toLocaleString('pt-BR');
                const timestamp = new Date().toISOString();

                // Validação de email
                if (!isValidEmail(email)) {
                    showMessage(messageDiv, NEWSLETTER_CONFIG.messages.invalidEmail, 'error');
                    return;
                }

                if (!consent) {
                    showMessage(messageDiv, NEWSLETTER_CONFIG.messages.requireConsent, 'error');
                    return;
                }

                // Feedback visual de carregamento
                submitBtn.disabled = true;
                submitBtn.textContent = NEWSLETTER_CONFIG.messages.sending;
                submitBtn.style.opacity = '0.7';

                const formData = {
                    email: email,
                    data: date,
                    timestamp: timestamp,
                    aceite: 'Sim',
                    data_aceite: date,
                    origem: window.location.pathname,
                    user_agent: navigator.userAgent
                };

                try {
                    let successCount = 0;
                    let errorCount = 0;

                    // 1. Salvar no LocalStorage (Backup Local)
                    if (NEWSLETTER_CONFIG.enableLocalStorage) {
                        try {
                            let subscribers = JSON.parse(localStorage.getItem('newsletter_subscribers') || '[]');
                            if (!subscribers.some(s => s.email === email)) {
                                subscribers.push(formData);
                                localStorage.setItem('newsletter_subscribers', JSON.stringify(subscribers));
                                successCount++;
                            }
                        } catch (err) {
                            console.warn('Erro ao salvar em localStorage:', err);
                        }
                    }

                    // 2. Enviar para Google Sheets
                    if (NEWSLETTER_CONFIG.enableGoogleSheets && NEWSLETTER_CONFIG.googleScriptUrl) {
                        try {
                            const params = new URLSearchParams();
                            for (const key in formData) {
                                params.append(key, formData[key]);
                            }

                            const finalUrl = `${NEWSLETTER_CONFIG.googleScriptUrl}?${params.toString()}`;
                            const response = await fetch(finalUrl, {
                                method: 'GET',
                                mode: 'no-cors',
                                cache: 'no-cache'
                            });
                            
                            successCount++;
                            console.log('Dados enviados para Google Sheets com sucesso');
                        } catch (err) {
                            console.error('Erro ao enviar para Google Sheets:', err);
                            errorCount++;
                        }
                    }

                    // 3. Enviar email de confirmação (se habilitado)
                    if (NEWSLETTER_CONFIG.enableEmailNotification) {
                        try {
                            // Aqui você pode adicionar lógica para enviar email
                            // Por enquanto, apenas registramos no console
                            console.log('Email de confirmação seria enviado para:', email);
                        } catch (err) {
                            console.warn('Erro ao enviar email:', err);
                        }
                    }

                    // Sucesso
                    if (successCount > 0) {
                        showMessage(messageDiv, NEWSLETTER_CONFIG.messages.success, 'success');
                        form.reset();
                        emailInput.focus();
                    } else {
                        showMessage(messageDiv, NEWSLETTER_CONFIG.messages.error, 'error');
                    }

                } catch (err) {
                    console.error('Erro geral:', err);
                    showMessage(messageDiv, NEWSLETTER_CONFIG.messages.error, 'error');
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

// Função auxiliar para validar email
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Função auxiliar para exibir mensagens
function showMessage(messageDiv, text, type) {
    messageDiv.textContent = text;
    
    if (type === 'success') {
        messageDiv.style.backgroundColor = '#d4edda';
        messageDiv.style.color = '#155724';
    } else if (type === 'error') {
        messageDiv.style.backgroundColor = '#f8d7da';
        messageDiv.style.color = '#c41e3a';
    }
    
    messageDiv.style.display = 'block';
}

// Função para obter subscribers do localStorage (para debug/export)
function getLocalSubscribers() {
    try {
        return JSON.parse(localStorage.getItem('newsletter_subscribers') || '[]');
    } catch (err) {
        console.error('Erro ao obter subscribers:', err);
        return [];
    }
}

// Função para limpar subscribers do localStorage
function clearLocalSubscribers() {
    try {
        localStorage.removeItem('newsletter_subscribers');
        console.log('Subscribers locais removidos');
    } catch (err) {
        console.error('Erro ao limpar subscribers:', err);
    }
}

// Função para exportar subscribers em CSV
function exportSubscribersAsCSV() {
    const subscribers = getLocalSubscribers();
    if (subscribers.length === 0) {
        console.warn('Nenhum subscriber para exportar');
        return;
    }

    const headers = Object.keys(subscribers[0]);
    const csvContent = [
        headers.join(','),
        ...subscribers.map(sub => 
            headers.map(header => {
                const value = sub[header];
                // Escapar aspas e envolver em aspas se contiver vírgula
                return typeof value === 'string' && value.includes(',') 
                    ? `"${value.replace(/"/g, '""')}"` 
                    : value;
            }).join(',')
        )
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', `newsletter-subscribers-${new Date().toISOString().split('T')[0]}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

document.addEventListener('DOMContentLoaded', injectNewsletter);
