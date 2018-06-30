var allQuestions = [{
  question: "Before Mt. Everest was discovered, whaich mountain was considered to be the highest mountain in the world?",
  choices: ["Mt. Kilimanjaro", "Kanchenjunga", "Mount Everest"],
  correctAnswer: "Mt. Kilimanjaro"
},
{
  question: "What rotates but still remains in the same place?",
  choices: ["Bottle (spin the bottle game)", "Clock", "Stairs"],
  correctAnswer: "Clock"
},
{
  question: "How can you lift an elephant with one hand?",
  choices: ["Truck", "Use both hands!", "Use a lever", "There is no such thing"],
  correctAnswer: "Truck"
},
{
  question: "What is Rupert the bear's middle name?",
  choices: ["Bear", "He doesn't have one!", "The", "Rupert"],
  correctAnswer: "The"
},

{
  question: " What can you never eat for breakfast? ",
  choices: ["Dinner", "Something sugary", "Lunch", "Supper"],
  correctAnswer: "Dinner"
},

{
  question: "If there are three apples and you took two away, how many do you have?",
  choices: ["One", "Two", "None"],
  correctAnswer: "One"
},

{
  question: "Spell 'Silk' out loud, 3 times in a row. What do cows drink?",
  choices: ["Milk", "Water", "Juice", "Cows can't drink"],
  correctAnswer: "Milk"
},

{
  question: "Which is heavier, 100 pounds of rocks or 100 pounds of gold? ",
  choices: ["100 pounds of rocks", "100 pounds of rocks", "They weigh the same"],
  correctAnswer: "They weigh the same"
}
];
var currentquestion=0;
var questionNumber=1;
var lastQuestion=allQuestions.length-1;
var correctanswer=0;

function renderQuestion(){
  var question='';
  var choice='';
  var optionvalue='';
    question=document.querySelector('#ques1');
    question.innerHTML= questionNumber + "." + allQuestions[currentquestion].question;
      var options=allQuestions[currentquestion].choices;
      //console.log(options.length);
      for(let j=0;j<options.length;j++)
      {
        choice=choice+'<input type="radio" name="option" value="'+j+'" id="option'+j+'"><label id="value'+j+'">'+ options[j]+'</label></div><br/>';
      }
      document.querySelector('.options-container').innerHTML=choice;
      optionvalue=document.querySelector('.options-container').addEventListener('click',optionText);
  }

function optionText(e){
  var storeValue=e.target.nextSibling.innerHTML;
  var count=0;
  if(document.getElementById("option0").checked==true){
    console.log(storeValue);
    count++;
  }
  else if(document.getElementById("option1").checked==true){
    console.log(storeValue);
    count++;
  }
  else if(document.getElementById("option2").checked==true){
    console.log(storeValue)
    count++;
  }
  if(storeValue==allQuestions[currentquestion].correctAnswer){
    console.log("corrext");
    correctanswer++;
  }
}
renderQuestion();

var nextButton=document.getElementById('next-button1').addEventListener('click',renderNextQuestion)

function renderNextQuestion(e){
  //console.log(e.target);
  console.log("Before fub   "+currentquestion);
  if(currentquestion===lastQuestion-1){
    //alert("End of the Question");
    displayAnswer();
  }
  questionNumber++;
  currentquestion++;
  renderQuestion();
}
function displayAnswer(){
  var submitButton=document.createElement('button');
  submitButton.id='final-submit';
  submitButton.innerHTML="Submit Test";
  var button=document.getElementById('next-button-question');
  button.appendChild(submitButton,button);
  document.getElementById('final-submit').addEventListener('click',submitcall);
}
function submitcall(){
  console.log("submit clcicked");
  alert("Total Number Of Question"+" "+questionNumber+"\n"+"Total Number of Correct Answer "+correctanswer);

}