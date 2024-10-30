// Questions data
const questions = [
    {
        question: "What is the output of '5' + 3?",
        options: ["53", "8", "NaN", "Error"],
        answer: "53"
    },
    {
        question: "Who is the javascript coach in Caasitech'?",
        options: ["Che", "Nathan", "Yannick", "Junoir"],
        answer: "Che"
    },
    {
        question: "What is the flutter coaches name?",
        options: ["Jordan", "Bismark", "ion know", "Polycarp"],
        answer: "Polycarp"
    },
    {
        question: "Which of the following is a correct variable declaration?",
        options: ["var 1name", "let name$", "const name", "name = var"],
        answer: "const name"
    },
    {
        question: "What is 10 == '10'?",
        options: ["true", "false", "undefined", "NaN"],
        answer: "true"
    },
    {
        question: "What will be the output of null + 1?",
        options: ["0", "1", "NaN", "null"],
        answer: "1"
    },
    {
        question: "What does NaN stand for?",
        options: ["Not a Number", "Not a Null", "Null and Not", "None of the Above"],
        answer: "Not a Number"
    },
    {
        question: "Which symbol is used for comments in JavaScript?",
        options: ["//", "#", "/*", "<!--"],
        answer: "//"
    },
    {
        question: "Which method is used to parse a string into an integer?",
        options: ["parseInt()", "parseFloat()", "Number()", "convert()"],
        answer: "parseInt()"
    },
    {
        question: "What is the result of '2' * 3?",
        options: ["6", "23", "NaN", "undefined"],
        answer: "6"
    }
];


let totalScore = 0;


const qlength = questions.length;
const quizContainer = document.getElementById('quiz-container');

// Load quiz questions
questions.forEach((q, index) => {
    const questionDiv = document.createElement('div');
    questionDiv.classList.add('question');
    questionDiv.innerText = `${index + 1}. ${q.question}`;

    const optionsDiv = document.createElement('div');
    optionsDiv.classList.add('options');

    q.options.forEach(option => {
        const button = document.createElement('button');
        button.innerText = option;
        button.classList.add('option-button');
        button.addEventListener('click', () => {
            const allButtons = optionsDiv.children;
            for (let btn of allButtons) {
                btn.classList.remove('selected');
            }
            button.classList.add('selected');
            selectAnswer(option, q.answer); 
        });

        optionsDiv.appendChild(button);
    });

    questionDiv.appendChild(optionsDiv);
    quizContainer.appendChild(questionDiv);
});

function selectAnswer(selectedAnswer, correctAnswer) {
    
    if (selectedAnswer === correctAnswer) {
        totalScore++; 
    }
}
const score = document.getElementById('score');
document.getElementById('submit-button').addEventListener('click', () => {
    score.innerText =`Your score is ${totalScore} out of ${qlength}`;
});