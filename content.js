
// $('body').click(function() {
// 	var port = chrome.runtime.connect({name: "messenger"});
// 	var message_data = "hello!";
// 	alert(message_data);
// 	port.postMessage({data: message_data});
// 	return true;
// });


function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}

var ctrlWasHit = false;

document.onkeydown = function(e) {

  var div1 = document.querySelector("[aria-label='Type a message...']");
      var actualSpan = $(div1).find("div").find("div").find("span").find("span");

  var key = e.which || e.keyCode;
  if (key == 17 && !ctrlWasHit) {
      console.log("second");

      var oldText = $(actualSpan).text();
      console.log(oldText);
      
      actualSpan.html("yes yes yes");
      ctrlWasHit = true;
  } else if (ctrlWasHit) {

      console.log("third");

      ctrlWasHit = false;
  }
}