$(function() {
	$(document).scroll(function() {
		var _this = this;
		if ($("#GoTo").length) {
			var objOffTop = $("#ApplyFormBox").offset().top;
			var dcHeight = $(document).height();
			var _top = $(document).scrollTop();
			if ($("#GoTo").hasClass("goTopEF")) {
				if (Math.round(_top) > Math.round(objOffTop) + 400) {
					$("#GoTo").show();
				} else {
					$("#GoTo").hide();
				}
			} else {
				var g = Math.round(dcHeight) - Math.round(objOffTop) - 120;
				if (g <= Math.round(_top)) {
					$("#GoTo").hide();
				} else {
					$("#GoTo").show();
				}
			}

		}
	});
	$(document).on("click", "#GoTo", function() {
		var objHeight = $("#ApplyFormBox").offset().top;
		$('html,body').animate({
			scrollTop: objHeight
		}, 800);
	});
});
// (function() {
// 	// 取参数
// 	if (window.location.hash == "#/pages/detail/ef" || window.location.hash == "#/pages/detail/ef?key=2") {
// 		var getParam = function(name) {
// 			var tmp
// 			//         var str = window.location.search.replace('?', '')
// 			//         var arr = str.split('&')
// 			var str = window.location.href.split('?')
// 			var arr = str[1].split('&')
// 			if (arr.length > 0) {
// 				for (var i = 0, l = arr.length; i < l; i++) {
// 					try {
// 						if (/(.*?)=(.*)/.test(arr[i])) {
// 							if (RegExp.$1 === name) {
// 								tmp = RegExp.$2
// 							}
// 						}
// 					} catch (e) {
// 						// 空
// 					}
// 				}
// 			}
// 			return tmp
// 		}
// 		var setLs = function(key, value) {
// 			if (key && value) {
// 				window.localStorage.setItem(key, JSON.stringify({
// 					value: value,
// 					time: Date.now()
// 				}))
// 			}
// 		}
// 		var getLs = function(key) {
// 			var ret = ''
// 			try {
// 				var temp = JSON.parse(window.localStorage.getItem(key))
// 				if (Date.now() - temp.time <= 10 * 60 * 1000) {
// 					temp = temp.value
// 				} else {
// 					temp = ''
// 				}
// 				ret = temp
// 			} catch (e) {}
// 			return ret
// 		}
// 		var jsonToUrlParam = function(json) {
// 			var ret = []
// 			for (var key in json) {
// 				ret.push(key + '=' + encodeURIComponent(json[key]))
// 			}
// 			return ret.join('&')
// 		}
// 		// 将url里的bc_tag、aid写入localStorage
// 		setLs('bc_tag', getParam('bc_tag'))
// 		setLs('bc_action', getParam('bc_action'))
// 		setLs('aid', getParam('aid'))
// 
// 		// 延时3、6秒发送数据
// 		var postMessage = function() {
// 			try {
// 				var framesLen = window.frames.length
// 				for (var i = 0; i < framesLen; i++) {
// 					window.frames[i].postMessage({
// 						bc_tag: getParam('bc_tag'),
// 						bc_action: getParam('bc_action'),
// 						aid: getParam('aid')
// 					}, '*')
// 				}
// 			} catch (e) {}
// 		}
// 		setTimeout(postMessage, 1000)
// 		setTimeout(postMessage, 3000)
// 		setTimeout(postMessage, 5000)
// 		setTimeout(postMessage, 10000)
// 		try {
// 			window.addEventListener('message', function(ms) {
// 				var data = ms.data
// 				if (data.bc_tag) {
// 					setLs('bc_tag', data.bc_tag)
// 				}
// 				if (data.bc_action) {
// 					setLs('bc_action', data.bc_action)
// 				}
// 				if (data.aid) {
// 					setLs('aid', data.aid)
// 				}
// 			})
// 		} catch (e) {}
// 
// 		var ext = {
// 			effectReport: function(opts, otherOpts) {
// 				opts = opts || {}
// 				if (otherOpts === false) { // 兼容之前的needTag
// 					otherOpts = {
// 						needTag: false
// 					}
// 				} else {
// 					otherOpts = otherOpts || {}
// 				}
// 				var lsBcTag = getLs('bc_tag')
// 				var lsBcAction = getLs('bc_action')
// 				var lsAid = getLs('aid')
// 				opts.bc_tag = opts.bc_tag || getParam('bc_tag') || lsBcTag
// 				if (!opts.bc_tag && otherOpts.needTag !== false) {
// 					return console.error('bc_tag is required')
// 				}
// 				opts.aid = opts.aid || getParam('aid') || lsAid
// 				var img = new Image()
// 				img.src = 'http://open.adbaichuan.com/collectEffect.htm?' + jsonToUrlParam(opts)
// 				img.onload = function() {
// 					otherOpts.successCallBack && otherOpts.successCallBack()
// 					console.info('bc_tag has been reported')
// 				}
// 				img.onerror = function() {
// 					otherOpts.failCallBack && otherOpts.failCallBack()
// 				}
// 				var bcAction = getParam('bc_action') || lsBcAction
// 				if (bcAction === 'test') {
// 					alert('数据上报' + JSON.stringify(opts))
// 				}
// 			}
// 		}
// 		window.EffectCollect = ext
// 	}
// })()
//
