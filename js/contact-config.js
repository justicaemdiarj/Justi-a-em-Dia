// Configurações específicas da página de contato
const contactConfig = {
    whatsapp: "+5521990670186", 
    phone: "+5521990670186",
    email: "contato@justicaemdia.com.br",
    address: "Rio de Janeiro, RJ",
    addressDetails: "Atendimento online",
    
    // Horário de atendimento
    businessHours: "Segunda a Sexta, 9h às 17h",
    
    // Mensagens pré-definidas do WhatsApp
    whatsappMessages: {
        member: "Olá! Gostaria de informações sobre como ser membro do site Justiça em Dia. Poderia ajudar?",
        help: "Olá! Preciso de ajuda com uma dúvida do site Justiça em Dia..",
        info: "Olá! Gostaria de mais informações do site Justiça em Dia..",
        other: "Olá! Gostaria de conversar sobre outro assunto do site Justiça em Dia.."
    }
};

// Função auxiliar para verificar se um valor está vazio
function isEmptyContact(value) {
    return !value || value.trim() === '' || value === '#';
}

// Função para formatar número de telefone para link tel:
function formatPhoneLink(phone) {
    return phone.replace(/\D/g, '');
}

// Função para formatar número do WhatsApp para link
function formatWhatsAppLink(whatsapp, message = '') {
    const number = whatsapp.replace(/\D/g, '');
    if (message) {
        return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
    }
    return `https://wa.me/${number}`;
}

// Função principal para atualizar elementos da página de contato
function updateContactPage() {
    // Atualizar seção de informações de contato
    updateContactInfoSection();
    
    // Atualizar botões do WhatsApp
    updateWhatsAppButtons();
    
    // Atualizar horário de atendimento
    updateBusinessHours();
}

// Atualizar seção de informações de contato
function updateContactInfoSection() {
    const contactInfoGrid = document.querySelector('.contact-info-grid');
    if (!contactInfoGrid) return;
    
    // Telefone
    const phoneItem = contactInfoGrid.querySelector('.info-item:has(.fa-phone)');
    if (phoneItem) {
        if (!isEmptyContact(contactConfig.phone)) {
            const phoneLink = phoneItem.querySelector('a');
            if (phoneLink) {
                phoneLink.href = `tel:${formatPhoneLink(contactConfig.phone)}`;
                phoneLink.textContent = contactConfig.phone;
            }
            phoneItem.style.display = 'flex';
        } else {
            phoneItem.style.display = 'none';
        }
    }
    
    // E-mail
    const emailItem = contactInfoGrid.querySelector('.info-item:has(.fa-envelope)');
    if (emailItem) {
        if (!isEmptyContact(contactConfig.email)) {
            const emailLink = emailItem.querySelector('a');
            if (emailLink) {
                emailLink.href = `mailto:${contactConfig.email}`;
                emailLink.textContent = contactConfig.email;
            }
            emailItem.style.display = 'flex';
        } else {
            emailItem.style.display = 'none';
        }
    }
    
    // Endereço
    const addressItem = contactInfoGrid.querySelector('.info-item:has(.fa-map-marker-alt)');
    if (addressItem) {
        if (!isEmptyContact(contactConfig.address)) {
            const addressContent = addressItem.querySelector('.info-content p');
            if (addressContent) {
                addressContent.textContent = contactConfig.address;
            }
            const addressDetails = addressItem.querySelector('.info-content p:last-child');
            if (addressDetails && !isEmptyContact(contactConfig.addressDetails)) {
                addressDetails.textContent = contactConfig.addressDetails;
            } else if (addressDetails) {
                addressDetails.style.display = 'none';
            }
            addressItem.style.display = 'flex';
        } else {
            addressItem.style.display = 'none';
        }
    }
    
    // WhatsApp
    const whatsappItem = contactInfoGrid.querySelector('.info-item:has(.fa-whatsapp)');
    if (whatsappItem) {
        if (!isEmptyContact(contactConfig.whatsapp)) {
            const whatsappLink = whatsappItem.querySelector('a');
            if (whatsappLink) {
                whatsappLink.href = formatWhatsAppLink(contactConfig.whatsapp);
                // Formatar número para exibição (ex: +55 21 98268-4928 -> (21) 98268-4928)
                const displayNumber = contactConfig.whatsapp.replace(/^\+55/, '').replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
                whatsappLink.textContent = displayNumber;
            }
            whatsappItem.style.display = 'flex';
        } else {
            whatsappItem.style.display = 'none';
        }
    }
}

// Atualizar botões do WhatsApp
function updateWhatsAppButtons() {
    // Se o WhatsApp estiver vazio, ocultar toda a seção
    if (isEmptyContact(contactConfig.whatsapp)) {
        const whatsappSection = document.querySelector('.whatsapp-section');
        if (whatsappSection) {
            whatsappSection.style.display = 'none';
        }
        return;
    }
    
    // Atualizar botões de opções de contato
    const contactCards = document.querySelectorAll('.contact-option-card');
    contactCards.forEach((card, index) => {
        const whatsappBtn = card.querySelector('.whatsapp-btn');
        if (whatsappBtn) {
            let message = '';
            switch(index) {
                case 0: message = contactConfig.whatsappMessages.member; break;
                case 1: message = contactConfig.whatsappMessages.help; break;
                case 2: message = contactConfig.whatsappMessages.info; break;
                case 3: message = contactConfig.whatsappMessages.other; break;
            }
            whatsappBtn.href = formatWhatsAppLink(contactConfig.whatsapp, message);
        }
    });
    
    // Atualizar botão de conversa geral
    const generalBtn = document.querySelector('.general-contact-btn');
    if (generalBtn) {
        generalBtn.href = formatWhatsAppLink(contactConfig.whatsapp);
    }
}

// Atualizar horário de atendimento
function updateBusinessHours() {
    if (!isEmptyContact(contactConfig.businessHours)) {
        const attendanceHours = document.querySelector('.attendance-hours p');
        if (attendanceHours) {
            attendanceHours.innerHTML = `<strong>Atendimento:</strong> ${contactConfig.businessHours}`;
        }
        
        // Atualizar horário na seção de informações
        const phoneDetails = document.querySelector('.info-item:has(.fa-phone) .info-content p:last-child');
        if (phoneDetails) {
            phoneDetails.textContent = contactConfig.businessHours;
        }
    } else {
        const attendanceHours = document.querySelector('.attendance-hours');
        if (attendanceHours) {
            attendanceHours.style.display = 'none';
        }
    }
}

// Executar quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', updateContactPage);
