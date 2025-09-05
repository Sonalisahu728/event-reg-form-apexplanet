document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registrationForm');
    const successMessage = document.getElementById('successMessage');

    function showSuccess() {
        form.style.display = 'none';
        successMessage.style.display = 'block';
        createConfetti();
    }

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        let isValid = true;

        const nameInput = document.getElementById('fullName');
        const nameError = document.getElementById('nameError');
        if (nameInput.value.trim() === '') {
            nameError.textContent = 'Please enter your full name';
            nameError.style.display = 'block';
            isValid = false;
        } else {
            nameError.style.display = 'none';
        }

        const emailInput = document.getElementById('email');
        const emailError = document.getElementById('emailError');
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(emailInput.value)) {
            emailError.textContent = 'Please enter a valid email address';
            emailError.style.display = 'block';
            isValid = false;
        } else {
            emailError.style.display = 'none';
        }

        const phoneInput = document.getElementById('phone');
        const phoneError = document.getElementById('phoneError');
        const phonePattern = /^[\+]?[1-9][\d]{0,15}$/;
        if (!phonePattern.test(phoneInput.value.replace(/[\s\-\(\)]/g, ''))) {
            phoneError.textContent = 'Please enter a valid phone number';
            phoneError.style.display = 'block';
            isValid = false;
        } else {
            phoneError.style.display = 'none';
        }

        const ticketInput = document.getElementById('ticketType');
        const ticketError = document.getElementById('ticketError');
        if (ticketInput.value === '') {
            ticketError.textContent = 'Please select a ticket type';
            ticketError.style.display = 'block';
            isValid = false;
        } else {
            ticketError.style.display = 'none';
        }

        if (isValid) showSuccess();
    });

    function createConfetti() {
        const colors = ['#fdbb2d', '#b21f1f', '#1a2a6c', '#ffffff'];
        const container = document.querySelector('.register-form');

        for (let i = 0; i < 100; i++) {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.style.width = Math.floor(Math.random() * 10 + 5) + 'px';
            confetti.style.height = Math.floor(Math.random() * 10 + 5) + 'px';
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.position = 'absolute';
            confetti.style.left = Math.random() * 100 + '%';
            confetti.style.opacity = '0';
            confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';

            container.appendChild(confetti);

            anime({
                targets: confetti,
                opacity: [0, 1],
                top: [0, Math.random() * 300 + 100],
                left: [Math.random() * 400 - 200, Math.random() * 400 - 200],
                rotate: Math.random() * 360,
                duration: Math.random() * 1000 + 2000,
                easing: 'easeOutQuad'
            });
        }
    }

    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.1/anime.min.js';
    document.head.appendChild(script);
});
