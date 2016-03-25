console.log("script.js is linked")

var lunchSwappers = ["megan", "phil", "ethan"];

function shuffle(array) {
  var currentIndex = array.length;

  while (0 !== currentIndex) {
    var randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    var temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

function makeCopy(array){
	var arrayCopy = [];
	for(var index = 0; index<array.length; index++){
		var item = array[index];
		arrayCopy.push(item)
	}
	return arrayCopy;
}

makeCopy(lunchSwappers);


function tryGetPairs(array){
	var copy = makeCopy(array);
	var shuffled = shuffle(copy);
	var pairs = assignPairs(array, shuffled);
	var checkedPairs = checkPairs(pairs);
	if(checkedPairs == true){
		return pairs;
	} else {
		return null;
	}
}

function assignPairs(left, right){
	var pairs = [];
	for(var index = 0; index<left.length; index++){
		var leftItem = left[index];
		var rightItem = right[index];

		pairs.push({to: leftItem, from: rightItem})
	}
	return pairs; 
};

function checkPairs(pairs){
	for (var index = 0; index<pairs.length; index++){
		var item = pairs[index];
		if (item.to == item.from){
			return false;
		}
	};
	return true;
};

function getPairs(array){
	var test = tryGetPairs(array);
	while(test === null){
		test = tryGetPairs(array);
	}
	return test;
};


$( "#nameInput" ).keypress(function(key) {
	  if(key.which === 13){
	  	var name = $("#nameInput").val();
	  	$("#nameInput").val("");
	  	console.log(name);
	  	var li = $("<li>")
	  	li.text(name);
	  	$("#list").append(li);
	  }
});

$( "#swap" ).click(function() {
  var items = $("li");
  var lunchSwappers = [];

  for (var index = 0; index < items.length; index++){
  	var item = items[index];
  	lunchSwappers.push($(item).text());
  }
  var pairs = getPairs(lunchSwappers);
  
  for (var index = 0; index < pairs.length; index++){
  	var pair = pairs[index];
  	var li = $("<li>")
	li.text(pair.from + " is giving lunch to "+ pair.to);
	$("#swapped").append(li);

  	lunchSwappers.push($(item).text());
  }




  console.log(pairs);



});













