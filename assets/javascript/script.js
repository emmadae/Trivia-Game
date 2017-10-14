// Document Ready
$(document).ready(function() {


	// WET AF code that is allowing user to cycle through all slides
	// START SLIDE SHOW
	$("#start-btn").click(function(){
		$(".start-slides").hide();
		$("#question-1").fadeIn(800);
	});

	// QUESTION 1 ANSWER 1
	$("#submit-1").click(function(){
		$("#question-1").hide();
		$("#answer-1").fadeIn(800);
	});

	$("#next-1").click(function(){
		$("#answer-1").hide();
		$("#question-2").fadeIn(800);
	});

	// QUESTION 2 ANSWER 2
	$("#submit-2").click(function(){
		$("#question-2").hide();
		$("#answer-2").fadeIn(800);
	});

	$("#next-2").click(function(){
		$("#answer-2").hide();
		$("#question-3").fadeIn(800);
	});

	// QUESTION 3 ANSWER 3
	$("#submit-3").click(function(){
		$("#question-3").hide();
		$("#answer-3").fadeIn(800);
	});

	$("#next-3").click(function(){
		$("#answer-3").hide();
		$("#question-4").fadeIn(800);
	});

	// QUESTION 4 ANSWER 4
	$("#submit-4").click(function(){
		$("#question-4").hide();
		$("#answer-4").fadeIn(800);
	});

	$("#next-4").click(function(){
		$("#answer-4").hide();
		$("#question-5").fadeIn(800);
	});

	// QUESTION 5 ANSWER 5
	$("#submit-5").click(function(){
		$("#question-5").hide();
		$("#answer-5").fadeIn(800);
	});

	$("#next-5").click(function(){
		$("#answer-5").hide();
		$("#question-6").fadeIn(800);
	});

	// QUESTION 6 ANSWER 6
	$("#submit-6").click(function(){
		$("#question-6").hide();
		$("#answer-6").fadeIn(800);
	});

	$("#next-6").click(function(){
		$("#answer-6").hide();
		$("#question-7").fadeIn(800);
	});

	// QUESTION 7 ANSWER 7
	$("#submit-7").click(function(){
		$("#question-7").hide();
		$("#answer-7").fadeIn(800);
	});

	$("#next-7").click(function(){
		$("#answer-7").hide();
		$("#question-8").fadeIn(800);
	});

	// QUESTION 8 ANSWER 8
	$("#submit-8").click(function(){
		$("#question-8").hide();
		$("#answer-8").fadeIn(800);
	});

	$("#next-8").click(function(){
		$("#answer-8").hide();
		$("#question-9").fadeIn(800);
	});

	// QUESTION 9 ANSWER 9
	$("#submit-9").click(function(){
		$("#question-9").hide();
		$("#answer-9").fadeIn(800);
	});

	$("#next-9").click(function(){
		$("#answer-9").hide();
		$("#question-10").fadeIn(800);
	});

	// QUESTION 10 ANSWER 10
	$("#submit-10").click(function(){
		$("#question-10").hide();
		$("#answer-10").fadeIn(800);
	});

	$("#next-10").click(function(){
		$("#answer-10").hide();
		$(".final-slide").fadeIn(800);
	});





	// Working Code For Checking & Loging Answers
	var correct = 0;
	var incorrect = 0;


	$(".submit-btn").click(function(){
		// IF the correct answer is selected - print correct
		if ($(".correct").is(":checked")) {
			$(".users-answer").empty().html("<p class=\"true\"> CORRECT! </p>");
			console.log("true");
			correct ++ ;
		// ELSE IF the incorrect answer is selected - print incorrect
		} else if ($(".incorrect").is(":checked")){
			$(".users-answer").empty().html("<p class=\"false\"> INCORRECT </p>");
			console.log("false");
			incorrect ++ ; 
		} 

	// check total correct/incorrect answers and log in score
	$("#correct").html(correct);
	$("#incorrect").html(incorrect);

	//clears radio button clicked and begin function to check again
	$('input[type="radio"]').prop('checked', false);

	});







});