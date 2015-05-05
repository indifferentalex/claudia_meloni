jQuery(function() {
	if ($(".photo-desktop").is(":visible") && !($(".photo-mobile").is(":visible"))) {
		$(".brief").width($(".photo-desktop").width());
		$(".words-and-letters").width($(".photo-desktop").width());
		$(".posts").css({ "margin-left": $(".photo-desktop").width() });
	}

	$(".words-and-letters").transition({ opacity: 1, duration: 1500, delay: 500 });

	var correctPostLeftMargin = $(".post").css("margin-left");

	$(".post").css({ marginLeft: "20%" });

  var delay = 500;
  $(".post").each(function() {
  	$(this).transition({ opacity: 1, marginLeft: correctPostLeftMargin, duration: 1000, delay: delay });
    delay += 1000;
  });	
});