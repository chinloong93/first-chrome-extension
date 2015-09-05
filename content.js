
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


document.onkeydown = function(e) {

  var key = e.which || e.keyCode;
  if (key === 13) { // 13 is enter
    // code for enter
    // alert("Enter pressed")
    console.log("ENTERED");

    var div1 = document.querySelector("[aria-label=\"Type a message...\"]");
    var actualSpan = $(div1).find("div").find("div").find("span").find("span");
    actualSpan.text("WE R HAKERS LEL");
    console.log($(actualSpan).innerHTML);
    console.log(actualSpan.text());
  } 
}