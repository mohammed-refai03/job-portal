document.addEventListener("DOMContentLoaded", () => {
    const transitionOverlay = document.getElementById('page-transition');

    // 1. HIDE loader when page is finished loading
    window.addEventListener('load', () => {
        setTimeout(() => {
            transitionOverlay.classList.add('loader-hidden');
        }, 400); // Small delay so the user actually sees the logo
    });

    // 2. SHOW loader when navigating to a new page
    const links = document.querySelectorAll('a');
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            // Only trigger for internal links (not # or external sites)
            const target = link.getAttribute('href');
            if (target && !target.startsWith('#') && !link.target && !target.startsWith('http')) {
                e.preventDefault(); // Stop immediate navigation
                transitionOverlay.classList.remove('loader-hidden'); // Show logo
                
                // Redirect after the animation starts
                setTimeout(() => {
                    window.location.href = target;
                }, 500);
            }
        });
    });
    const mobileMenu = document.getElementById('mobile-menu');

const navMenu = document.getElementById('nav-menu');



// Toggle Mobile Menu

mobileMenu.addEventListener('click', () => {

    navMenu.classList.toggle('active');

    

    // Toggle Icon between bars and X

    const icon = mobileMenu.querySelector('i');

    icon.classList.toggle('fa-bars');

    icon.classList.toggle('fa-times');

});



// Close menu when clicking outside (Optional)

document.addEventListener('click', (e) => {

    if (!navMenu.contains(e.target) && !mobileMenu.contains(e.target)) {

        navMenu.classList.remove('active');

        mobileMenu.querySelector('i').classList.replace('fa-times', 'fa-bars');

    }

});
});
