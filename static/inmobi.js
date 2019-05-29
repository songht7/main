function fireEvent(eventType, eventName) {
	console.log(eventType, eventName)
	var PROPERTY_ID = "15730444c8a642db8f042bcf4e5e7809";
	var PING_SERVER_URL = "https://advertiser.inmobiapis.cn/tpce/v1/events/" + eventType +
		"?trackingPartner=InMobi&country=CN";
	var pageData = {};
	if (typeof InmobiPixel != "undefined") {
		window.inmobiPixel = new InmobiPixel();
		console.log(inmobiPixel)
		window.inmobiPixel.init({
			pingServer: PING_SERVER_URL,
			propertyId: PROPERTY_ID,
			domain: "meetji.com"
		});
	}
	window.inmobiPixel.ping(eventName, pageData);
}


function fireCustomEvent(eventName) {
	fireEvent("custom", eventName);
}

function fireDownloadEvent() {
	fireEvent("download", "download");
}

var scrollFired = false;
var fireScrollEvent = _debounce(scrollEventHandler, 300);

function scrollEventHandler() {
	var h = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
	var minScrollHeight = 100;
	if (!scrollFired && h >= minScrollHeight) {
		scrollFired = true;
		fireCustomEvent("meetji_scroll");
	}
}

function _debounce(func, wait, immediate) {
	var timeout, args, context, timestamp, result;
	var later = function() {
		var last = Date.now() - timestamp;
		if (last < wait && last >= 0) {
			timeout = setTimeout(later, wait - last);
		} else {
			timeout = null;
			if (!immediate) {
				result = func.apply(context, args);
				if (!timeout) context = args = null;
			}
		}
	};
	return function() {
		context = this;
		args = arguments;
		timestamp = Date.now();
		var callNow = immediate && !timeout;
		if (!timeout) timeout = setTimeout(later, wait);
		if (callNow) {
			result = func.apply(context, args);
			context = args = null;
		}
		return result;
	};
};
