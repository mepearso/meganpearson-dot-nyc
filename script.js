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

var playerIsX = $buttonX.click(function(event) {
	console.log("player is X");
	player = playerIsX; 
});

var playerIsO = $buttonO.click(function(event) {
	console.log("player is O");
	player = playerIsO;	
});

// Make page reload with game

// Decide who goes first

// if(player === playerIsX){
// 	console.log("player is X and is going first");
// 	// game.render();
// 	// make move;
// } else if (player === playerIsO) {
// 	console.log("player is O and is going second");
// };

//Board is created and divs are pushed to a new array
for (var index = 0; index < board.length; index++){
	var $div = $('<div class="box">').attr("id", index);
	newBoard.push($div);
	$('.container').append($div);	
}

// Game Board is Shown
var Game = function Game(){
	this.board = board;
	
	this.render = function (){

//If player = playerIsX text should be X, else it should be 0
	$("#0").click(function(event) {
		console.log("clicked 0");
		if (player === playerIsX){
			$("#0").text("X");
		} else {
			$("#0").text("O");
		};		
	});
	$("#1").click(function(event) {
		console.log("clicked 1");
		$("#1").text("X");
	});
	$("#2").click(function(event) {
		console.log("clicked 2");
		$("#2").text("X");
	});
	$("#3").click(function(event) {
		console.log("clicked 3");
		$("#3").text("X");
	});
	$("#4").click(function(event) {
		console.log("clicked 4");
		$("#4").text("X");
	});
	$("#5").click(function(event) {
		console.log("clicked 5");
		$("#5").text("X");
	});
	$("#6").click(function(event) {
		console.log("clicked 6");
		$("#6").text("X");
	});
	$("#7").click(function(event) {
		console.log("clicked 7");
		$("#7").text("X");
	});
	$("#8").click(function(event) {
		console.log("clicked 8");
		$("#8").text("X");
	});

	};
};

// After player makes a move, the computer should make a move (and vice versa)
// if player has clicked, the opposite letter should be placed in a random place

var $div0 = $("#0").text();
var $div1 = $("#1");
var $div2 = $("#2");
var $div3 = $("#3");
var $div4 = $("#4");
var $div5 = $("#5");
var $div6 = $("#6");
var $div7 = $("#7");
var $div8 = $("#8");

// if ($div0 === $div1 === $div2){
// 	console.log("row 1 win");	
// };

console.log( $("#0").val() );







var game = new Game();
game.render();