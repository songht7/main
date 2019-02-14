$(function() {
	$(document).on("click", "#GoTo", function() {
		var objHeight = $("#ApplyFormBox").offset().top;
		$('html,body').animate({
			scrollTop: objHeight
		}, 800);
	});
});
