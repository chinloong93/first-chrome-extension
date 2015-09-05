chrome.runtime.onConnect.addListener(function(port)) {
	port.onMessage.addListener(function(msg) {
		alert(msg.data + "received!");
	});
});


//chrome.browserAction.onClicked.addListener(printData);