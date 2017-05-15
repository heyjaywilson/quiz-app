/*=============================================>>>>>
= VARIABLES IN USE =
===============================================>>>>>*/

const QANDA = [
  {
    QUEST: 'What super hero team is Captain America apart of?',
    ANS: [
      'The Avengers', 'The Justice League', 'The Power Puff Girls'
    ],
    CORRECTANS: 0
  }, {
    QUEST: 'Who is Batman\'s main enemy?',
    ANS: [
      'The Joker', 'The Penguin', 'Dr. Freeze'
    ],
    CORRECTANS: 0
  }, {
    QUEST: 'Bruce Banner is the human identity for which super hero?',
    ANS: [
      'Spiderman', 'Ironman', 'The Hulk'
    ],
    CORRECTANS: 2
  }, {
    QUEST: 'Who powers Ironman\'s suit?',
    ANS: [
      'Jarvis', 'Skynet', 'Siri'
    ],
    CORRECTANS: 0
  }, {
    QUEST: 'What is Superman\'s greatest weakness?',
    ANS: [
      'Love', 'Kryptonite', 'Louis Lane'
    ],
    CORRECTANS: 1
  }
];
var currentScore = 0;
var userAnswer = 0;
var questionNum = 0;

/*= End of VARIABLES IN USE =*/
/*=============================================<<<<<*/
/*=============================================>>>>>
= SHOW AND HIDE ELEMENTS =
===============================================>>>>>*/

function show(elm) {
  elm.removeClass('hidden');
}
function hide(elm) {
  elm.addClass('hidden');
}

/*= End of SHOW AND HIDE QUESTIONS =*/
/*=============================================<<<<<*/
/*=============================================>>>>>
= HELPER FUNCTIONS =
===============================================>>>>>*/

function giveQuestion(qIndex) {
  return QANDA[qIndex].QUEST;
}
function giveAnsChoice(qIndex, aIndex) {
  return QANDA[qIndex].ANS[aIndex];
}
function getCAns(qIndex) {
  return QANDA[qIndex].CORRECTANS;
}
function scoreIncrease(cScore) {
  return cScore + 1;
}
function checkAns(input, cAns, elm) {
  if (input == cAns) {
    currentScore = scoreIncrease(currentScore);
    elm.html('You got the question correct and increased your score by 1!');
  } else {
    elm.html('You got the question wrong. I\'m sorry.');
  }
}

function resetGame(){
	currentScore = 0;
	userAnswer = 0;
	questionNum = 0;
}
function checkProgress(num){
	if(num<4){
		nextQuestion($('.questions'));
	}
	else{
		finalQuestion($('.questions'));
	}
}
/*= End of HELPER FUNCTIONS =*/
/*=============================================<<<<<*/


/*=============================================>>>>>
= RENDER =
===============================================>>>>>*/
function nextQuestion(elm){
	elm.append('<div class="js-next"><button class="next">Next question</button></div>');
}
function finalQuestion(elm){
	output = '<p>Congrats on finishing the quiz. You\'re score is '+currentScore+' out of 5. If you\'d like to play again, click on the button below</p>';
	elm.html(output);
	elm.append('<div id = "startover"><button class="startover">Restart</button></div>');
}
function renderScore() {
  $('.score').html('Score: ' + currentScore + ' out of 5');
}
function renderProgress() {
  $('.progress').html('Question ' + (questionNum + 1) + ' out of 5');
}
function renderQuestion(index, elm) {
	////console.log(index);
  elm.html(giveQuestion(index));
}
function renderAnswers(index, elm) {
  var answer = '<form>';
  for (var i = 0; i < 3; i++) {
    answer += '<input type ="radio" name="answer" value= "' + i + '">' + giveAnsChoice(index, i) + '</input><br>';
  }
  answer += '<div id="check"><button type="submit">Did I get the answer right?</button></form></div>';
  elm.append(answer);
}
function renderAll(index, elm) {
  renderScore();
  renderProgress();
  renderQuestion(index, elm);
  renderAnswers(index, elm);
  $('#check').on('click', function() {
    event.preventDefault();
    userAnswer = $('input[name="answer"]:checked').val();
    checkAns(userAnswer, getCAns(index), elm);
		checkProgress(index);
    renderScore();
  });
	return index + 1;
}

/*= End of RENDER =*/
/*=============================================<<<<<*/

$('.start').on('click', function() {
  event.preventDefault();
  hide($('.start'));
  show($('.box'));
  questionNum = renderAll(questionNum, $('.questions'));
	////console.log(questionNum);
});
$('.questions').on('click', '.next', function(){
	event.preventDefault();
	questionNum = renderAll(questionNum, $('.questions'));
	////console.log(questionNum);
});
$('.questions').on('click', '.startover', function(){
	event.preventDefault();
	resetGame();
	////console.log(questionNum);
	questionNum = renderAll(questionNum, $('.questions'));
	////console.log(questionNum);
});
