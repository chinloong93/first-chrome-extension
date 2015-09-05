
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
  if (key == 17) {
      console.log("second");

      var oldText = $(actualSpan).text();
      console.log(oldText);
      
      // encrypt oldText here

      var iv  = CryptoJS.enc.Hex.parse('be410fea41df7162a679875ec131cf2c');
      var secret = prompt("Secret Passphrase?");

      var encrypted = CryptoJS.AES.encrypt(
          oldText,
          secret,
          {
            iv: iv,
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7
          }
        );

      actualSpan.html(encrypted.toString());
  }
}