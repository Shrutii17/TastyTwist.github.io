document.addEventListener('DOMContentLoaded', () => {
    AOS.init();

    const feedbackForm = document.getElementById('feedbackForm');
    const feedbackMessage = document.getElementById('feedbackMessage');

    feedbackForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        feedbackMessage.innerHTML = `
            <p>Thank you, ${name}!</p>
            <p>Your feedback has been received. We'll get back to you at ${email} soon.</p>
            <p>Your Message: ${message}</p>
        `;

        feedbackForm.reset();
    });
});
