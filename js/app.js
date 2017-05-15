/*=============================================>>>>>
= VARIABLES IN USE =
===============================================>>>>>*/

const QANDA = [
	{QUEST: 'What super hero team is Captain America apart of?',
	 ANS: ['The Avengers', 'The Justice League', 'The Power Puff Girls'],
	 CORRECTANS: 0},
	{QUEST: 'Who is Batman\'s main enemy?',
	 ANS: ['The Joker', 'The Penguin', 'Dr. Freeze'],
	 CORRECTANS: 0},
	{QUEST: 'Bruce Banner is the human identity for which super hero?',
	 ANS: ['Spiderman', 'Ironman', 'The Hulk'],
	 CORRECTANS: 2},
	{QUEST: 'Who powers Ironman\'s suit?',
	 ANS: ['Jarvis', 'Skynet', 'Siri'],
	 CORRECTANS: 0},
	{QUEST: 'What is Superman\'s greatest weakness?',
	 ANS: ['Love', 'Kryptonite', 'Louis Lane'],
	 CORRECTANS: 1}
];
var currentScore = 0;
var userAnswer = 0;
var questionNum = 0;

/*= End of VARIABLES IN USE =*/
/*=============================================<<<<<*/
/*=============================================>>>>>
= SHOW AND HIDE ELEMENTS =
===============================================>>>>>*/

function show(elm){
  elm.removeClass('hidden');
}
function hide(elm){
  elm.addClass('hidden');
}

/*= End of SHOW AND HIDE QUESTIONS =*/
/*=============================================<<<<<*/

/*=============================================>>>>>
= HELPER FUNCTIONS =
===============================================>>>>>*/

function giveQuestion(qIndex){
	return QANDA[qIndex].QUEST;
}
function giveAnsChoice(qIndex, aIndex){
	return QANDA[qIndex].ANS[aIndex];
}
function getCAns(qIndex){
	return QANDA[qIndex].CORRECTANS;
}
function scoreIncrease(cScore){
	return cScore + 1;
}
function checkAns(input, cAns, elm){
	if(input == cAns){
		currentScore = scoreIncrease(currentScore);
		elm.html('You got the question correct and increased your score by 1!');
	}
	else{
		elm.html('You got the question wrong. I\'m sorry.');
	}
}

/*= End of HELPER FUNCTIONS =*/
/*=============================================<<<<<*/
/*=============================================>>>>>
= RENDER =
===============================================>>>>>*/

function renderQuestion(index, elm){
	elm.html(giveQuestion(index));
}
function renderAnswers(index, elm){
	var answer = '<form>';
	for (var i = 0; i<3; i++){
		answer += '<input type ="radio" name="answer" value= "'+i+'">'+giveAnsChoice(index, i)+'</input><br>';
	}
	answer += '<button type="submit">Did I get the answer right?</button>';
	answer += '</form>';
	elm.append(answer);
}
function renderAll(index, elm){
  renderQuestion(index, elm);
  renderAnswers(index, elm);
  $('button').on('click', function(){
    event.preventDefault();
    userAnswer = $('input[name="answer"]:checked').val();
    checkAns(userAnswer, getCAns(index), elm);
    return index+1;
  });
}

/*= End of RENDER =*/
/*=============================================<<<<<*/

$('.start').on('click', function() {
  event.preventDefault();
  hide($('.start'));
  show($('.js-box'));
  questionNum = renderAll(questionNum, $('.questions'));
});
