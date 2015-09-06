
function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}

function injectMe() {

  var actualCode = '(' + function() {
      // All code is executed in a local scope.
      // For example, the following does NOT overwrite the global `alert` method
      // var alert = null;
      // To overwrite a global variable, prefix `window`:
      // window.bananas = "bananas are so dank";
      window.__REACT_DEVTOOLS_GLOBAL_HOOK__.on();
      console.log("beginning injection")
      var elementData = window.__REACT_DEVTOOLS_GLOBAL_HOOK__.reactDevtoolsAgent.elementData.values(); 
      var elts = []; var done = false; 
      while (!done) {   
        var iter = elementData.next();   
        done = iter.done;   
        elts.push(iter.value); 
      } ;
      var composer = elts.filter(function(elt) {return elt != null && elt.name==="MessengerComposer";})[0];
      var input = elts.filter(function(elt) {return elt != null && elt.name==="MessengerInput";})[0];

      window.bananazAll = elts;
      window.bananaz = composer;
      window.strawberry = input;

  } + ')();';
  var script = document.createElement('script');
  script.textContent = actualCode;
  (document.head||document.documentElement).appendChild(script);
  script.parentNode.removeChild(script);

  console.log(window);

}

document.onkeydown = function(e) {

  var div1 = document.querySelector("[aria-label='Type a message...']");
  var actualSpan = $(div1).find("div").find("div").find("span").find("span");

  var key = e.which || e.keyCode;
  if (key == 13 && e.preventDefault()) {

    console.log("Enter pressed")

    var message = $(actualSpan).text();
    if (!localStorage["passphrase"]) {
      localStorage["passphrase"] = prompt("set a passphrase");
    }

    var encrypted = sjcl.encrypt(localStorage['passphrase'], message);

    actualSpan.html(encrypted);

  } if (key == 18) {
    console.log("alt pressed")

    var actualCode = '(' + function() {
      //inject open pgp here

      


      console.log("beginning injection")
      var elementData = window.__REACT_DEVTOOLS_GLOBAL_HOOK__.reactDevtoolsAgent.elementData.values(); 
      var elts = []; var done = false; 
      while (!done) {   
        var iter = elementData.next();   
        done = iter.done;   
        elts.push(iter.value); 
      } ;
      var composer = elts.filter(function(elt) {return elt != null && elt.name==="MessengerComposer";})[0];
      var input = elts.filter(function(elt) {return elt != null && elt.name==="MessengerInput";})[0];
      input._resetState();

    } + ')();';
    var script = document.createElement('script');
    script.textContent = actualCode;
    (document.head||document.documentElement).appendChild(script);
    script.parentNode.removeChild(script);

  };
}

chrome.extension.onRequest.addListener(function(request, sender, sendResponse) {
  if (request.greeting == "decrypt") {
      var encryptedMessages = $("div:contains('{\"iv\":\"')");
      for (var i = 0; i < encryptedMessages.length; i++) {
        var text = $(encryptedMessages[i]).text();
        var html = $(encryptedMessages[i]).html();
        if (text.startsWith("{\"iv") && !html.includes("<div")) {
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
  } if (request.greeting == "start") {
    //set bananaz to messageComposer
    injectMe();
  } else {
      sendResponse({}); // snub them.
    }
});