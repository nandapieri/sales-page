// Countdown Timer
function startCountdown() {
    const countdownElement = document.getElementById('countdown');
    
    // Set the date we're counting down to (24 hours from now)
    const countDownDate = new Date().getTime() + 24 * 60 * 60 * 1000;

    // Update the count down every 1 second
    const timer = setInterval(function() {
        // Get today's date and time
        const now = new Date().getTime();

        // Find the distance between now and the count down date
        const distance = countDownDate - now;

        // Time calculations for hours, minutes and seconds
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the result in the element with id="countdown"
        countdownElement.textContent = `Oferta especial termina em: ${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

        // If the count down is finished, write some text
        if (distance < 0) {
            clearInterval(timer);
            countdownElement.textContent = "Oferta encerrada!";
        }
    }, 1000);
}

startCountdown();