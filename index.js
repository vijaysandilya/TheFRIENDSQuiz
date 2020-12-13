var readlineSync = require('readline-sync');
 
// Wait for user's response.
var userName = readlineSync.question('May I have your name? ');
var score = 0;
console.log ("Welcome " + userName+ "! Let's play 'The F.R.I.E.N.D.S QUIZ'");

function play (cquestion,canswer)
{
  var userName = readlineSync.question(cquestion);

  if (userName.toUpperCase() === canswer.toUpperCase())
  {
    console.log ("Right :)");
    score = score+1;
    console.log ("Your current score is: "+score);
  }
  else
  {
    console.log ("Nooo :(");
  }
  console.log("---------------")
}

var questions = [
  {
    question: "Which character's full name gets revealed in the later part of the show? ",
    answer: "Chandler",
  },
  {
    question: "Where did the characters in Friends usually hang out?  ",
    answer: "Central Perk",
  },
  { 
    question: "What was Rachel's first job? ",
    answer: "Waitress",
  },
  {
    question: "Where did Ross plan to prorpose to Rachel initially? ",
    answer: "Museum",
  }
]

for(var i=0; i<questions.length; i++ )
{
  play(questions[i].question,questions[i].answer,);
}

console.log("Yaaayyyy!!!! Your final score is: "+score);

