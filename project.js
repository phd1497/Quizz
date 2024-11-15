
const quizData = [
    {
        question: "What is 2 + 2?",
        options: ["3", "4", "5", "6"],
        answer: "4"
    },
    {
        question: "What is the result of '5' + 5?",
        options: ["10", "55", "'55'", "NaN"],
        answer: "'55'"
    },
    {
        question: "What does typeof 42 return?",
        options: ["'string'", "'number'", "'object'", "'boolean'"],
        answer: "'number'"
    }
];

let currentQuestionIndex = 0;
let score = 0;


const questionEl = document.getElementById('question');
const optionsEl = document.querySelectorAll('.option-btn');

FirstPage();
function FirstPage(){
    document.getElementById('quizz').style.display = 'none';
    document.getElementById('opt').style.display = 'block';
    document.getElementById('qts').style.display = 'none';
}

function Addfn(){
    document.getElementById('opt').style.display = 'none';
    document.getElementById('quizz').style.display = 'none';
    document.getElementById('qts').style.display = 'block';
    document.getElementById('alert_info').style.display = 'none';
}
function Startquizz(){
    document.getElementById('quizz').style.display = 'block';
    document.getElementById('opt').style.display = 'none';
    document.getElementById('qts').style.display = 'none';
    document.getElementById('options').style.display = 'none';
    document.getElementById('question').textContent = 'Are you ready???';
    document.getElementById('restartButton').style.display = 'none';
    document.getElementById('congratulation').style.display = 'none';
    
}

function loadQuestion() {
    document.getElementById('restartButton').style.display = 'none';
    const currentQuestion = quizData[currentQuestionIndex];
    questionEl.textContent = currentQuestion.question;

    optionsEl.forEach((button, index) => {
        //index = Math.floor(Math.random() * quizData.length);
        button.textContent = currentQuestion.options[index];
        //currentQuestion.options.splice(index, 4);
        button.onclick = () => validateAnswer(button.textContent);
    });
}


function validateAnswer(selectedOption) {
    const currentQuestion = quizData[currentQuestionIndex];
    if (selectedOption === currentQuestion.answer) {
        score++;
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
        loadQuestion();
    } else {
        displayScore();
    }
}

function displayScore() {
    document.getElementById('question').textContent = 'Quiz Completed!';
    document.getElementById('options').style.display = 'none';
    document.getElementById('startButton').style.display = 'none';
    document.getElementById('restartButton').style.display = 'inline-block';
    debugger
    
    document.getElementById('score').textContent = `Your Score: ${score} / ${quizData.length}`;
    document.getElementById('congratulation').style.display = 'block';
    document.getElementById('congratulation').style.fontSize = '30px';
    document.getElementById('congratulation').style.color = 'orange';
    if(score === quizData.length){
        document.getElementById('congratulation').textContent = "You are awesome!";
    }else{
        document.getElementById('congratulation').textContent = "Try harder next time.";
    }
}


document.getElementById('restartButton').addEventListener('click', () => {
    currentQuestionIndex = 0;
    score = 0;
    document.getElementById('score').textContent = ""; 
    document.getElementById('startButton').style.display = 'inline-block';
    FirstPage();
});

function Startfn(){
    document.getElementById('startButton').style.display = 'none';
    document.getElementById('options').style.display = 'block';
    loadQuestion();
}

function Submit_Addfn(){
    debugger;
    const qt = document.getElementById('yourquestion').value;
    const w1 = document.getElementById('wronganswer1').value;
    const w2 = document.getElementById('wronganswer2').value;
    const w3 = document.getElementById('wronganswer3').value;
    const r1 = document.getElementById('rightanswer').value;
    
    if (qt.length == 0 || w1.length == 0 || w2.length == 0 || w3.length == 0 || r1.length == 0){ 
        alert("Please fill full information!!!");  	
        return false; 
    }

    const listquizz = {
        question: qt,
        options: [w1, w2, w3, r1],
        answer: r1

    }

    quizData.push(listquizz);
    document.getElementById('alert_info').style.display = 'block';
    

    return;
}
