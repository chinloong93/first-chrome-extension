$(document).ready(function () {
	$('#decrypt').on('click', function () {
		var encrypted = $("input[name=encrypted-input]").val();

		var decrypted = sjcl.decrypt("password", encrypted);

		$("#decrypted-message").html(decrypted.toString(CryptoJS.enc.Utf8));
	});
});