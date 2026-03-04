function toggleMenu(event) {
    event.stopPropagation(); 
    const navMenu = document.getElementById('navMenu');
    navMenu.classList.toggle('active');
}


document.addEventListener('click', function(event) {
    const navMenu = document.getElementById('navMenu');
    const menuBtn = document.querySelector('.mobile-menu-btn');

    if (
        navMenu &&
        menuBtn &&
        !navMenu.contains(event.target) &&
        !menuBtn.contains(event.target)
    ) {
        navMenu.classList.remove('active');
    }
});
