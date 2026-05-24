const themeToggle = document.getElementById('themeToggle');
const htmlElement = document.documentElement;

const currentTheme = localStorage.getItem('theme') || 'light';
htmlElement.setAttribute('data-theme', currentTheme);

if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        const currentTheme = htmlElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
<<<<<<< HEAD

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
=======
        
        htmlElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);

        themeToggle.style.transform = 'rotate(360deg)';
        setTimeout(() => {
            themeToggle.style.transform = 'rotate(0deg)';
        }, 300);
    });
}

const cursorDot = document.querySelector('.cursor-dot');
const cursorOutline = document.querySelector('.cursor-outline');

if (cursorDot && cursorOutline) {
    let mouseX = 0;
    let mouseY = 0;
    let outlineX = 0;
    let outlineY = 0;
>>>>>>> 3de4808330c48a3c8aa5885b47f549c0bb63d793

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
<<<<<<< HEAD
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
=======

        cursorDot.style.left = mouseX + 'px';
        cursorDot.style.top = mouseY + 'px';
    });
    
    function animateOutline() {
        outlineX += (mouseX - outlineX) * 0.15;
        outlineY += (mouseY - outlineY) * 0.15;
        
        cursorOutline.style.left = outlineX + 'px';
        cursorOutline.style.top = outlineY + 'px';
        
        requestAnimationFrame(animateOutline);
    }
    animateOutline();
    
    const interactiveElements = document.querySelectorAll('a, button, .project-card, .zoomable-image');
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursorDot.style.transform = 'scale(1.5)';
            cursorOutline.style.width = '50px';
            cursorOutline.style.height = '50px';
        });
        
        el.addEventListener('mouseleave', () => {
            cursorDot.style.transform = 'scale(1)';
            cursorOutline.style.width = '35px';
            cursorOutline.style.height = '35px';
        });
>>>>>>> 3de4808330c48a3c8aa5885b47f549c0bb63d793
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
<<<<<<< HEAD
        description: 'A modern, responsive portfolio website showcasing my projects and skills. Built with HTML5, CSS3, and JavaScript with optimized animations and smooth performance.',
=======
        description: 'A modern, responsive portfolio website showcasing my projects and skills. Built with HTML5, CSS3, and JavaScript, featuring smooth animations, dark mode toggle, and interactive UI elements. The design emphasizes clean aesthetics and user experience, making it easy for potential employers and clients to explore my work. Implemented with mobile-first approach ensuring perfect display across all devices.',
>>>>>>> 3de4808330c48a3c8aa5885b47f549c0bb63d793
        image: 'images/1762533191930.jpg',
        link: 'https://github.com/Bishalyadav-01/Portfolio-Bishal'
    },
    '2': {
        title: 'Photography Portfolio',
<<<<<<< HEAD
        description: 'A curated collection of photography and editing projects displayed in a clean gallery layout with captions.',
        image: 'photographs/1755242000846.jpg',
        link: 'photography.html'
    },
    '3': {
        title: 'Magazine Cover Page',
        description: 'Designed and created the cover page for my school annual magazine with modern typography and creative layout.',
=======
        description: 'A curated collection of my photography and editing projects that capture the essence of everyday life, cultural moments, and emotional stories. This portfolio demonstrates my eye for composition, lighting, and post-processing techniques. Each photograph tells a unique story, blending technical skill with artistic vision. The collection spans various genres including portrait, landscape, and event photography.',
        image: 'photographs/1755242000846.jpg',
        link: 'https://drive.google.com/drive/folders/1J6OzKqh5YBYlT31AF7C0KLsLlXwfgrdn?usp=drive_link'
    },
    '3': {
        title: 'Magazine Cover Page',
        description: 'Designed and created the cover page for my school\'s annual magazine, skillfully blending modern typography with traditional cultural motifs. This project showcases my graphic design abilities and understanding of visual hierarchy. The cover balances contemporary design trends with cultural authenticity, creating an eye-catching and meaningful representation of our school\'s diverse community and achievements.',
>>>>>>> 3de4808330c48a3c8aa5885b47f549c0bb63d793
        image: 'photographs/new 2560_copy_7680x10269_1.jpg',
        link: '#'
    }
};

