document.addEventListener('DOMContentLoaded', function() {
    // Navigation mobile
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');
    
    burger.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        burger.classList.toggle('active');
    });
    
    // Fermer le menu mobile quand on clique sur un lien
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            burger.classList.remove('active');
        });
    });
    
    // Animation de la navbar au scroll
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // Animation des compétences
    const skillBars = document.querySelectorAll('.skill-progress');
    
    function animateSkills() {
        skillBars.forEach(bar => {
            const width = bar.getAttribute('data-width');
            bar.style.width = width;
        });
    }
    
    // Observer pour déclencher les animations quand l'élément est visible
    const observerOptions = {
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (entry.target.classList.contains('skills')) {
                    animateSkills();
                }
                
                // Animation des éléments avec la classe animate-text
                if (entry.target.querySelector('.animate-text')) {
                    const animateElements = entry.target.querySelectorAll('.animate-text');
                    animateElements.forEach((el, index) => {
                        setTimeout(() => {
                            el.style.animation = `fadeInUp 0.8s ease forwards ${index * 0.2}s`;
                        }, index * 200);
                    });
                }
            }
        });
    }, observerOptions);
    
    // Observer les sections
    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });
    
    // Animation des cercles de statistiques
    const statCircles = document.querySelectorAll('.stat-circle');
    
    statCircles.forEach(circle => {
        const value = circle.getAttribute('data-value');
        const circleFill = circle.querySelector('.circle-fill');
        circleFill.style.strokeDasharray = `${value}, 100`;
    });
    
    // Smooth scroll pour les ancres
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Effet de parallaxe pour l'image de profil
    window.addEventListener('scroll', function() {
        const imageContainer = document.querySelector('.image-container');
        if (imageContainer) {
            const scrollPosition = window.scrollY;
            imageContainer.style.transform = `translateY(${scrollPosition * 0.1}px)`;
        }
    });
    
    // Confirmation d'envoi du formulaire de contact
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Ici, vous pourriez ajouter le code pour envoyer le formulaire
            // Par exemple avec fetch() ou XMLHttpRequest
            
            // Simulation d'envoi
            setTimeout(() => {
                alert('Message envoyé avec succès ! Je vous répondrai dès que possible.');
                contactForm.reset();
            }, 1000);
        });
    }
});