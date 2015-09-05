
$('body').click(function() {
	var port = chrome.runtime.connect({name: "messenger"});
	var message_data = "hello!";
	alert(message_data);
	port.postMessage({data: message_data});
	return true;
});