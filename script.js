window.addEventListener('scroll', function () {
    const header = document.querySelector('nav');
    header.classList.toggle('sticky', window.scrollY > 0);
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
