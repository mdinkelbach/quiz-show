let timer = document.getElementById('timer');
let frozenTimer = document.getElementById('frozen-timer');
let startButton = document.getElementById('start-button');
let title = document.querySelector('.title');
let section = document.querySelector('section');
let footer = document.querySelector('footer');
let header = document.querySelector('header');
let newButton1 = document.createElement('button');
let newButton2 = document.createElement('button');
let newButton3 = document.createElement('button');
let newButton4 = document.createElement('button');
let newP = document.createElement('p')

let timeLeft = 0;
let timeFreeze = '';

function finishScreen() {
    title.textContent = 'Done!';
    section.children[1].textContent = `Your final score is ${timeLeft}.`;
    section.children[3].setAttribute("style", "display: none;");
    section.children[4].setAttribute("style", "display: none;");
    section.children[5].setAttribute("style", "display: none;");
    section.children[6].setAttribute("style", "display: none;");
    section.appendChild(newP);
    section.children[7].setAttribute('id', 'input');
    document.querySelector("#input").innerHTML="<p>Enter Initals: <input></input><button>Submit</button></p>";
    section.children[7].children[0].children[1].setAttribute('id', 'submit-button');
    timeFreeze = timeLeft;
    frozenTimer.innerHTML = String(timeFreeze);
    timer.setAttribute('style', 'display:none');
    frozenTimer.setAttribute('style', 'display:inline');
    timeLeft = null;
    section.children[7].children[0].children[0].setAttribute('id','initials-input')
    let submitButton = document.getElementById('submit-button');
    
    submitButton.addEventListener('click', function() {
        console.log('submit')
        let initialsInput = document.querySelector("#initials-input").value;
        localStorage.setItem("initials", initialsInput);
        localStorage.setItem("score", timeFreeze);
    });
}

function countdown() {
    timeLeft--;
    timer.innerHTML = String(timeLeft);
    if (timeLeft > 0){
        setTimeout(countdown, 1000);
    }
    if(timeLeft <= 0 && title.textContent != 'Done!') {
        finishScreen();
      }
};