projectCards.forEach(card => {
    card.addEventListener('click', (e) => {
<<<<<<< HEAD
        if (e.target.tagName === 'A' || e.target.closest('a')) return;

        const projectId = card.getAttribute('data-project');
        const project = projectData[projectId];

        if (project && modal) {
=======
        if (e.target.tagName === 'A' || e.target.closest('a')) {
            return;
        }
        
        const projectId = card.getAttribute('data-project');
        const project = projectData[projectId];
        
        if (project) {
>>>>>>> 3de4808330c48a3c8aa5885b47f549c0bb63d793
            modalImage.src = project.image;
            modalTitle.textContent = project.title;
            modalDescription.textContent = project.description;
            modalLink.href = project.link;
<<<<<<< HEAD

            modalLink.style.display = project.link === '#' ? 'none' : 'inline-block';

=======
            
            if (project.link === '#') {
                modalLink.style.display = 'none';
            } else {
                modalLink.style.display = 'inline-block';
            }
            
>>>>>>> 3de4808330c48a3c8aa5885b47f549c0bb63d793
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

<<<<<<< HEAD
=======
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

>>>>>>> 3de4808330c48a3c8aa5885b47f549c0bb63d793
const zoomableImages = document.querySelectorAll('.zoomable-image');
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightboxImage');
const lightboxClose = document.querySelector('.lightbox-close');

zoomableImages.forEach(img => {
    img.addEventListener('click', () => {
<<<<<<< HEAD
        if (!lightbox) return;

        lightboxImage.src = img.src;
        lightbox.style.display = 'block';

requestAnimationFrame(() => {
    lightbox.classList.add('show');
});
=======
        lightboxImage.src = img.src;
        lightbox.style.display = 'block';
>>>>>>> 3de4808330c48a3c8aa5885b47f549c0bb63d793
        document.body.style.overflow = 'hidden';
    });
});

<<<<<<< HEAD
if (lightboxClose) {
    lightboxClose.addEventListener('click', () => {
        lightbox.classList.remove('show');

setTimeout(() => {
    lightbox.style.display = 'none';
}, 180);
=======
// Close lightbox
if (lightboxClose) {
    lightboxClose.addEventListener('click', () => {
        lightbox.style.display = 'none';
>>>>>>> 3de4808330c48a3c8aa5885b47f549c0bb63d793
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

<<<<<<< HEAD
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
=======
>>>>>>> 3de4808330c48a3c8aa5885b47f549c0bb63d793
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');

        if (href !== '#' && href.startsWith('#')) {
            e.preventDefault();
<<<<<<< HEAD

            const targetId = href.substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                const headerHeight = document.querySelector('header').offsetHeight;

                window.scrollTo({
                    top: targetElement.offsetTop - headerHeight - 20,
=======
            
            const targetId = href.substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                const headerHeight = document.querySelector('header').offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
>>>>>>> 3de4808330c48a3c8aa5885b47f549c0bb63d793
                    behavior: 'smooth'
                });
            }
        }
    });
});

<<<<<<< HEAD
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
=======
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-in').forEach(section => {
    observer.observe(section);
});

document.querySelectorAll('.project-card').forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = `all 0.6s ease ${index * 0.1}s`;
    
    observer.observe(card);
});


const header = document.querySelector('header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    

    if (currentScroll > 50) {
        header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.15)';
    } else {
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.08)';
    }
    
    lastScroll = currentScroll;
});


const contactForm = document.querySelector('.contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        const nameInput = contactForm.querySelector('input[name="name"]');
        const emailInput = contactForm.querySelector('input[name="email"]');
        const messageInput = contactForm.querySelector('textarea[name="message"]');
        
        let isValid = true;
        

        if (nameInput.value.trim().length < 2) {
            isValid = false;
            nameInput.style.borderColor = 'red';
        } else {
            nameInput.style.borderColor = '';
        }
        
        if (!emailInput.value.includes('@')) {
            isValid = false;
            emailInput.style.borderColor = 'red';
        } else {
            emailInput.style.borderColor = '';
        }
        
        if (messageInput.value.trim().length < 10) {
            isValid = false;
            messageInput.style.borderColor = 'red';
        } else {
            messageInput.style.borderColor = '';
        }
        
        if (!isValid) {
            e.preventDefault();
            alert('Please fill out all fields correctly.');
        }
    });
}


function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

window.addEventListener('resize', debounce(() => {

    console.log('Window resized');
}, 250));

window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});


if (modal) {
    modal.addEventListener('keydown', (e) => {
        if (e.key === 'Tab') {
            const focusableElements = modal.querySelectorAll('a, button');
            const firstElement = focusableElements[0];
            const lastElement = focusableElements[focusableElements.length - 1];
            
            if (e.shiftKey && document.activeElement === firstElement) {
                e.preventDefault();
                lastElement.focus();
            } else if (!e.shiftKey && document.activeElement === lastElement) {
                e.preventDefault();
                firstElement.focus();
            }
        }
    });
}

console.log('%c👋 Hi there, Developer!', 'color: #00b8a9; font-size: 20px; font-weight: bold;');
console.log('%cInterested in the code? Check out the GitHub repo!', 'color: #007b8e; font-size: 14px;');
console.log('%chttps://github.com/Bishalyadav-01/Portfolio-Bishal', 'color: #00b8a9; font-size: 12px;');
>>>>>>> 3de4808330c48a3c8aa5885b47f549c0bb63d793
