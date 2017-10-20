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
		event.preventDefault();
	});



	});
