document.addEventListener('DOMContentLoaded', function() {
  // Countdown Timer
  const eventDate = new Date('May 24, 2025 14:00:00').getTime();
  const countdown = document.createElement('div');
  countdown.style.fontWeight = 'bold';
  countdown.style.margin = '20px 0';
  document.body.insertBefore(countdown, document.querySelector('img'));

  function updateCountdown() {
    const now = new Date().getTime();
    const distance = eventDate - now;
    if (distance < 0) {
      countdown.innerHTML = "The celebration has started!";
      return;
    }
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    countdown.innerHTML = `Countdown: ${days}d ${hours}h ${minutes}m ${seconds}s`;
  }
  setInterval(updateCountdown, 1000);
  updateCountdown();

  // Image Click Alert
  const img = document.querySelector('img[alt="Welcome to the World celebration"]');
  if (img) {
    img.style.cursor = 'pointer';
    img.addEventListener('click', () => {
      alert("Congratulations! MORIRE is here!");
    });
  }

  // Venue Link Confirmation
  const venueLink = document.querySelector('a[href^="https://www.google.com/maps"]');
  if (venueLink) {
    venueLink.addEventListener('click', function(e) {
      if (!confirm("Do you want to open the venue location in Google Maps?")) {
        e.preventDefault();
      }
    });
  }
});