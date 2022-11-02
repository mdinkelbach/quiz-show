let timer = document.getElementById('timer');
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
    let question = 'This is Question 1';
    let answer1 = 'Q1A1';
    let answer2 = 'Q1A2';
    let answer3 = 'Q1A3';
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
    

    /*function question1() {
        question = 'This is Question 1';
        answer1 = 'Q1A1';
        answer2 = 'Q1A2';
        answer3 = 'Q1A3'; // Correct
        answer4 = 'Q1A4';
        answerSetter = 1;
    }*/

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

    }

    function settingAnswers() {
    if (answerSetter === 1) {
        section.children[5].setAttribute('class','correct');
        section.children[3].setAttribute('class','incorrect');
        section.children[4].setAttribute('class','incorrect');
        section.children[6].setAttribute('class','incorrect');
    } else if (answerSetter === 2) {
        section.children[4].setAttribute('class','correct');
        section.children[3].setAttribute('class','incorrect');
        section.children[5].setAttribute('class','incorrect');
        section.children[6].setAttribute('class','incorrect');
    } else if (answerSetter === 3) {
        section.children[4].setAttribute('class','correct');
        section.children[3].setAttribute('class','incorrect');
        section.children[5].setAttribute('class','incorrect');
        section.children[6].setAttribute('class','incorrect');
    } else if (answerSetter === 4) {
        section.children[3].setAttribute('class','correct');
        section.children[4].setAttribute('class','incorrect');
        section.children[5].setAttribute('class','incorrect');
        section.children[6].setAttribute('class','incorrect');
    } else {
        section.children[6].setAttribute('class','correct');
        section.children[3].setAttribute('class','incorrect');
        section.children[4].setAttribute('class','incorrect');
        section.children[5].setAttribute('class','incorrect');
    }
    }*/

    let button1 = document.getElementById('button-1');
    let button2 = document.getElementById('button-2');
    let button3 = document.getElementById('button-3');
    let button4 = document.getElementById('button-4');
    //let correctAnswer = document.querySelector('.correct');
    //let incorrectAnswer = document.querySelector('.incorrect');
    //let button = document.querySelector('button');

    function setAnswerText() {
        title.textContent = question;
        section.children[3].textContent = answer1;
        section.children[4].textContent = answer2;
        section.children[5].textContent = answer3;
        section.children[6].textContent = answer4;
    }

    
    function setQuestionOne() {
        button1.addEventListener('click', function() {
            console.log('correct');
            question2();
            setAnswerText();
            setQuestionTwo();
        });
        button2.addEventListener('click', function() {
            console.log('incorrect');
            question2();
            setAnswerText();
            setQuestionTwo();
        });
        button3.addEventListener('click', function() {
            console.log('incorrect');
            question2();
            setAnswerText();
            setQuestionTwo();
        });
        button4.addEventListener('click', function() {
            console.log('incorrect');
            question2();
            setAnswerText();
            setQuestionTwo();
        });
    }
    setQuestionOne();

    function setQuestionTwo() {
        button1.addEventListener('click', function() {
            console.log('incorrect')
            question3();
            setAnswerText();
            setQuestionThree();
        });
        button2.addEventListener('click', function() {
            console.log('correct')
            question3();
            setAnswerText();
            setQuestionThree();
        });
        button3.addEventListener('click', function() {
            console.log('incorrect')
            question3();
            setAnswerText();
            setQuestionThree();
        });
        button4.addEventListener('click', function() {
            console.log('incorrect')
            question3();
            setAnswerText();
            setQuestionThree();
        });
    }

    function setQuestionThree() {
        button1.addEventListener('click', function() {
            console.log('incorrect')
            question4();
            setAnswerText();
            setQuestionFour();
        });
        button2.addEventListener('click', function() {
            console.log('correct')
            question4();
            setAnswerText();
            setQuestionFour();
        });
        button3.addEventListener('click', function() {
            console.log('incorrect')
            question4();
            setAnswerText();
            setQuestionFour();
        });
        button4.addEventListener('click', function() {
            console.log('incorrect')
            question4();
            setAnswerText();
            setQuestionFour();
        });
    }

    function setQuestionFour() {
        button1.addEventListener('click', function() {
            console.log('correct')
            question5();
            setAnswerText();
            setQuestionFive();
        });
        button2.addEventListener('click', function() {
            console.log('incorrect')
            question5();
            setAnswerText();
            setQuestionFive();
        });
        button3.addEventListener('click', function() {
            console.log('incorrect')
            question5();
            setAnswerText();
            setQuestionFive();
        });
        button4.addEventListener('click', function() {
            console.log('incorrect')
            question5();
            setAnswerText();
            setQuestionFive();
        });
    }

    function setQuestionFive() {
        button1.addEventListener('click', function() {
            console.log('incorrect')
        });
        button2.addEventListener('click', function() {
            console.log('incorrect')
        });
        button3.addEventListener('click', function() {
            console.log('incorrect')
        });
        button4.addEventListener('click', function() {
            console.log('correct')
        });
    }
}

startButton.addEventListener('click', function() {
    timeLeft = 90
    timer.innerHTML = String(timeLeft);
    setTimeout(countdown, 1000);
    quiz();
});