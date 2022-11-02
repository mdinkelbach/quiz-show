let timer = document.getElementById('timer');
let button = document.querySelector('button');
let title = document.querySelector('.title');

let timeLeft = 0;

function countdown(){
    timeLeft--;
    timer.innerHTML = String(timeLeft);
    if (timeLeft > 0){
        setTimeout(countdown, 1000);
    }
};

function quiz() {
    title.textContent = 'Question 1';
}

button.addEventListener('click', function() {
    timeLeft = 90
    setTimeout(countdown, 1000);
    quiz();
});


