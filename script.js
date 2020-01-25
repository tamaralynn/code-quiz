// Variables
const startButton = document.querySelector('.start-button');
const startDiv = document.querySelector('.start-div')
const questionContainerEl = document.querySelector('.question-container');
const questionEl = document.getElementById('question');
const answerButtonsEl = document.querySelector('.answer-buttons');
const scoreEl = document.getElementById('score');
const minutesEl = document.getElementById('minutes-left');
const secondsEl = document.getElementById('seconds-left');
let initialsEl = document.getElementById('initials-input');
let storeInfoEl = '';

//starting stats
let totalSeconds = 0;
let secondsElapsed = 0;
let interval;
let score = 0;
scoreEl.innerHTML = score;

let allQuestions, currentQuestionsIndex;


const questions = [{
        question: 'Inside which HTML element do we put the JavaScript?',
        answers: [
            { text: '<js>', correct: false },
            { text: '<script>', correct: true },
            { text: '<style>', correct: false },
            { text: '<span>', correct: false },
        ]
    },
    {
        question: 'What is the value of (true + true) > 3',
        answers: [
            { text: 'true', correct: false },
            { text: 'type error', correct: false },
            { text: 'false', correct: true },
            { text: 'NaN', correct: false },
        ]
    },
    {
        question: 'What is the result of NaN === NaN ?',
        answers: [
            { text: 'udefined', correct: false },
            { text: 'true', correct: false },
            { text: 'NaN', correct: false },
            { text: 'false', correct: true },
        ]
    },
    {
        question: 'What is the function of Array object that runs through each element of the array?',
        answers: [
            { text: 'every()', correct: false },
            { text: 'forEach()', correct: false },
            { text: 'each()', correct: true },
            { text: 'forAll()', correct: false },
        ]
    },
    {
        question: 'What does the following code return: var x = 1; typeof typeof x; ?',
        answers: [
            { text: '"number"', correct: false },
            { text: '"object"', correct: false },
            { text: '"undefined"', correct: false },
            { text: '"string"', correct: true },
        ]
    },
    {
        question: 'How does JavaScript store dates in a date object?',
        answers: [
            { text: 'The number of seconds since January 1, 1900.', correct: false },
            { text: 'The number of days since January 1st, 1900.', correct: false },
            { text: 'The number of milliseconds since January 1st, 1970.', correct: true },
            { text: 'The number of days since since January 1st, 0000.', correct: false },
        ]
    },
    {
        question: 'What will the following code return: Boolean(11 > 9) ?',
        answers: [
            { text: 'undefined', correct: false },
            { text: 'NaN', correct: false },
            { text: 'false', correct: false },
            { text: 'true', correct: true },
        ]
    },
    {
        question: 'What is the result of: 3 < 4 < 5 === true ?',
        answers: [
            { text: 'true', correct: false },
            { text: 'undefined', correct: false },
            { text: 'false', correct: true },
            { text: 'type error', correct: false },
        ]
    }, {
        question: 'Which built-in method combines the text of two strings and returns a new string?',
        answers: [
            { text: 'append()', correct: false },
            { text: 'concat()', correct: true },
            { text: 'attach()', correct: false },
            { text: 'add()', correct: false },
        ]
    },
    {
        question: 'Which of the following is not a keyword in the JavaScript language?',
        answers: [
            { text: 'fill', correct: true },
            { text: 'function', correct: false },
            { text: 'for', correct: false },
            { text: 'while', correct: false },
        ]
    },
    {
        question: 'Choose the correct code to change the content of: <p id="vader">I am your father.</p> ',
        answers: [
            { text: "document.querySelector('vader').innerHTML='Don't kiss your sister.'", correct: false },
            { text: "document.getElement('vader').innerHTML='Don't kiss your sister.'", correct: false },
            { text: "document.getElementById('#vader').innerHTML='Don't kiss your sister.'", correct: false },
            { text: "document.querySelector('#vader').innerHTML='Don't kiss your sister.'", correct: true },
        ]
    },
    {
        question: 'Which of the following is not a valid JavaScript variable name?',
        answers: [
            { text: '2homecooks', correct: true },
            { text: 'twoHomeCooks', correct: false },
            { text: '_two_home_cooks', correct: false },
            { text: 'TwoHomeCooks', correct: false },
        ]
    },
]

//start game function hides start button & directions
function startGame() {
    startDiv.classList.add('hide');
    allQuestions = questions.sort(() => Math.random() - .5);
    currentQuestionsIndex = 0;
    questionContainerEl.classList.remove('hide');
    setNextQuestion();
    startTimer();
}


function getFormattedMinutes() {
    var secondsLeft = totalSeconds - secondsElapsed;
    var minutesLeft = Math.floor(secondsLeft / 60);
    var formattedMinutes;
    formattedMinutes = minutesLeft;
    return formattedMinutes;
}

function getFormattedSeconds() {
    var secondsLeft = (totalSeconds - secondsElapsed) % 60;
    var formattedSeconds;
    if (secondsLeft < 10) {
        formattedSeconds = "0" + secondsLeft;
    } else {
        formattedSeconds = secondsLeft;
    }
    return formattedSeconds;
}

//display time left
function renderTime() {
    minutesEl.innerHTML = getFormattedMinutes();
    secondsEl.innerHTML = getFormattedSeconds();

    if (secondsElapsed >= totalSeconds) {
        questionContainerEl.classList.add('hide');
        startButton.classList.remove('hide');
        startButton.innerText = 'Restart';
        minutesEl.innerHTML = "0";
        secondsEl.innerHTML = "00";
    }
}

//start timer
function startTimer() {
    let minutes = 1;
    clearInterval(interval);
    totalSeconds = minutes * 60;

    interval = setInterval(function() {
        secondsElapsed++;
        renderTime();
    }, 1000);
}

//set next question removes old answers and calls showQuestion at diff question index
function setNextQuestion() {
    while (answerButtonsEl.firstChild) {
        answerButtonsEl.removeChild(answerButtonsEl.firstChild);
    }
    showQuestion(allQuestions[currentQuestionsIndex]);
}


//shows question at question index
function showQuestion(questions) {
    questionEl.innerText = questions.question;
    questions.answers.forEach(answers => {
        const button = document.createElement('button');
        button.innerText = answers.text;
        button.classList.add('answer-button', 'button');
        if (answers.correct) {
            button.dataset.correct = answers.correct;
        }
        button.addEventListener('click', selectAnswer);
        answerButtonsEl.appendChild(button);
    })
}

/*function resetState() {
    //clearStatusClass(document.body)
    //nextButton.classList.add('hide')
    while (answerButtonsEl.firstChild) {
        answerButtonsEl.removeChild(answerButtonsEl.firstChild)
    }
}*/

function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct;
    if (correct) {
        score += 100;
        scoreEl.innerHTML = score;
    } else {
        secondsElapsed += 10;
    }
}

if (startButton) {
    startButton.addEventListener('click', startGame, false);
}

startButton.addEventListener('click', startGame);
answerButtonsEl.addEventListener('click', () => {
    currentQuestionsIndex++;
    console.log(currentQuestionsIndex);
    console.log(allQuestions.length);
    if (allQuestions.length < currentQuestionsIndex + 1 || secondsElapsed >= totalSeconds) {
        questionContainerEl.classList.add('hide');
        startButton.innerText = 'Restart';
        startButton.classList.remove('hide');
        minutesEl.innerHTML = "-";
        secondsEl.innerHTML = "--";
    } else {
        setNextQuestion();
    }
    console.log(score);

});