function quiz() {
    let question = 'This is Question 1';
    let answer1 = 'Q1A1';
    let answer2 = 'Q1A2';
    let answer3 = 'Q1A3'; // Correct
    let answer4 = 'Q1A4';
    let answerSetter = 1;

    
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
    footer.setAttribute("style", "display: flex;");


    function question2() {
        question = 'This is Question 2';
        answer1 = 'Q2A1';
        answer2 = 'Q2A2'; // Correct
        answer3 = 'Q2A3';
        answer4 = 'Q2A4';
        answerSetter = 2
    }

    function question3() {
        question = 'This is Question 3';
        answer1 = 'Q3A1';
        answer2 = 'Q3A2'; // Correct
        answer3 = 'Q3A3';
        answer4 = 'Q3A4';
        answerSetter = 3
    }

    function question4() {
        question = 'This is Question 4';
        answer1 = 'Q4A1'; // Correct
        answer2 = 'Q4A2';
        answer3 = 'Q4A3';
        answer4 = 'Q4A4';
        answerSetter = 4
    }

    function question5() {
        question = 'This is Question 5';
        answer1 = 'Q5A1';
        answer2 = 'Q5A2';
        answer3 = 'Q5A3';
        answer4 = 'Q5A4'; // Correct
        answerSetter = 5
    }
    
    /*function randomQuestion() {
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

    }*/

    let button1 = document.getElementById('button-1');
    let button2 = document.getElementById('button-2');
    let button3 = document.getElementById('button-3');
    let button4 = document.getElementById('button-4');

    function setAnswerText() {
        title.textContent = question;
        section.children[3].textContent = answer1;
        section.children[4].textContent = answer2;
        section.children[5].textContent = answer3;
        section.children[6].textContent = answer4;
    }

    button1.addEventListener('click', function() {
        if (answerSetter === 1) {
            console.log('incorrect');
            timeLeft-=15;
            question2();
            setAnswerText();
            answerSetter = 2;
            footer.textContent = ('Incorrect');
        } else if (answerSetter === 2) {
            console.log('incorrect');
            timeLeft-=15;
            question3();
            setAnswerText();
            answerSetter = 3;
            footer.textContent = ('Incorrect');
        } else if (answerSetter === 3) {
            console.log('incorrect');
            timeLeft-=15;
            question4();
            setAnswerText();
            answerSetter = 4;
            footer.textContent = ('Incorrect');
        } else if (answerSetter === 4) {
            console.log('correct');
            question5();
            setAnswerText();
            answerSetter = 5;
            footer.textContent = ('Correct');
        } else {
            console.log('incorrect');
            timeLeft-=15;
            footer.textContent = ('Incorrect');
            finishScreen();
        }
    });

    button2.addEventListener('click', function() {
        if (answerSetter === 1) {
            console.log('incorrect');
            timeLeft-=15;
            question2();
            setAnswerText();
            answerSetter = 2;
            footer.textContent = ('Incorrect');
        } else if (answerSetter === 2) {
            console.log('correct');
            question3();
            setAnswerText();
            answerSetter = 3;
            footer.textContent = ('Correct');
        } else if (answerSetter === 3) {
            console.log('correct');
            question4();
            setAnswerText();
            answerSetter = 4;
            footer.textContent = ('Correct');
        } else if (answerSetter === 4) {
            console.log('incorrect');
            timeLeft-=15;
            question5();
            setAnswerText();
            answerSetter = 5;
            footer.textContent = ('Incorrect');
        } else {
            console.log('incorrect');
            timeLeft-=15;
            footer.textContent = ('Incorrect');
            finishScreen();
        }
    });

    button3.addEventListener('click', function() {
        if (answerSetter === 1) {
            console.log('correct');
            question2();
            setAnswerText();
            answerSetter = 2;
            footer.textContent = ('Correct');
        } else if (answerSetter === 2) {
            console.log('incorrect');
            timeLeft-=15;
            question3();
            setAnswerText();
            answerSetter = 3;
            footer.textContent = ('Incorrect');
        } else if (answerSetter === 3) {
            console.log('incorrect');
            timeLeft-=15;
            question4();
            setAnswerText();
            answerSetter = 4;
            footer.textContent = ('Incorrect');
        } else if (answerSetter === 4) {
            console.log('incorrect');
            timeLeft-=15;
            question5();
            setAnswerText();
            answerSetter = 5;
            footer.textContent = ('Incorrect');
        } else {
            console.log('incorrect');
            timeLeft-=15;
            footer.textContent = ('Incorrect');
            finishScreen();
        }
    });

    button4.addEventListener('click', function() {
        if (answerSetter === 1) {
            console.log('incorrect');
            timeLeft-=15;
            question2();
            setAnswerText();
            answerSetter = 2;
            footer.textContent = ('Incorrect');
        } else if (answerSetter === 2) {
            console.log('incorrect');
            timeLeft-=15;
            question3();
            setAnswerText();
            answerSetter = 3;
            footer.textContent = ('Incorrect');
        } else if (answerSetter === 3) {
            console.log('incorrect');
            timeLeft-=15;
            question4();
            setAnswerText();
            answerSetter = 4;
            footer.textContent = ('Incorrect');
        } else if (answerSetter === 4) {
            console.log('incorrect');
            timeLeft-=15;
            question5();
            setAnswerText();
            answerSetter = 5;
            footer.textContent = ('Incorrect');
        } else {
            console.log('correct');
            footer.textContent = ('Correct');
            finishScreen();
        }
    });

    

}

startButton.addEventListener('click', function() {
    timeLeft = 90
    timer.innerHTML = String(timeLeft);
    setTimeout(countdown, 1000);
    quiz();
});