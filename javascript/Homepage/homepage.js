document.getElementById('logoutBtn').addEventListener('click', function() {
  if (confirm('Are you sure you want to log out?')) {
    // Use relative path with ./ to ensure it works on GitHub Pages
    window.location.href = './index.html';
  }
});

// Add click handlers for cards
document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('click', function() {
    const title = this.querySelector('h3').textContent;
    alert(`${title} feature - Coming soon!`);
  });
});
