document.addEventListener('DOMContentLoaded', () => {
    initCursor();
    initCanvas();
    // Animations are handled in animations.js
});

/* =========================================
   Custom Cursor
   ========================================= */
function initCursor() {
    const cursor = document.querySelector('.cursor');
    const follower = document.querySelector('.cursor-follower');
    const links = document.querySelectorAll('a, button, .project-card');

    let posX = 0, posY = 0;
    let mouseX = 0, mouseY = 0;

    // Initial position
    gsap.set(cursor, { xPercent: -50, yPercent: -50 });
    gsap.set(follower, { xPercent: -50, yPercent: -50 });

    window.addEventListener('mousemove', e => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        
        // Instant movement for dot
        gsap.to(cursor, {
            x: mouseX,
            y: mouseY,
            duration: 0.1
        });
    });

    // Smooth follower loop
    gsap.ticker.add(() => {
        posX += (mouseX - posX) / 9;
        posY += (mouseY - posY) / 9;
        
        gsap.set(follower, {
            x: posX,
            y: posY
        });
    });

    // Hover effects
    links.forEach(link => {
        link.addEventListener('mouseenter', () => {
            document.body.classList.add('hovering');
            
            // If it's a project card, maybe show text?
            const text = link.getAttribute('data-cursor-text');
            if (text) {
                // Logic to show text inside cursor could go here
                // For now, just scale is handled by CSS
            }
        });

        link.addEventListener('mouseleave', () => {
            document.body.classList.remove('hovering');
        });
    });
}

/* =========================================
   Background Canvas (Simple Particles)
   ========================================= */
function initCanvas() {
    const canvas = document.getElementById('bg-canvas');
    const ctx = canvas.getContext('2d');
    
    let width, height;
    let particles = [];

    function resize() {
        width = window.innerWidth;
        height = window.innerHeight;
        canvas.width = width;
        canvas.height = height;
    }

    window.addEventListener('resize', resize);
    resize();

    class Particle {
        constructor() {
            this.x = Math.random() * width;
            this.y = Math.random() * height;
            this.vx = (Math.random() - 0.5) * 0.5;
            this.vy = (Math.random() - 0.5) * 0.5;
            this.size = Math.random() * 2;
            this.color = `rgba(255, 255, 255, ${Math.random() * 0.1})`;
        }

        update() {
            this.x += this.vx;
            this.y += this.vy;

            if (this.x < 0) this.x = width;
            if (this.x > width) this.x = 0;
            if (this.y < 0) this.y = height;
            if (this.y > height) this.y = 0;
        }

        draw() {
            ctx.fillStyle = this.color;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    // Create particles
    for (let i = 0; i < 50; i++) {
        particles.push(new Particle());
    }

    function animate() {
        ctx.clearRect(0, 0, width, height);
        
        particles.forEach(p => {
            p.update();
            p.draw();
        });

        requestAnimationFrame(animate);
    }

    animate();
}
