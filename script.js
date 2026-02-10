// script.js
document.addEventListener('DOMContentLoaded', () => {
    AOS.init({
        duration: 1000,
        once: true,
    });

    const yearSpans = document.querySelectorAll('#year');
    const currentYear = new Date().getFullYear();
    yearSpans.forEach(span => {
        span.textContent = currentYear;
    });

    const menuBtn = document.getElementById('menu-btn');
    const menu = document.getElementById('menu');
    if (menuBtn && menu) {
        menuBtn.addEventListener('click', () => {
            menu.classList.toggle('max-h-0');
            menu.classList.toggle('max-h-96');
        });
    }

    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            const services = Array.from(document.querySelectorAll('input[name="service"]:checked')).map(checkbox => checkbox.value);
            
            const text = `Name: ${name}\nEmail: ${email}\nServices: ${services.join(', ')}\nMessage: ${message}`;
            const whatsappUrl = `https://wa.me/+2349057206130?text=${encodeURIComponent(text)}`; // Corrected to +234 for Nigeria
            
            window.open(whatsappUrl, '_blank');
        });
    }

    const newsletterForms = document.querySelectorAll('#newsletter-form');
    newsletterForms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = form.querySelector('#newsletter-email').value;
            const text = `Subscribe to newsletter: ${email}`;
            const whatsappUrl = `https://wa.me/+2349057206130?text=${encodeURIComponent(text)}`;
            
            window.open(whatsappUrl, '_blank');
        });
    });
});