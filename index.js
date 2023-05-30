var readlineSync = require('readline-sync');
var userName = readlineSync.question("What is your name?");
console.log("Welcome " + userName + " to DO YOU KNOW Sagar?");

var score = 0; 

// Function Quiz
function Quiz(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toLowerCase() === answer.toLowerCase()) {
    console.log("You are right!")
    score = score + 1;
    console.log("Your score is:" + score)
    console.log("---------");
  }
  else {
    console.log("You are wrong!")
    score = score - 1;
    console.log("Your score is:" + score)
    console.log("---------");
  }
}

// array of objects

var questions = [{question: "Where do i live?",
   answer: "Lower Manhattan"},
{question: "What is my age?",
 answer: "25"},              
{
  question: "What is my favourite sport?",
  answer: "Cricket"},
{
  question: "Who is my favourite cricketer?",
  answer: "Rahul Dravid"},                
{
  question: "What is my favourite book?",
  answer: "Shyamchi Aai"},
{
  question: "What is my favourite food?",
    answer: "Puran poli"},
{
  question: "What is my favourite movie?",
    answer: "3 Idiots"}
];

//Loop
for (var i=0; i< questions.length; i++){
  var currentQuestion = questions[i];
  Quiz(currentQuestion.question, currentQuestion.answer)
}

console.log("Your Total Score is" + score + "\n");

