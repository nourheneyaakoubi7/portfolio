// CUSTOM CURSOR
const dot = document.querySelector('.cursor-dot');
const outline = document.querySelector('.cursor-outline');

window.addEventListener('mousemove', (e) => {
    const posX = e.clientX;
    const posY = e.clientY;

    dot.style.left = `${posX}px`;
    dot.style.top = `${posY}px`;

    outline.animate({
        left: `${posX}px`,
        top: `${posY}px`
    }, { duration: 500, fill: "forwards" });
});

// MOBILE NAVIGATION TOGGLE
const mobileToggle = document.querySelector('.mobile-nav-toggle');
const sidebar = document.querySelector('.sidebar');

if(mobileToggle) {
    mobileToggle.addEventListener('click', () => {
        sidebar.classList.toggle('active');
        mobileToggle.querySelector('i').classList.toggle('fa-bars');
        mobileToggle.querySelector('i').classList.toggle('fa-times');
    });
}

// PHOTO GRID "SHOW MORE" LOGIC
document.querySelectorAll('.album-container').forEach(album => {
    const grid = album.querySelector('.photo-grid');
    if (!grid) return;
    
    const photos = grid.querySelectorAll('img');
    const btn = album.querySelector('.btn-expand');

    if (photos.length > 8) {
        // Initially hide photos beyond the 8th
        for (let i = 8; i < photos.length; i++) {
            photos[i].style.display = 'none';
        }
        
        btn.addEventListener('click', () => {
            const isHidden = photos[8].style.display === 'none';
            for (let i = 8; i < photos.length; i++) {
                photos[i].style.display = isHidden ? 'block' : 'none';
            }
            btn.innerText = isHidden ? 'Show Less' : 'Show Full Scope';
        });
    } else if (btn) {
        btn.style.display = 'none';
    }
});

// LIGHTBOX SYSTEM
const lb = document.getElementById('lightbox');
const lbImg = document.getElementById('lb-img');
const closeBtn = document.querySelector('.close-lb');
let currentAlbum = [];
let currentIndex = 0;

document.querySelectorAll('.zoomable').forEach(img => {
    img.addEventListener('click', (e) => {
        // Find all images in the same section/grid to allow gallery navigation
        const parentGrid = e.target.closest('.photo-grid') || e.target.closest('.cert-row') || e.target.parentElement;
        currentAlbum = Array.from(parentGrid.querySelectorAll('img.zoomable'));
        currentIndex = currentAlbum.indexOf(e.target);
        
        lbImg.src = e.target.src;
        lb.style.display = 'flex';
        document.body.style.overflow = 'hidden'; // Stop scrolling
    });
});

const nextImg = () => {
    currentIndex = (currentIndex + 1) % currentAlbum.length;
    lbImg.src = currentAlbum[currentIndex].src;
};

const prevImg = () => {
    currentIndex = (currentIndex - 1 + currentAlbum.length) % currentAlbum.length;
    lbImg.src = currentAlbum[currentIndex].src;
};

document.getElementById('nextBtn').onclick = (e) => { e.stopPropagation(); nextImg(); };
document.getElementById('prevBtn').onclick = (e) => { e.stopPropagation(); prevImg(); };

// Close Lightbox
closeBtn.onclick = () => {
    lb.style.display = 'none';
    document.body.style.overflow = 'auto';
};

lb.onclick = (e) => {
    if(e.target === lb) {
        lb.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
};

// Handle active link on scroll
const sections = document.querySelectorAll('section, header');
const navLinks = document.querySelectorAll('.nav-menu a');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 100) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('active');
        }
    });
});
