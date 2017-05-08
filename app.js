/*=============================================>>>>>
= GLOBAL VARIABLES =
===============================================>>>>>*/

var qAndA = [
  {
    question: 'What super hero team is Captain America apart of?',
    answers: ['The Avengers', 'The Justice League', 'The Power Puff Girls']
    correctanswer: 0
  },
  {
    question: 'Who is Batman\'s main enemy?',
    answers: ['The Joker', 'The Penguin', 'Dr. Freeze'],
    correctanswer: 0
  },
  {
    question: 'Bruce Banner is the human identity for which super hero?',
    answers: ['Spiderman', 'Ironman', 'The Hulk'],
    correctanswer: 2
  },
  {
    question: 'Who powers Ironman\'s suit?',
    answers: ['Jarvis', 'Skynet', 'Siri'],
    correctanswer: 0
  },
  {
    question: 'What is Superman\'s greatest weakness?',
    answers: ['Love','Kryptonite','Louis Lane']
    correctanswer: 1
  }
];
var score = 0;
var questNum = 0;
var scoreKeep = 'Score '+score+' out of 10 possible';
var questKeep = 'Question '+questNum+' out of 5';

/*= End of GLOBAL VARIABLES =*/
/*=============================================<<<<<*/


/*=============================================>>>>>
= Handling scores =
===============================================>>>>>*/

function isAnswerRight(questNum, ans) {
  if(ans === qAndA[questNum].correctanswer){
    score++;
  }
}

function resetScore(){
  score = 0;
}

/*= End of Handling scores =*/
/*=============================================<<<<<*/

/*=============================================>>>>>
= Rendering Output =
===============================================>>>>>*/



/*= End of Rendering Output =*/
/*=============================================<<<<<*/

/*=============================================>>>>>
= EVENT LISTENERS =
===============================================>>>>>*/



/*= End of EVENT LISTENERS =*/
/*=============================================<<<<<*/
