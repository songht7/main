module.exports = {
	wxShare:function(setWXInfo){
		
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
