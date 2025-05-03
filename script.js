// Get elements
const pointsElement = document.getElementById('points');
const progressBarElement = document.getElementById('progress-bar');
const progressText = document.getElementById('progress-text');

// Initialize points and progress bar
let points = parseInt(localStorage.getItem('points')) || 50; // Set default points to 50 if none exist
let totalPoints = 100; // Total points needed for full progress (can be adjusted)

// Set initial progress
updateProgress();

// Function to complete a task
function completeTask(pointsEarned) {
    // Update points
    points += pointsEarned;
    localStorage.setItem('points', points); // Save points to localStorage

    // Update the points display
    pointsElement.textContent = points;

    // Update the progress bar
    updateProgress();
}

// Function to update the progress bar
function updateProgress() {
    // Calculate progress percentage
    const progressPercentage = (points / totalPoints) * 100;

    // Update the progress bar width
    progressBarElement.innerHTML = `<div style="width: ${progressPercentage}%"></div>`;

    // Update the progress text
    progressText.textContent = `${Math.min(progressPercentage, 100).toFixed(2)}%`;

    // Optional: change progress bar color based on progress
    if (progressPercentage >= 100) {
        progressBarElement.querySelector('div').style.backgroundColor = '#76D7C4'; // Green for 100%
    } else {
        progressBarElement.querySelector('div').style.backgroundColor = '#4CAF50'; // Default green
    }
}

document.querySelector('.auth-form').addEventListener('submit', function(event) {
    const password = document.querySelector('input[type="password"]:nth-child(3)').value;
    const confirmPassword = document.querySelector('input[type="password"]:nth-child(4)').value;
  
    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      event.preventDefault(); // Prevent form submission
    }
  });
  