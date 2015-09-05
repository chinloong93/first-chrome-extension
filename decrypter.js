$(document).ready(function () {
	$('#decrypt').on('click', function () {
		var encrypted = $("input[name=encrypted-input]").val();
		var secret = $("input[name=secret-phrase]").val();



		var decrypted = CryptoJS.AES.decrypt(
			  encrypted,
			  secret,
			  {
			    iv: CryptoJS.enc.Hex.parse('be410fea41df7162a679875ec131cf2c'),
			    mode: CryptoJS.mode.CBC,
			    padding: CryptoJS.pad.Pkcs7
			  }
			);

		$("#decrypted-message").html(decrypted.toString(CryptoJS.enc.Utf8));
	});
});