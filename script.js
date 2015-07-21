console.log("script.js is linked");

var newBoard = [];

var player;
var computer; 
var isPlayersTurn; 
var theWinner;

$('#buttonX').click(function(event) {
	console.log("player is X");
	player = "X";
	computer = "O";
	isPlayersTurn = true;
	renderBoard(); 
});

$('#buttonO').click(function(event) {
	console.log("player is O");
	player = "O";
	computer = "X";	
	isPlayersTurn = false;
	renderBoard();
	computerMove(3000);
});

//fades pick-poison & renders the board (divs go in rows and columns)
var renderBoard = function renderBoard(){
	$("#pick-letter").fadeOut("slow", function (){
		$("#board").fadeIn("slow");
	});

	var index = 0;
	for (var row = 0; row < 3; row++){
		var $rowDiv = $('<div class="board-row">');
		
		for (var column = 0; column < 3; column++) {
			addSquare($rowDiv, index);
			index++;
		};
		
		$('#board').append($rowDiv);
	};
};

//creates divs, pushes divs to new array, registers div click scenarios
var addSquare = function addSquare($row, index){
	var $div = $('<div class="box">').attr("id", index);
	newBoard.push($div);
	$row.append($div);
	
	$div.on("click", function(event) {
		
		if (theWinner != null){
			console.log("idiot face, someone already won");
			return;
		}

		if ($div.text() != "" ){
			console.log("idiot face, someone already went there");
			showGoat();
			return;
		}

		if (isPlayersTurn === false){
			console.log("idiot face, it's not your turn");
			showGoat();
			return;
		}

		$div.text(player);
		isPlayersTurn = false;
		theWinner = checkForWinner();

		if (theWinner === null){
			console.log("keep playing");
			computerMove(1500);
		} else {
			console.log("the winner is " + theWinner);
			showWinner();
			return;
		}
	});	
};

//gets X, O, or "tie"
var getWinningLetter = function getWinningLetter(){
	var row1 = $('#0').text() + $('#1').text() + $('#2').text()
	var row2 = $('#3').text() + $('#4').text() + $('#5').text()
	var row3 = $('#6').text() + $('#7').text() + $('#8').text()

	var col1 = $('#0').text() + $('#3').text() + $('#6').text()
	var col2 = $('#1').text() + $('#4').text() + $('#7').text()
	var col3 = $('#2').text() + $('#5').text() + $('#8').text()

	var diagonal1 = $('#0').text() + $('#4').text() + $('#8').text()
	var diagonal2 = $('#2').text() + $('#4').text() + $('#6').text()

	var winningLetter = null;
	
	if ((row1 === "XXX") || (row2 === "XXX") || (row3 === "XXX")) {
		winningLetter = "X";
	} else if ((row1 === "OOO") || (row2 === "OOO") || (row3 === "OOO")) {
		winningLetter = "O";
	} else if ((col1 === "XXX") || (col2 === "XXX") || (col3 === "XXX")) {
		winningLetter = "X";
	} else if ((col1 === "OOO") || (col2 === "OOO") || (col3 === "OOO")) {
		winningLetter = "O";
	} else if ((diagonal1 === "XXX") || (diagonal2 === "XXX")) {
		winningLetter = "X";
	} else if ((diagonal1 === "OOO") || (diagonal2 === "OOO")) {
		winningLetter = "O";
	} else if ((row1.length === 3) && (row2.length === 3) && (row3.length === 3)) {
		winningLetter = "tie";	
	} 

	return winningLetter;
};

//evaluates if there is a winner and who it is
var checkForWinner = function checkForWinner(){
	var winningLetter = getWinningLetter();
	if (player === winningLetter){
		return "player";
	} else if (computer === winningLetter) {
		return "computer";
	} else if (winningLetter === "tie") { 
		return "tie";
	} 
	return null;
};

//sets computer delay time after computer has moved
var computerMove = function computerMove(delayTime){
	console.log("computer is thinking, because this is super tough");
	window.setTimeout(completeComputerMove, delayTime);
};

//moves computer to random div, resets to players turn or gives winner if there is one
var completeComputerMove = function completeComputerMove(){
	moveToRandomSquare(); 
	theWinner = checkForWinner();

	if (theWinner === null){
		isPlayersTurn = true;
	} else {
		console.log("the winner is " + theWinner);
		showWinner();
		return;
	}
};

//logic for finding a random div
var moveToRandomSquare = function moveToRandomSquare(){
	//creates an array of the empty divs
	var $emptySpacesArray = newBoard.filter(function($theDiv){
	   if ($theDiv.text() === ""){
	      return true;
		}
	});
	
	// finds a random div
	var getRandomInt = function getRandomInt(min, max) {
	  	return Math.floor(Math.random() * (max - min)) + min;
	}

	//places computers letter into a random div
	var indexToUse = getRandomInt(0,$emptySpacesArray.length);
	$emptySpacesArray[indexToUse].text(computer);
};

//displays and hides teh goat
var showGoat = function showGoat(){
	$('#goat').css({display: "block"});
	$("#goat-scream").get(0).play();
	  
	var hideGoat = function hideGoat(){
		$('#goat').css({display: "none"});
	};

	window.setTimeout(hideGoat, 1800);
};

//displays winner or loser graphics
var showWinner = function showWinner() {
	var completeShowWinner = function completeShowWinner(){
		if (theWinner === "player"){
			console.log("sweet victory pic");
			$('#win').css({display: "block"});

		} else if(theWinner === "computer"){
			console.log("poorly pic");
			$('#lose').css({display: "block"});

		} else {
			console.log("tie and show poorly pic")
			$('#lose').css({display: "block"});
		}
	};
	window.setTimeout(completeShowWinner, 1200);
	window.setTimeout(newGame, 3000);
};

var newGame = function newGame(){
	$('#win').fadeOut("slow");
	$('#lose').fadeOut("slow");

	$("#board").fadeOut("slow", function (){
		$("#pick-letter").fadeIn("slow", function (){
			location.reload();
		});
	});	

};







//moves computer to next available square
// var moveToNextOpenSquare = function moveToNextOpenSquare(){
// 	var $emptySpacesArray = newBoard.filter(function($theDiv){
// 	   if ($theDiv.text() === ""){
// 	      return true;
// 		}
// 	});
// 	$emptySpacesArray[0].text(computer);
// };
