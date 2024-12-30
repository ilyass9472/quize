const question  = [
    { question: "En JavaScript, 'null' est un type d'objet.", answer: true },
    { question: "Les tableaux en JavaScript commencent à l'index 1.", answer: false },
    { question: "La méthode 'map()' peut être utilisée pour transformer un tableau.", answer: true },
    { question: "En JavaScript, '==' compare les valeurs avec conversion de type automatique.", answer: true },
    { question: "La méthode 'querySelector()' permet de sélectionner plusieurs éléments à la fois.", answer: false },
    { question: "Le mot-clé 'const' permet de déclarer une variable modifiable.", answer: false },
    { question: "La fonction 'setTimeout()' est utilisée pour exécuter du code après un délai donné.", answer: true },
    { question: "Le mot-clé 'this' fait toujours référence à l'objet global.", answer: false },
    { question: "Les promesses en JavaScript utilisent 'then()' et 'catch()' pour la gestion des résultats.", answer: true },
    { question: "Une fonction fléchée (arrow function) a sa propre valeur 'this'.", answer: false }
];


let currentquestionIndex = 0;
let score = 0;
let timeLeft = 15;
let timerInterval;

function startQuiz() {
    document.getElementById("question").style.display = "block";
    document.getElementById("score").style.display = "none";
    showquestion();
}


function showquestion(){
    clearInterval(timerInterval);
    timeLeft = 20;
    startTimer();

const currentQuestion  = question[currentquestionIndex];
document.getElementById("question").innerText = currentQuestion .question;
document.getElementById("true-btn").innerText = "vrai";
document.getElementById("false-btn").innerText = "faux";
}
document.getElementById("true-btn").onclick = () => selectAnswer(0);
document.getElementById("false-btn").onclick = () => selectAnswer(1);

function selectAnswer(index) {
    const correct = 
        (index === 0 && question[currentquestionIndex].answer === true) || 
        (index === 1 && question[currentquestionIndex].answer === false);
    
    if (correct) {
        score++;
    }
    currentquestionIndex++;

    if (currentquestionIndex < question.length) {
        showquestion();
    } else {
        showResult();
    }
}


function showResult() {
    clearInterval(timerInterval);
    document.getElementById("score").innerText = `Votre score final est : ${score} / ${question.length}`;
    document.getElementById("question").style.display = "none";
    document.getElementById("true-btn").style.display = "none";
    document.getElementById("false-btn").style.display = "none";
    
}


function startTimer() {
    document.getElementById("time").innerText = timeLeft;
    timerInterval = setInterval(() => {
        timeLeft--;
        document.getElementById("time").innerText = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            selectAnswer(-1);
        }
    }, 1000);
}

startQuiz();