$(function() {
	$(document).scroll(function() {
		var _this = this;
		if ($(".GoTo").length) {
			var objOffTop = $(".ApplyFormBox").offset().top;
			var dcHeight = $(document).height();
			var _top = $(document).scrollTop();
			if ($(".GoTo").hasClass("goTopEF")) {
				if (Math.round(_top) > Math.round(objOffTop) + 400) {
					$(".GoTo").show();
				} else {
					$(".GoTo").hide();
				}
			} else {
// 				var g = Math.round(dcHeight) - Math.round(objOffTop) - 120;
// 				if (g <= Math.round(_top)) {
// 					$(".GoTo").hide();
// 				} else {
// 					$(".GoTo").show();
// 				}
			}

		}
	});
	$(document).on("click", ".GoTo", function() {
		var objHeight = $(".ApplyFormBox").offset().top;
		$('html,body').animate({
			scrollTop: objHeight
		}, 800);
	});
});