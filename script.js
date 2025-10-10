// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    initializeTabs();
    initializeScrollEffects();
    initializeContactForm();
    initializeMobileMenu();
    initializeScrollIndicator();
});

// Navigation functionality
function initializeNavigation() {
    const navbar = document.getElementById('navbar');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        // Update active navigation link
        updateActiveNavLink();
    });
    
    // Smooth scroll for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // 외부 링크인 경우 기본 동작 허용
            if (href.includes('.html') || href.startsWith('http')) {
                return; // 기본 링크 동작 허용
            }
            
            e.preventDefault();
            const targetId = href.substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
            
            // Close mobile menu if open
            closeMobileMenu();
        });
    });
}

// Update active navigation link based on scroll position
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    const scrollPos = window.scrollY + 100;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

// Tab functionality for business section
function initializeTabs() {
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetTab = this.getAttribute('data-tab');
            
            // Remove active class from all buttons and contents
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            // Add active class to clicked button and corresponding content
            this.classList.add('active');
            document.getElementById(targetTab).classList.add('active');
        });
    });
}

// Scroll effects and animations
function initializeScrollEffects() {
    const observerOptions = {
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    
    // Observe elements for fade-in animation
    const fadeElements = document.querySelectorAll('.story-item, .menu-item, .business-card, .taste-item, .indicator-item, .info-item');
    fadeElements.forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });
}

// Contact form functionality
function initializeContactForm() {
    const contactForm = document.getElementById('contactForm');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        const data = Object.fromEntries(formData);
        
        // Validate form
        if (validateForm(data)) {
            // Simulate form submission
            submitForm(data);
        }
    });
}

// Form validation
function validateForm(data) {
    const required = ['company', 'name', 'phone', 'email', 'partnership'];
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9-+\s()]+$/;
    
    for (let field of required) {
        if (!data[field] || data[field].trim() === '') {
            showMessage(`${getFieldName(field)}을(를) 입력해주세요.`, 'error');
            return false;
        }
    }
    
    if (!emailRegex.test(data.email)) {
        showMessage('올바른 이메일 형식을 입력해주세요.', 'error');
        return false;
    }
    
    if (!phoneRegex.test(data.phone)) {
        showMessage('올바른 연락처 형식을 입력해주세요.', 'error');
        return false;
    }
    
    return true;
}

// Get Korean field names
function getFieldName(field) {
    const fieldNames = {
        company: '회사/브랜드명',
        name: '담당자 이름',
        phone: '연락처',
        email: '이메일',
        partnership: '파트너십 유형'
    };
    return fieldNames[field] || field;
}

// Form submission simulation
function submitForm(data) {
    const submitButton = document.querySelector('.submit-button');
    const originalText = submitButton.textContent;
    
    // Show loading state
    submitButton.textContent = '전송 중...';
    submitButton.disabled = true;
    
    // Simulate API call
    setTimeout(() => {
        showMessage('문의가 성공적으로 전송되었습니다. 빠른 시일 내에 연락드리겠습니다.', 'success');
        document.getElementById('contactForm').reset();
        
        // Reset button
        submitButton.textContent = originalText;
        submitButton.disabled = false;
    }, 1500);
}

// Show message to user
function showMessage(message, type) {
    // Remove existing messages
    const existingMessage = document.querySelector('.form-message');
    if (existingMessage) {
        existingMessage.remove();
    }
    
    // Create message element
    const messageEl = document.createElement('div');
    messageEl.className = `form-message ${type}`;
    messageEl.textContent = message;
    messageEl.style.cssText = `
        padding: 15px 20px;
        margin: 20px 0;
        border-radius: 8px;
        font-weight: 500;
        text-align: center;
        animation: slideIn 0.3s ease;
        ${type === 'success' ? 
            'background: #d4edda; color: #155724; border: 1px solid #c3e6cb;' : 
            'background: #f8d7da; color: #721c24; border: 1px solid #f5c6cb;'
        }
    `;
    
    // Insert message
    const form = document.getElementById('contactForm');
    form.insertBefore(messageEl, form.firstChild);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (messageEl && messageEl.parentNode) {
            messageEl.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => messageEl.remove(), 300);
        }
    }, 5000);
}

// Mobile menu functionality
function initializeMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
            closeMobileMenu();
        }
    });
}

function closeMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}

