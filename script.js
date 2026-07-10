document.addEventListener('DOMContentLoaded', () => {
    // Smooth entry for cards
    const cards = document.querySelectorAll('.card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        setTimeout(() => {
            card.style.transition = 'opacity 0.8s ease, transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
            card.style.opacity = '1';
        }, 300 * (index + 1));
    });
});
