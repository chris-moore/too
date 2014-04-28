

//$("#" + page).animate({opacity: 1, left:0}, 400, function(){transition = false;});

function validateForm() {
	
	var entered = $("#enter_password").val().toLowerCase();

	console.log("[validateForm] " + entered);

	if (entered.indexOf("gab") > -1 && entered.indexOf("ism") > -1 ) {
		$("#puzzle_progress").css("opacity", "0");
		$("#puzzle_progress").css("display", "block");
		window.scrollTo(0, 0);
		$("title").html("TEAM MAIL");
		$("#password").animate({opacity: 0}, 400, function(){
			$("#password").hide();
			$("#puzzle_progress").animate({opacity: 1}, 400, function(){});
		});
	}
}

