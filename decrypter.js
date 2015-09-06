$(document).ready(function () {
	$('#decrypt').on('click', function () {

	   chrome.tabs.getSelected(null, function(tab) {
	    chrome.tabs.sendRequest(tab.id, {greeting: "decrypt"}, function(response) {
	       alert(response.farewell);
	    });
	   });
	});
});