module.exports = {
	scrollTop: function(id, obj) {
		$('#' + id).click(function() {
			var objHeight = $("#" + obj).offset().top;
			$('html,body').animate({
				scrollTop: objHeight
			}, 800);
		});
	},
	sendMail: function(url, data, fun) {
		var _this = this;
		var result = {};
		$.post({
			type: 'POST',
			url: url,
			data: data,
			dataType: "json",
			success: function(res) {
				result = res
				fireCustomEvent('meetji_submit')
				if (res.success) {
					// EffectCollect.effectReport({
					// 	type: 1
					// }, {
					// 	successCallBack: function() {
					// 		console.log('效果上报成功')
					// 	},
					// 	failCallBack: function() {
					// 		console.log('效果上报失败')
					// 	},
					// })
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
