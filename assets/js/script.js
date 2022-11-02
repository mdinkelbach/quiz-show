let timer = document.getElementById('timer');
//let quizBody = document.getElementById('section');
let startButton = document.getElementById('start-button');
let title = document.querySelector('.title');
let section = document.querySelector('section');
let newButton1 = document.createElement('button');
let newButton2 = document.createElement('button');
let newButton3 = document.createElement('button');
let newButton4 = document.createElement('button');

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
    section.children[1].textContent = '';
    section.children[2].setAttribute('id','hidden-button');
    section.appendChild(newButton1);
    section.children[3].setAttribute('id','button-1');
    section.children[3].textContent = 'Answer 1';
    section.appendChild(newButton2);
    section.children[4].setAttribute('id','button-2');
    section.children[4].textContent = 'Answer 2';
    section.appendChild(newButton3);
    section.children[5].setAttribute('id','button-3');
    section.children[5].textContent = 'Answer 3';
    section.appendChild(newButton4);
    section.children[6].setAttribute('id','button-4');
    section.children[6].textContent = 'Answer 4';
}

startButton.addEventListener('click', function() {
    timeLeft = 90
    setTimeout(countdown, 1000);
    quiz();
});


