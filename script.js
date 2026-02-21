// script.js

// Menu toggle functionality
const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');

menuToggle.addEventListener('click', () => {
    menu.classList.toggle('active');
});

// Scroll animations
const revealElements = document.querySelectorAll('.reveal');
const options = { threshhold: 0.1 };

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('reveal-active');
        } else {
            entry.target.classList.remove('reveal-active');
        }
    });
}, options);

revealElements.forEach(element => observer.observe(element));

// Counter animations
const counters = document.querySelectorAll('.counter');
counters.forEach(counter => {
    const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;

        const increment = target / 200;

        if (count < target) {
            counter.innerText = Math.ceil(count + increment);
            setTimeout(updateCount, 1);
        } else {
            counter.innerText = target;
        }
    };

    updateCount();
});

// Lightbox functionality
const lightbox = document.querySelector('.lightbox');
const images = document.querySelectorAll('.lightbox-img');

images.forEach(img => {
    img.addEventListener('click', () => {
        lightbox.classList.add('active');
        lightbox.querySelector('img').src = img.src;
    });
});

lightbox.addEventListener('click', () => {
    lightbox.classList.remove('active');
});

// Form handling
const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('Form submitted!');
    // Handle form submission logic here
});

// Smooth scrolling
const scrollLinks = document.querySelectorAll('a[href^="#"]');

scrollLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});