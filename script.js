function toggleMenu() {
    const navMenu = document.getElementById('navMenu');
    if (navMenu) {
        navMenu.classList.toggle('active');
    }
}

document.addEventListener('click', function(event) {
    const navMenu = document.getElementById('navMenu');
    const menuBtn = document.querySelector('.mobile-menu-btn');

    if (navMenu && menuBtn &&
        !navMenu.contains(event.target) &&
        !menuBtn.contains(event.target) &&
        navMenu.classList.contains('active')) {
        
        navMenu.classList.remove('active');
    }
});