function init() {

// Variable definitions for HTML elements
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

// Finish Screen, where score is displayed and initials input accept for score keeping
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

// Quiz timer, 90 seconds
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
    // Question and answers for Question 1
    let question = `Which of the following HTML sections will NOT show it's content on the body of a web page?`;
    let answer1 = '<main>';
    let answer2 = '<header>';
    let answer3 = '<head>'; // Correct
    let answer4 = '<li>';
    let answerSetter = 1;

    // Clearing of "Start Screen" elements, adding of "Quiz" elements
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

    // Question and answers for Question 2
    function question2() {
        question = `Which direction will "justify-content:center" center it's content?`;
        answer1 = 'Vertical';
        answer2 = 'Along the same axis as the flex-direction'; // Correct
        answer3 = 'Horizontal';
        answer4 = 'Along the opposite axis as the flex-direction';
        answerSetter = 2
    }
    // Question and answers for Question 3
    function question3() {
        question = `What will the following line of code print to the console? console.log(['apple', 'orange', 'pear', 'banana'].slice(0,2));`;
        answer1 = `['pear', 'banana']`;
        answer2 = `['apple', 'orange']`; // Correct
        answer3 = `['orange','pear']`;
        answer4 = `['apple','pear','banana']`;
        answerSetter = 3
    }
    // Question and answers for Question 4
    function question4() {
        question = `Which method will cause it's attached funtion to trigger off of an event?`;
        answer1 = 'addEventListener'; // Correct
        answer2 = 'event';
        answer3 = 'log';
        answer4 = 'unshift';
        answerSetter = 4
    }
    // Question and answers for Question 5
    function question5() {
        question = `Bootstrap is a Third-Party API intened to make which type of code easier?`;
        answer1 = 'Javascript';
        answer2 = 'Java';
        answer3 = 'HTML';
        answer4 = 'CSS'; // Correct
        answerSetter = 5
    }

    // Unused function for question randomization, didn't end up needing
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

    // Function to set question and answer text based on question number
    function setAnswerText() {
        title.textContent = question;
        section.children[3].textContent = answer1;
        section.children[4].textContent = answer2;
        section.children[5].textContent = answer3;
        section.children[6].textContent = answer4;
    }

    // Functionality for the first button of all quiz answers, subtracting time on incorrect answers
    button1.addEventListener('click', function() {
        if (answerSetter === 1) {
            timeLeft-=15;
            question2();
            setAnswerText();
            answerSetter = 2;
            footer.textContent = ('Incorrect');
        } else if (answerSetter === 2) {
            timeLeft-=15;
            question3();
            setAnswerText();
            answerSetter = 3;
            footer.textContent = ('Incorrect');
        } else if (answerSetter === 3) {
            timeLeft-=15;
            question4();
            setAnswerText();
            answerSetter = 4;
            footer.textContent = ('Incorrect');
        } else if (answerSetter === 4) {
            question5();
            setAnswerText();
            answerSetter = 5;
            footer.textContent = ('Correct');
        } else {
            timeLeft-=15;
            footer.textContent = ('Incorrect');
            finishScreen();
        }
    });

    // Functionality for the second button of all quiz answers, subtracting time on incorrect answers
    button2.addEventListener('click', function() {
        if (answerSetter === 1) {
            timeLeft-=15;
            question2();
            setAnswerText();
            answerSetter = 2;
            footer.textContent = ('Incorrect');
        } else if (answerSetter === 2) {
            question3();
            setAnswerText();
            answerSetter = 3;
            footer.textContent = ('Correct');
        } else if (answerSetter === 3) {
            question4();
            setAnswerText();
            answerSetter = 4;
            footer.textContent = ('Correct');
        } else if (answerSetter === 4) {
            timeLeft-=15;
            question5();
            setAnswerText();
            answerSetter = 5;
            footer.textContent = ('Incorrect');
        } else {
            timeLeft-=15;
            footer.textContent = ('Incorrect');
            finishScreen();
        }
    });

    // Functionality for the third button of all quiz answers, subtracting time on incorrect answers
    button3.addEventListener('click', function() {
        if (answerSetter === 1) {
            question2();
            setAnswerText();
            answerSetter = 2;
            footer.textContent = ('Correct');
        } else if (answerSetter === 2) {
            timeLeft-=15;
            question3();
            setAnswerText();
            answerSetter = 3;
            footer.textContent = ('Incorrect');
        } else if (answerSetter === 3) {
            timeLeft-=15;
            question4();
            setAnswerText();
            answerSetter = 4;
            footer.textContent = ('Incorrect');
        } else if (answerSetter === 4) {
            timeLeft-=15;
            question5();
            setAnswerText();
            answerSetter = 5;
            footer.textContent = ('Incorrect');
        } else {
            timeLeft-=15;
            footer.textContent = ('Incorrect');
            finishScreen();
        }
    });

    // Functionality for the fourth button of all quiz answers, subtracting time on incorrect answers
    button4.addEventListener('click', function() {
        if (answerSetter === 1) {
            timeLeft-=15;
            question2();
            setAnswerText();
            answerSetter = 2;
            footer.textContent = ('Incorrect');
        } else if (answerSetter === 2) {
            timeLeft-=15;
            question3();
            setAnswerText();
            answerSetter = 3;
            footer.textContent = ('Incorrect');
        } else if (answerSetter === 3) {
            timeLeft-=15;
            question4();
            setAnswerText();
            answerSetter = 4;
            footer.textContent = ('Incorrect');
        } else if (answerSetter === 4) {
            timeLeft-=15;
            question5();
            setAnswerText();
            answerSetter = 5;
            footer.textContent = ('Incorrect');
        } else {
            footer.textContent = ('Correct');
            finishScreen();
        }
    });

    

}

// Function that begins the quiz once the start button is pressed
startButton.addEventListener('click', function() {
    timeLeft = 90
    timer.innerHTML = String(timeLeft);
    setTimeout(countdown, 1000);
    quiz();
});

}
// Initializes the page
init();
