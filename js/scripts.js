//Back-End Logic
  var convert = function(number1) {
    return number1 / 16 * 100;
  };

	

//Front-End Logic

$(document).ready(function() {

  $("form#cups").submit(function() {
	var number1 = parseInt($("#input1").val());
  var result1 = convert(number1);
	var fill = String(result1);
	var fill2 = fill + "%";
	$(".water").animate( {
		height: fill2
	}, 1000);
	$('#wrong').text(number1);
	$('#fill2').text(fill2);
	if (number1 > 16) {
		$('.wrong').fadeTo(1000, function() {
		} );
	} else if (number1 < 16) {
		$('.wrong').fadeIn(400, function() {

		} );
	} else {
		$('.correct').fadeIn(400, function() {

		} );
	}

	event.preventDefault();

	});



	});
