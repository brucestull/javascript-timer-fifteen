document.addEventListener('DOMContentLoaded', (event) => {
    let time;
    let intervalId;
    const initialTime = 15 * 60; // 15 minutes
    const timerDisplay = document.getElementById('timer-display');
    const startButton = document.getElementById('start-button');
    const pauseButton = document.getElementById('pause-button');
    const resetButton = document.getElementById('reset-button');

    resetTimer(); // Initialize timer

    startButton.addEventListener('click', function() {
        clearInterval(intervalId);
        intervalId = setInterval(updateTimer, 1000);
    });

    pauseButton.addEventListener('click', function() {
        clearInterval(intervalId);
    });

    resetButton.addEventListener('click', function() {
        clearInterval(intervalId);
        resetTimer();
    });

    function updateTimer() {
        let minutes = Math.floor(time / 60);
        let seconds = time % 60;
        seconds = seconds < 10 ? '0' + seconds : seconds;
        timerDisplay.textContent = `${minutes}:${seconds}`;
        time--;

        if (time < 0) {
            clearInterval(intervalId);
            timerDisplay.textContent = "Time's up!";
        }
    }

    function resetTimer() {
        time = initialTime;
        timerDisplay.textContent = '15:00';
    }
});
