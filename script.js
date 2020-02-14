$(document).ready(function(){
	var fortunes = ["The wise man is one who, knows, what he does not know. Be the wise man.", "Your future is filled with great food!", "The next time you see a dog, you must ask if you can pet it.", "Someone wonderful will enter your life soon!", "Let it be still, and it will gradually become clear."];
	var noFortune = ["No fortune for you today!"];
	
	$(".yes").click(function(){
		$(".cat-in-ball").hide();
		$(".fortune-text").text(_.sample(fortunes));
		$(".fortune").show();
		$(".button-container").hide();
		$(".try-again").show();
		$(".no-fortune").hide();
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