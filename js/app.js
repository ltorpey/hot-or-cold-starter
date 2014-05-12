
$(document).ready(function(){
	
newGame();

	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);
  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

  	/*--- Creates new game ---*/
  	$(".new").click(newGame);

  	/*---  Append user guess to ul  ---*/
  	$("#guessButton").on("click", userGuess); 
 

});

/*-------------------------------- 
			Functions 
 -------------------------------*/
	function randomNum() {
		Math.floor((Math.random()*100)+1);
	}

	function userGuess(){
		event.preventDefault();
		num = +$("#userGuess").val();
		if(isNaN(num) || $.trim(num) =='' || num > 100 || num < 1){
			$("#feedback").text("Enter a number between 1-100");
			$("form")[0].reset();
		} else {
			$("#feedback").text("Make a Guess!");
		 	$("#guessList").append("<li>" + num + "</li>")
			guessCount++;
			$("#count").text(guessCount);
			$("form")[0].reset();
			evaluateGuess(num);
		}
	}

	function evaluateGuess(){
		event.preventDefault();
		if(Math.abs(answer - num) == 0){
			$("#feedback").text("CORRECT!");
			document.getElementById("feedback").style.backgroundColor ="rgb(0, 153,0)";	
		} 
		else if(Math.abs(answer - num) < 5){
			$("#feedback").text("Super Hot!");
			document.getElementById("feedback").style.backgroundColor ="rgb(255,0,0)";
		}
		else if(Math.abs(answer - num) < 15){
			$("#feedback").text("Hot!");
			document.getElementById("feedback").style.backgroundColor ="rgb(255,51,51)";
		}
		else if(Math.abs(answer - num) < 30){
			$("#feedback").text("Warm!");
			document.getElementById("feedback").style.backgroundColor ="rgb(255,153,153)";
		} 
		else if(Math.abs(answer - num) < 50){
			$("#feedback").text("Cold");
			document.getElementById("feedback").style.backgroundColor ="rgb(153,204,255)";
		}
		else if(Math.abs(answer - num) < 70){
			$("#feedback").text("Colder");
			document.getElementById("feedback").style.backgroundColor ="rgb(51,153,255)";
		} 
		else if(Math.abs(answer - num) <100){
			$("#feedback").text("Sooo Cold!");
			document.getElementById("feedback").style.backgroundColor ="rgb(0,76,153)";
		}

	}

	function resetNum(){
		$("#guessList").find("li").remove();
	}

	function newGame(){
		event.preventDefault();
		guessCount = 0;
		$("#count").text("0");
		$("form")[0].reset();
		$("#feedback").text("Make a Guess!");
		document.getElementById("feedback").style.backgroundColor ="#cc324b"
		resetNum();
		randomNum();
		answer = Math.floor((Math.random()*100)+1);
		console.log("new game");
		console.log(answer);
	}








