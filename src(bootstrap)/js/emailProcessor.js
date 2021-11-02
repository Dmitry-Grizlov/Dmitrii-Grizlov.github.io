$(document).ready(function () {
	$(form).submit(function (event) {
		event.preventDefault();
		$.ajax({
			type: "POST",
			url: "php.mail2.php",
			data: $(this).serialize()
		}).done(function () {
			alert("Message was sent!");
			$(this).find("input").val("");
			$(form).trigger("reset");
		});
		return false;
	});
});


