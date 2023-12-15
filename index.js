document.addEventListener('DOMContentLoaded', (event) => {
    let time;
    let intervalId;
    const initialTime = 15 * 60 * 10; // 15 minutes in tenths of seconds
    const timerDisplay = document.getElementById('timer-display');
    const startButton = document.getElementById('start-button');
    const pauseButton = document.getElementById('pause-button');
    const resetButton = document.getElementById('reset-button');

    resetTimer(); // Initialize timer

    startButton.addEventListener('click', function() {
        clearInterval(intervalId);
        intervalId = setInterval(updateTimer, 100); // Update every tenth of a second
    });

    pauseButton.addEventListener('click', function() {
        clearInterval(intervalId);
    });

    resetButton.addEventListener('click', function() {
        clearInterval(intervalId);
        resetTimer();
    });

    function updateTimer() {
        let minutes = Math.floor(time / 600); // Convert to minutes
        let seconds = Math.floor((time % 600) / 10); // Convert remaining time to seconds
        let tenths = time % 10; // Get tenths of a second
        seconds = seconds < 10 ? '0' + seconds : seconds; // Format seconds
        timerDisplay.textContent = `${minutes}:${seconds}.${tenths}`;
        time--;

        if (time < 0) {
            clearInterval(intervalId);
            timerDisplay.textContent = "Time's up!";
        }
    }

    function resetTimer() {
        time = initialTime;
        timerDisplay.textContent = '15:00.0';
    }
});
