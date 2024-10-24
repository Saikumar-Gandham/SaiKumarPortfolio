// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
 });
 
 // Typing effect
 const typingText = document.querySelector('.typing-text');
 const words = JSON.parse(typingText.getAttribute('data-words'));
 const wait = typingText.getAttribute('data-wait');
 let index = 0;
 
 function type() {
    const currentWord = words[index];
    typingText.innerHTML = currentWord.substring(0, typingText.innerHTML.length + (typingText.innerHTML.length === currentWord.length ? -currentWord.length : currentWord.length));
    
    if (typingText.innerHTML.length === currentWord.length) {
        setTimeout(() => { index = (index + 1) % words.length; type(); }, wait);
    } else {
        setTimeout(type, Math.random() * (300 - 150) + 150);
    }
 }
 type();