

const questionNumber = document.querySelector(".question-number");
const questionText = document.querySelector(".question-text");
const optionContainer = document.querySelector("option-container");

let questionCounter = 0;
let currentQuestion;
let availableQuestions = [];

// push the questions into availableQuestions Array 
function setAvailableQuestions(){
	const totalQuestion = quiz.length;
	for(let i=0; i<totalQuestion; i++){
		availableQuestions.push(quiz[i])
	}
}

// set question number, question, and options
function getNewQuestion(){
	//set question number
	questionNumber.innerHTML = "Question " + (questionCounter + 1) + " of " + quiz.length;
}


window.onload = function(){
	// first setting all questions in availableQuestions Array
	setAvailableQuestions();
	// second call getNew Question function 
	getNewQuestion();

}