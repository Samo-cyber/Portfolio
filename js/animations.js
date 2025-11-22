document.addEventListener('DOMContentLoaded', () => {
    gsap.registerPlugin(ScrollTrigger);

    initHeroAnimations();
    initScrollAnimations();
});

function initHeroAnimations() {
    const tl = gsap.timeline();

    // Reveal Text
    tl.from('.reveal-text', {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power4.out',
        delay: 0.5
    })
        .from('.reveal-text-delay', {
            y: 20,
            opacity: 0,
            duration: 1,
            stagger: 0.1,
            ease: 'power3.out'
        }, '-=0.5')
        .from('.navbar', {
            y: -100,
            opacity: 0,
            duration: 1,
            ease: 'power3.out'
        }, '-=1');
}

function initScrollAnimations() {
    // About Section
    gsap.from('.about-text > *', {
        scrollTrigger: {
            trigger: '.about-section',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        },
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: 'power3.out'
    });

    // Skill Cards Animation
    gsap.from('.skill-card', {
        scrollTrigger: {
            trigger: '.skills-wrapper',
            start: 'top 85%',
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out'
    });

    // Stats Counter Animation
    const statNumbers = document.querySelectorAll('.stat-number');
    statNumbers.forEach(stat => {
        const target = parseInt(stat.getAttribute('data-target'));

        gsap.from(stat, {
            scrollTrigger: {
                trigger: stat,
                start: 'top 85%',
                onEnter: () => animateCounter(stat, target)
            }
        });
    });

    // Visual Card Animation
    gsap.from('.visual-card', {
        scrollTrigger: {
            trigger: '.about-section',
            start: 'top 70%',
            scrub: 1
        },
        y: 100,
        rotation: 5,
        ease: 'none'
    });

    // Work Section
    const projects = document.querySelectorAll('.project-card');
    projects.forEach((project, i) => {
        gsap.from(project, {
            scrollTrigger: {
                trigger: project,
                start: 'top 85%',
            },
            y: 100,
            opacity: 0,
            duration: 1,
            ease: 'power3.out'
        });
    });

    // Contact Section
    gsap.from('.contact-content > *', {
        scrollTrigger: {
            trigger: '.contact-section',
            start: 'top 75%',
        },
        x: -50,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: 'power3.out'
    });

    gsap.from('.contact-form', {
        scrollTrigger: {
            trigger: '.contact-section',
            start: 'top 75%',
        },
        x: 50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
    });
}

// Counter Animation Function
function animateCounter(element, target) {
    let current = 0;
    const increment = target / 60; // 60 frames for smooth animation
    const duration = 2000; // 2 seconds
    const stepTime = duration / 60;

    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, stepTime);
}
