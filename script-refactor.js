console.log("script.js is linked");

var board = ['one','two','three',
			'four','five','six',
			'seven','eight','nine'
];

var newBoard = [];

// Stage One - Pick Your Letter
var $buttonX = $('#buttonX');
var $buttonO = $('#buttonO');
var player = player;





// var newBoard = function newBoard(){
// 	for (var index = 0; index < board.length; index++){
// 		var $div = $('<div class="box">').attr("id", index);
// 		newBoard.push($div);
// 		$('.container').append($div);	
// 	}
// };
//  newBoard();


var playerIs = function (){
	var clickX = $buttonX.click(function(event) {});
	var clickO = $buttonO.click(function(event) {});
	var player; 

	if (clickX){
		player = "playersIsX";
	} else if (clickO){
		player = "playerIsO";
	}
	console.log(player);
};

playerIs(); 

var pickSquare = function pickSquare(){
	$("#0").click(function(event) {
		if (player === playerIsX){
			$("#0").text("X");
		} else {
			$("#0").text("O");
		};		
	});
	$("#1").click(function(event) {
		$("#1").text("X");
	});
	$("#2").click(function(event) {
		$("#2").text("X");
	});
	$("#3").click(function(event) {
		$("#3").text("X");
	});
	$("#4").click(function(event) {
		$("#4").text("X");
	});
	$("#5").click(function(event) {
		$("#5").text("X");
	});
	$("#6").click(function(event) {
		$("#6").text("X");
	});
	$("#7").click(function(event) {
		$("#7").text("X");
	});
	$("#8").click(function(event) {
		$("#8").text("X");
	});
};



//If player = playerIsX text should be X, else it should be 0
	

// 	};
// };

// After player makes a move, the computer should make a move (and vice versa)
// if player has clicked, the opposite letter should be placed in a random place

// var $div0 = $("#0").text();
// var $div1 = $("#1");
// var $div2 = $("#2");
// var $div3 = $("#3");
// var $div4 = $("#4");
// var $div5 = $("#5");
// var $div6 = $("#6");
// var $div7 = $("#7");
// var $div8 = $("#8");

// // if ($div0 === $div1 === $div2){
// // 	console.log("row 1 win");	
// // };

// console.log($'div0');







// var game = new Game();
// game.render();


var winningLetter;
		if ((row1 === "XXX") || (row2 === "XXX") || (row3 === "XXX")) {
			console.log("X wins by row!");
			winningLetter = "X";
		} else if ((row1 === "OOO") || (row2 === "OOO") || (row3 === "OOO")) {
			console.log("O wins by row");
			winningLetter = "O"
		}
		//wins by column
		if ((col1 === "XXX") || (col2 === "XXX") || (col3 === "XXX")) {
			console.log("X wins by col!");
			winningLetter = "X";
		} else if ((col1 === "OOO") || (col2 === "OOO") || (col3 === "OOO")) {
			console.log("O wins by col");
			winningLetter = "O"
		}
		//wins by diagonal
		if ((diagonal1 === "XXX") || (diagonal2 === "XXX")) {
			console.log("X wins by diagonal!");
			winningLetter = "X"
		} else if ((diagonal1 === "OOO") || (diagonal2 === "OOO")) {
			console.log("O wins by diagonal");
			winningLetter = "O"
		}
		console.log(winningLetter);