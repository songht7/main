module.exports = {
	scrollTop: function(id,obj) {
		// 		var ele = document.getElementById(id);
		// 		console.log(ele.scrollHeight)
		// 		ele.scrollTop =20000;// ele.scrollHeight;
		var objHeight = $("#"+obj).offset().top;
		$('#' + id).click(function() {
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
