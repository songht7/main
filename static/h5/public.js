module.exports = {
	scrollTop: function(id,obj) {
		$('#' + id).click(function() {
			var objHeight = $("#"+obj).offset().top;
			$('html,body').animate({
				scrollTop: objHeight
			}, 800);
		});
	},
	efftest: function() {
		EffectCollect.effectReport({
			type: 3
		})
	},
	sendMail: function(url, data, fun) {
		var result = {};
		$.post({
			type: 'POST',
			url: url,
			data: data,
			dataType: "json",
			success: function(res) {
				result = res
				if (res.success) {
					EffectCollect.effectReport({
						type: 1
					})
				}
			},
			error: (function(err) {
				//console.log(err)
				result = err
			}),
			complete: (function() {
				//console.log("complete");
				new fun(result)
			})
		});
	}
}
