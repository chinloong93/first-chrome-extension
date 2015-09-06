$(document).ready(function () {
	$('#decrypt').on('click', function () {

	   chrome.tabs.getSelected(null, function(tab) {
	    chrome.tabs.sendRequest(tab.id, {greeting: "decrypt"}, function(response) {
	       alert(response.farewell);
	    });
	   });
	});
});

$(document).ready(function () {
	$('#start').on('click', function () {

	   chrome.tabs.getSelected(null, function(tab) {
	    chrome.tabs.sendRequest(tab.id, {greeting: "start", fbid: $('#textfield1').val()}, function(response) {
	       alert(response.farewell);
	    });
	   });
	});
});