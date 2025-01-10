// Select DOM elements
const minutesDisplay = document.getElementById("minutes");
const secondsDisplay = document.getElementById("seconds");
const startButton = document.getElementById("start");
const pauseButton = document.getElementById("pause");
const resetButton = document.getElementById("reset");

let timerInterval; // For storing the timer interval
let timeLeft = 25 * 60; // Initial time in seconds (25 minutes)
let isRunning = false;

// Function to format time
function formatTime(seconds) {
  const mins = Math.floor(seconds / 60).toString().padStart(2, "0");
  const secs = (seconds % 60).toString().padStart(2, "0");
  return { mins, secs };
}

// Update timer display
function updateDisplay() {
  const { mins, secs } = formatTime(timeLeft);
  minutesDisplay.textContent = mins;
  secondsDisplay.textContent = secs;
}

// Start the timer
function startTimer() {
  if (isRunning) return; // Prevent multiple intervals
  isRunning = true;
  timerInterval = setInterval(() => {
    if (timeLeft > 0) {
      timeLeft--;
      updateDisplay();
    } else {
      clearInterval(timerInterval);
      alert("Time's up! Take a break! 🎉");
    }
  }, 1000);
}

// Pause the timer
function pauseTimer() {
  isRunning = false;
  clearInterval(timerInterval);
}

// Reset the timer
function resetTimer() {
  isRunning = false;
  clearInterval(timerInterval);
  timeLeft = 25 * 60; // Reset to 25 minutes
  updateDisplay();
}

// Event listeners
startButton.addEventListener("click", startTimer);
pauseButton.addEventListener("click", pauseTimer);
resetButton.addEventListener("click", resetTimer);

// Initialize display
updateDisplay();
