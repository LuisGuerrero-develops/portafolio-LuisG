document.addEventListener('DOMContentLoaded', () => {
    const elementsToAnimate = document.querySelectorAll('.fade-in');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    elementsToAnimate.forEach(element => {
        observer.observe(element);
    });


    const fadeElements = document.querySelectorAll('.fade-in');
    const animationObserverOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1 
    };

    const animationObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target); 
            }
        });
    }, animationObserverOptions);

    fadeElements.forEach(el => {
        animationObserver.observe(el);
    });
});

function toggleTheme() {
    const body = document.body;
    const button = document.querySelector('.theme-toggle');
  
    body.classList.toggle('dark-mode');
  
    if (body.classList.contains('dark-mode')) {
      button.textContent = '☀️ Claro';
    } else {
      button.textContent = '🌙 Oscuro';
    }
  
 
    localStorage.setItem('theme', body.classList.contains('dark-mode') ? 'dark' : 'light');
  }
  

  window.onload = () => {
    const savedTheme = localStorage.getItem('theme');
    const body = document.body;
    const button = document.querySelector('.theme-toggle');
  
    if (savedTheme === 'dark') {
      body.classList.add('dark-mode');
      if (button) button.textContent = '☀️ Claro';
    }
  };
  