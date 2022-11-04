// Variable definitions for HTML elements
let newScore = document.createElement('li');
let section = document.querySelector('section');
let clearScore = document.getElementById('clear-score-button');

// Loop to set score (could possibly be used to set multiple scores, but not needed for this challenge)
for (let i = 0; i < localStorage.getItem("score").length; i++) {
    section.children[1].appendChild(newScore);
    section.children[1].children[0].textContent = `${localStorage.getItem("initials")} - ${localStorage.getItem("score")}`
};

// Clears scores when "Clear Score" button is pressed
clearScore.addEventListener('click', function() {
    localStorage.removeItem("score");
    localStorage.removeItem("initials");
    section.children[1].children[0].textContent = ''
})