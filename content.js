
function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}

document.onkeydown = function(e) {

  var div1 = document.querySelector("[aria-label='Type a message...']");
  var actualSpan = $(div1).find("div").find("div").find("span").find("span");

  var key = e.which || e.keyCode;
  if (key == 18) {

    var message = $(actualSpan).text();
    var encrypted = sjcl.encrypt("password", message);

    actualSpan.html(encrypted);
  }
}

chrome.extension.onRequest.addListener(function(request, sender, sendResponse) {
  if (request.greeting == "decrypt") {
      var encryptedMessages = $("div:contains('{\"iv\":\"')");
      console.log(encryptedMessages);
      for (var i = 0; i < encryptedMessages.length; i++) {
        var text = $(encryptedMessages[i]).text();
        if (text.startsWith("{\"iv")) {
          console.log(text);
          try {
            var decrypted = sjcl.decrypt("password", text);
            $(encryptedMessages[i]).text(decrypted);
          } catch (err) {
            //ignore
          }
        }
      }
      var ReqDat = "Completed Decrypting.";       
      sendResponse({farewell: ReqDat});
  } else {
      sendResponse({}); // snub them.
    }
});