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
    let question = '';
    let answer1 = '';
    let answer2 = '';
    let answer3 = '';
    let answer4 = '';

    function question1() {
        question = 'This is Question 1';
        answer1 = 'Q1A1';
        answer2 = 'Q1A2';
        answer3 = 'Q1A3';
        answer4 = 'Q1A4';
    }

    function question2() {
        question = 'This is Question 2';
        answer1 = 'Q2A1';
        answer2 = 'Q2A2';
        answer3 = 'Q2A3';
        answer4 = 'Q2A4';
    }

    function question3() {
        question = 'This is Question 3';
        answer1 = 'Q3A1';
        answer2 = 'Q3A2';
        answer3 = 'Q3A3';
        answer4 = 'Q3A4';
    }

    function question4() {
        question = 'This is Question 4';
        answer1 = 'Q4A1';
        answer2 = 'Q4A2';
        answer3 = 'Q4A3';
        answer4 = 'Q4A4';
    }

    function question5() {
        question = 'This is Question 5';
        answer1 = 'Q5A1';
        answer2 = 'Q5A2';
        answer3 = 'Q5A3';
        answer4 = 'Q5A4';
    }
    
    function randomQuestion() {
        let questions = ['Q1', 'Q2', 'Q3', 'Q4', 'Q5'];
        let questionSelection = questions[Math.floor(Math.random()*5)];

        if (questionSelection === 'Q1') {
            question1()
        } else if (questionSelection === 'Q2') {
            question2()
        } else if (questionSelection === 'Q3') {
            question3()
        } else if (questionSelection === 'Q4') {
            question4()
        } else {
            question5()
        }

    }

    randomQuestion();

    title.textContent = question;
    section.children[1].textContent = '';
    section.children[2].setAttribute('id','hidden-button');
    section.appendChild(newButton1);
    section.children[3].setAttribute('id','button-1');
    section.children[3].textContent = answer1;
    section.children[3].setAttribute("style", "display: block; margin: 10px;");
    section.appendChild(newButton2);
    section.children[4].setAttribute('id','button-2');
    section.children[4].textContent = answer2;
    section.children[4].setAttribute("style", "display: block; margin: 10px;");
    section.appendChild(newButton3);
    section.children[5].setAttribute('id','button-3');
    section.children[5].textContent = answer3;
    section.children[5].setAttribute("style", "display: block; margin: 10px;");
    section.appendChild(newButton4);
    section.children[6].setAttribute('id','button-4');
    section.children[6].textContent = answer4;
    section.children[6].setAttribute("style", "display: block; margin: 10px;");

}

startButton.addEventListener('click', function() {
    timeLeft = 90
    setTimeout(countdown, 1000);
    quiz();
});