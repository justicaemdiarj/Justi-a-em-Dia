// Menu Toggle
const menuToggle = document.getElementById('menuToggle');
const mainNav = document.querySelector('.desktop-menu-container');

if (menuToggle && mainNav) {
    menuToggle.addEventListener('click', () => {
        mainNav.classList.toggle('active');
        menuToggle.classList.toggle('active');
    });
    
    // Fechar menu ao clicar fora
    document.addEventListener('click', (e) => {
        if (!menuToggle.contains(e.target) && !mainNav.contains(e.target)) {
            mainNav.classList.remove('active');
            menuToggle.classList.remove('active');
        }
    });

    // Lógica para dropdown no mobile
    mainNav.addEventListener('click', (e) => {
        const dropdownToggle = e.target.closest('.dropdown-toggle');
        if (dropdownToggle && window.innerWidth <= 768) {
            e.preventDefault();
            const parent = dropdownToggle.parentElement;
            parent.classList.toggle('active');
            
            // Opcional: Fechar outros dropdowns abertos
            document.querySelectorAll('.nav-item-dropdown').forEach(item => {
                if (item !== parent) item.classList.remove('active');
            });
        } else if (e.target.tagName === 'A' && !e.target.classList.contains('dropdown-toggle')) {
            // Fechar menu ao clicar em um link normal (que não seja toggle de dropdown)
            mainNav.classList.remove('active');
            menuToggle.classList.remove('active');
        }
    });
}

// Smooth Scroll for Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        if (this.getAttribute('href') === '#') return;
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Market Ticker Animation Enhancement
const marketTicker = document.getElementById('marketTicker');
if (marketTicker) {
    const tickerContent = marketTicker.innerHTML;
    marketTicker.innerHTML += tickerContent;
}

// Add hover effect to news cards
const newsCards = document.querySelectorAll('.news-card, .video-card, .article-card, .category-post');
newsCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px)';
        this.style.transition = 'transform 0.3s ease';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// Lazy Loading for Images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.style.opacity = '0';
                img.style.transition = 'opacity 0.5s ease';
                
                setTimeout(() => {
                    img.style.opacity = '1';
                }, 100);
                
                observer.unobserve(img);
            }
        });
    });

    const images = document.querySelectorAll('img');
    images.forEach(img => imageObserver.observe(img));
}

// Sticky header effect
const header = document.querySelector('.header');
if (header) {
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            header.style.boxShadow = '0 4px 20px rgba(0,0,0,0.15)';
        } else {
            header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
        }
    });
}

// Add loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Botão Voltar ao Topo
function initBackToTop() {
    const btn = document.createElement('button');
    btn.innerHTML = '<i class="fas fa-chevron-up"></i>';
    btn.className = 'back-to-top';
    btn.setAttribute('title', 'Voltar ao topo');
    document.body.appendChild(btn);

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            btn.classList.add('visible');
        } else {
            btn.classList.remove('visible');
        }
    });

    btn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

document.addEventListener('DOMContentLoaded', () => {
    initBackToTop();
});

// Console message
console.log('Portal Justica em Dia - Sistema de Noticias v2.3');
console.log('Menu Dropdown e Gerenciamento de Categorias Ativados');
