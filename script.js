// Set the target New Year date (December 31, 2024, 16::20)
const newYearDate = new Date('January 1, 2025, 00:00:00').getTime();

let countdownInterval;

function updateCountdown() {
    // Get the current time
    const now = new Date().getTime();
    // Calculate the remaining time
    const distance = newYearDate - now;

    // Calculate days, hours, minutes, and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the countdown result
    document.querySelector('.days').innerText = days < 10 ? '0' + days : days;
    document.querySelector('.hour').innerText = hours < 10 ? '0' + hours : hours;
    document.querySelector('.minute').innerText = minutes < 10 ? '0' + minutes : minutes;
    document.querySelector('.second').innerText = seconds < 10 ? '0' + seconds : seconds;

    // If the countdown is over, display the "Happy New Year!" message
    if (distance <= 0) {
        // Set the countdown to 00 when time's up
        document.querySelector('.days').textContent = '00';
        document.querySelector('.hour').textContent = '00';
        document.querySelector('.minute').textContent = '00';
        document.querySelector('.second').textContent = '00';

        // Create and display the "Happy New Year!" message
        const newYearMessage = document.createElement('div');
        newYearMessage.style.fontSize = '100px';
        newYearMessage.style.fontWeight = 'bold';
        newYearMessage.style.color = 'green';
        newYearMessage.style.textAlign = 'center';
        newYearMessage.style.marginTop = '20px';
        newYearMessage.textContent = 'Happy New Year!';

        // Adding extra effects directly in JavaScript
        newYearMessage.style.animation = 'scaleUp 2s ease-in-out, rotate 2s ease-in-out, colorChange 4s infinite, fadeInOut 5s infinite';

        // Append the message to the body (or you can append it to .main)
        document.body.appendChild(newYearMessage);

        // Stop the countdown
        clearInterval(countdownInterval);

        // Create fireworks effect (small particle effect)
        createFireworks();
    }
}

// Start the countdown and update every second
countdownInterval = setInterval(updateCountdown, 1000);
updateCountdown();

// Create fireworks effect (small particle effect)
function createFireworks() {
    const fireworksCount = 50; // Number of fireworks particles
    for (let i = 0; i < fireworksCount; i++) {
        const fireworkParticle = document.createElement('div');
        fireworkParticle.style.position = 'absolute';
        fireworkParticle.style.width = '5px';
        fireworkParticle.style.height = '5px';
        fireworkParticle.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`; // Random color
        fireworkParticle.style.borderRadius = '50%';
        fireworkParticle.style.top = `${Math.random() * window.innerHeight}px`;
        fireworkParticle.style.left = `${Math.random() * window.innerWidth}px`;
        fireworkParticle.style.animation = `firework 1s ease-in-out forwards`;

        // Random direction for the fireworks particles
        fireworkParticle.style.animationDelay = `${Math.random() * 2}s`;
        
        document.body.appendChild(fireworkParticle);
    }
}

// Adding animations to the document style
const styleSheet = document.styleSheets[0];

// Adding scale-up animation
styleSheet.insertRule(`
  @keyframes scaleUp {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  }
`, styleSheet.cssRules.length);

// Adding rotate animation
styleSheet.insertRule(`
  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`, styleSheet.cssRules.length);

// Adding color change animation
styleSheet.insertRule(`
  @keyframes colorChange {
    0% {
      color: green;
    }
    50% {
      color: red;
    }
    100% {
      color: yellow;
    }
  }
`, styleSheet.cssRules.length);

// Adding fade-in and fade-out animation
styleSheet.insertRule(`
  @keyframes fadeInOut {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`, styleSheet.cssRules.length);

// Adding fireworks animation
styleSheet.insertRule(`
  @keyframes firework {
    0% {
      transform: scale(0);
      opacity: 1;
    }
    100% {
      transform: scale(5);
      opacity: 0;
    }
  }
`, styleSheet.cssRules.length);