// Scroll indicator functionality
function initializeScrollIndicator() {
    const scrollIndicator = document.querySelector('.scroll-indicator');
    
    if (scrollIndicator) {
        scrollIndicator.addEventListener('click', function() {
            const brandStorySection = document.getElementById('brand-story');
            if (brandStorySection) {
                const offsetTop = brandStorySection.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
        
        // Hide scroll indicator after scrolling
        let scrollTimeout;
        window.addEventListener('scroll', function() {
            clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(() => {
                if (window.scrollY > 100) {
                    scrollIndicator.style.opacity = '0';
                } else {
                    scrollIndicator.style.opacity = '1';
                }
            }, 100);
        });
    }
}

// Utility function for smooth scrolling to sections
function scrollToSection(sectionId) {
    if (sectionId === 'hero') {
        // 히어로 섹션의 경우 페이지 최상단으로 이동
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    } else {
        const section = document.getElementById(sectionId);
        if (section) {
            const offsetTop = section.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    }
}

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateY(-20px);
            opacity: 0;
        }
        to {
            transform: translateY(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateY(0);
            opacity: 1;
        }
        to {
            transform: translateY(-20px);
            opacity: 0;
        }
    }
    
    .scroll-indicator {
        cursor: pointer;
        transition: opacity 0.3s ease;
    }
    
    .scroll-indicator:hover .scroll-arrow {
        animation: bounce 1s infinite;
    }
`;
document.head.appendChild(style);

// Performance optimization: Lazy loading for images
function initializeLazyLoading() {
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        const lazyImages = document.querySelectorAll('img[data-src]');
        lazyImages.forEach(img => imageObserver.observe(img));
    }
}

// Initialize lazy loading when DOM is ready
document.addEventListener('DOMContentLoaded', initializeLazyLoading);

// Smooth scroll polyfill for older browsers
(function() {
    if (!('scrollBehavior' in document.documentElement.style)) {
        // Import smoothscroll polyfill if needed
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/gh/iamdustan/smoothscroll@master/src/smoothscroll.js';
        document.head.appendChild(script);
    }
})();

// Error handling for video and performance optimization
document.addEventListener('DOMContentLoaded', function() {
    const heroVideo = document.querySelector('.hero-video-container video');
    if (heroVideo) {
        heroVideo.addEventListener('error', function() {
            console.log('비디오 로드 오류 - 대체 이미지로 교체');
            const videoContainer = this.parentElement;
            videoContainer.innerHTML = `
                <img src="sanbang_assets/제주산방_001.jpg" 
                     alt="산방식당 메인 이미지" 
                     style="width: 100%; height: 100%; object-fit: cover;">
            `;
        });
        
        // 비디오 최적화
        heroVideo.addEventListener('loadeddata', function() {
            console.log('비디오 로드 완료');
        });
    }
});

// 페이지 로딩 성능 최적화
window.addEventListener('load', function() {
    // 모든 리소스 로딩 완료 후 실행
    document.body.classList.add('loaded');
    
    // 지연 로딩된 이미지 처리
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        if (!img.complete) {
            img.addEventListener('load', function() {
                this.style.opacity = '1';
            });
        }
    });
});

// SEO 및 접근성 개선
function improveSEO() {
    // 메타 태그 동적 업데이트
    const currentSection = getCurrentSection();
    if (currentSection) {
        updateMetaTags(currentSection);
    }
}

function getCurrentSection() {
    const sections = document.querySelectorAll('section[id]');
    const scrollPos = window.scrollY + 100;
    
    for (let section of sections) {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        
        if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
            return section.id;
        }
    }
    return 'hero';
}

function updateMetaTags(sectionId) {
    const titles = {
        'hero': '산방식당 - 50년 제주의 전설, 당신의 비즈니스가 됩니다',
        'brand-story': '산방식당 브랜드 스토리 - 1971년부터 시작된 제주의 맛',
        'menu': '산방식당 메뉴 - 55년 전통의 정통 제주밀면',
        'business': '산방식당 B2B 파트너십 - 성공적인 비즈니스 협력',
        'competitiveness': '산방식당의 경쟁력 - 검증된 품질과 신뢰',
        'contact': '산방식당 파트너십 문의 - 지금 바로 시작하세요'
    };
    
    document.title = titles[sectionId] || titles['hero'];
}

// 스크롤 이벤트에 SEO 함수 추가
window.addEventListener('scroll', function() {
    improveSEO();
});