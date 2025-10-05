// Simple JavaScript for demo animation
document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.card, .team-card');
  cards.forEach((card, i) => {
    setTimeout(() => {
      card.style.transform = 'translateY(0)';
      card.style.opacity = 1;
    }, i * 200);
  });
});
