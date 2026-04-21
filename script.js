// CUSTOM CURSOR
const dot = document.querySelector('.cursor-dot');
const outline = document.querySelector('.cursor-outline');

window.addEventListener('mousemove', (e) => {
    dot.style.left = e.clientX + 'px';
    dot.style.top = e.clientY + 'px';
    outline.animate({
        left: e.clientX + 'px',
        top: e.clientY + 'px'
    }, { duration: 500, fill: "forwards" });
});

// PHOTO GRID "SHOW MORE" LOGIC
document.querySelectorAll('.album-container').forEach(album => {
    const grid = album.querySelector('.photo-grid');
    const photos = grid.querySelectorAll('img');
    const btn = album.querySelector('.btn-expand');

    if (photos.length > 8) {
        for (let i = 8; i < photos.length; i++) {
            photos[i].style.display = 'none';
        }
        
        btn.addEventListener('click', () => {
            const isHidden = photos[8].style.display === 'none';
            for (let i = 8; i < photos.length; i++) {
                photos[i].style.display = isHidden ? 'block' : 'none';
            }
            btn.innerText = isHidden ? 'Show Less' : 'Show Full Project Scope';
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
    img.onclick = (e) => {
        const parentGrid = e.target.closest('.photo-grid') || e.target.closest('.cert-row');
        currentAlbum = Array.from(parentGrid.querySelectorAll('img'));
        currentIndex = currentAlbum.indexOf(e.target);
        
        lbImg.src = e.target.src;
        lb.style.display = 'flex';
    }
});

document.getElementById('nextBtn').onclick = () => {
    currentIndex = (currentIndex + 1) % currentAlbum.length;
    lbImg.src = currentAlbum[currentIndex].src;
}

document.getElementById('prevBtn').onclick = () => {
    currentIndex = (currentIndex - 1 + currentAlbum.length) % currentAlbum.length;
    lbImg.src = currentAlbum[currentIndex].src;
}

closeBtn.onclick = () => lb.style.display = 'none';
