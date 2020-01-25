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
        question: 'var x = [typeof x, typeof y][1];' + +'typeof typeof x;',
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
        question: 'What will the following code return: Boolean(7 > 9)',
        answers: [
            { text: 'undefined', correct: false },
            { text: 'NaN', correct: false },
            { text: 'false', correct: true },
            { text: 'true', correct: false },
        ]
    },
    {
        question: 'What is the result of: 3 < 4 < 5 === true',
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
            { text: 'funtion', correct: false },
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