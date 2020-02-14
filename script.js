$(document).ready(function(){
	var yellow = ["The wise man is one who, knows, what he does not know. Be the wise man.", "Your future is filled with great food!", "The next time you see a dog, you must ask if you can pet it.", "Someone wonderful will enter your life soon!"];
	var purple = ["Let it be still, and it will gradually become clear.", 'Pay attention and your questions will be answered.', 'Look to the stars. If they do not provide answers, look within.'];
	var neither = ["Be wary! There is grave danger in breaking certain rules!"];
	var noFortune = ["No fortune for you today!"];
	
	$(".yes").click(function(){
		var userChoice = prompt("Pick a color: yellow or purple");
		var formattedUserChoice = userChoice.toLowerCase();
		$(".fortune").show();
		$(".button-container").hide();
		$(".try-again").show();
		$(".no-fortune").hide();
		$(".cat-in-ball").hide();
		if (formattedUserChoice === "yellow") {
			$(".fortune-text").text(_.sample(yellow));
		} else if (formattedUserChoice === "purple") {
			$(".fortune-text").text(_.sample(purple));
		} else {
			$(".fortune-text").text(_.sample(neither));
		}
	});

	$(".no").click(function(){
		$(".no-fortune").text(_.sample(noFortune));
		$(".no-fortune").show();
	});

	$(".try-again-button").click(function(){
		$(".cat-in-ball").show();
		$(".fortune").hide();
		$(".button-container").show();
		$(".try-again").hide();
		$(".no-fortune").hide();
	});
});