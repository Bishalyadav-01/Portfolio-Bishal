const themeToggle = document.getElementById('themeToggle');
const htmlElement = document.documentElement;

const currentTheme = localStorage.getItem('theme') || 'light';
htmlElement.setAttribute('data-theme', currentTheme);

if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        const currentTheme = htmlElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';

        htmlElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    });
}

/* Optimized smooth point cursor */
const cursorDot = document.querySelector('.cursor-dot');

if (cursorDot && window.innerWidth > 768) {
    let mouseX = 0;
    let mouseY = 0;
    let currentX = 0;
    let currentY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    }, { passive: true });

    function animateCursor() {
        currentX += (mouseX - currentX) * 0.18;
        currentY += (mouseY - currentY) * 0.18;

        cursorDot.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;
        requestAnimationFrame(animateCursor);
    }

    animateCursor();

    document.addEventListener('mousedown', () => {
        cursorDot.classList.add('cursor-click');
    });

    document.addEventListener('mouseup', () => {
        cursorDot.classList.remove('cursor-click');
    });
}

const projectCards = document.querySelectorAll('.project-card');
const modal = document.getElementById('projectModal');
const modalClose = document.querySelector('.modal-close');
const modalImage = document.getElementById('modalImage');
const modalTitle = document.getElementById('modalTitle');
const modalDescription = document.getElementById('modalDescription');
const modalLink = document.getElementById('modalLink');

const projectData = {
    '1': {
        title: 'Personal Portfolio',
        description: 'A modern, responsive portfolio website showcasing my projects and skills. Built with HTML5, CSS3, and JavaScript with optimized animations and smooth performance.',
        image: 'images/1762533191930.jpg',
        link: 'https://github.com/Bishalyadav-01/Portfolio-Bishal'
    },

    '2': {
        title: 'Photography Portfolio',
        description: 'A curated collection of photography and editing projects displayed in a clean gallery layout with captions.',
        image: 'photographs/1755242000846.jpg',
        link: 'photography.html'
    },

    '3': {
        title: 'Magazine Cover Page',
        description: 'Designed and created the cover page for my school annual magazine with modern typography and creative layout.',
        image: 'photographs/new 2560_copy_7680x10269_1.jpg',
        link: '#'
    },

    '4': {
        title: 'PneumoScan AI',
        description:
            'Built and deployed a full-stack AI-powered pneumonia screening platform using FastAPI, Next.js, Tailwind CSS and Scikit-Learn. The application provides real-time pneumonia risk prediction through a clean and responsive interface.',
        image: 'images/1779595927258.jpeg',
        link: 'https://pneumoscan-ai-ashy.vercel.app/'
    },

    '5': {
        title: 'KarigarConnect',
        description:
            'AI-powered B2B creator economy platform built with Next.js, Gemini AI, Sentence Transformers, Scikit-Learn and KNN Retrieval. Uses semantic search and intelligent matching to connect brands with creators.',
        image: 'images/karigar.png',
        link: 'https://content-generator-hackfluence-seven.vercel.app/'
    }
};

projectCards.forEach(card => {
    card.addEventListener('click', (e) => {
        if (e.target.tagName === 'A' || e.target.closest('a')) return;

        const projectId = card.getAttribute('data-project');
        const project = projectData[projectId];

        if (project && modal) {
            modalImage.src = project.image;
            modalTitle.textContent = project.title;
            modalDescription.textContent = project.description;
            modalLink.href = project.link;

            modalLink.style.display = project.link === '#' ? 'none' : 'inline-block';

            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        }
    });
});

if (modalClose) {
    modalClose.addEventListener('click', () => {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });
}

if (modal) {
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
}

const zoomableImages = document.querySelectorAll('.zoomable-image');
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightboxImage');
const lightboxClose = document.querySelector('.lightbox-close');

zoomableImages.forEach(img => {
    img.addEventListener('click', () => {
        if (!lightbox) return;

        lightboxImage.src = img.src;
        lightbox.style.display = 'block';

requestAnimationFrame(() => {
    lightbox.classList.add('show');
});
        document.body.style.overflow = 'hidden';
    });
});

if (lightboxClose) {
    lightboxClose.addEventListener('click', () => {
        lightbox.classList.remove('show');

setTimeout(() => {
    lightbox.style.display = 'none';
}, 180);
        document.body.style.overflow = 'auto';
    });
}

if (lightbox) {
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            lightbox.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
}

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        if (modal && modal.style.display === 'block') {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }

        if (lightbox && lightbox.style.display === 'block') {
            lightbox.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    }
});

/* Smooth scrolling */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');

        if (href !== '#' && href.startsWith('#')) {
            e.preventDefault();

            const targetId = href.substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                const headerHeight = document.querySelector('header').offsetHeight;

                window.scrollTo({
                    top: targetElement.offsetTop - headerHeight - 20,
                    behavior: 'smooth'
                });
            }
        }
    });
});

/* Optimized fade animations */
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.12
});

document.querySelectorAll('.fade-in, .project-card').forEach(el => {
    observer.observe(el);
});

const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    if (!header) return;

    if (window.scrollY > 50) {
        header.classList.add('header-scrolled');
    } else {
        header.classList.remove('header-scrolled');
    }
}, { passive: true });

console.log('Portfolio optimized successfully.');
