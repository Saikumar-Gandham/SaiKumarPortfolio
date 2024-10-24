window.addEventListener('scroll', function () {
    const header = document.querySelector('nav');
    header.classList.toggle('sticky', window.scrollY > 0);
});

// Smooth scrolling for navigation links
const navLinks = document.querySelectorAll('.nav-links a');

navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        window.scrollTo({
            top: target.offsetTop - 60,
            behavior: 'smooth'
        });
    });
});

const progressLines = document.querySelectorAll('.progress-line span');

window.addEventListener('scroll', () => {
    const triggerBottom = window.innerHeight / 5 * 4;

    progressLines.forEach(progress => {
        const progressTop = progress.getBoundingClientRect().top;

        if (progressTop < triggerBottom) {
            progress.style.width = progress.parentElement.getAttribute('data-percent');
        }
    });
});
