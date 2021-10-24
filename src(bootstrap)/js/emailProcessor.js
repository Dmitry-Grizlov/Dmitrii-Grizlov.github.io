function ProcessEmail(){
	const email = [];
	
	var names = document.getElementsByClassName("name");
	for (var i = 0; i < names.length; i++) {
    	if(names[i].value == "")
			continue;
		else
			email[0] = names[i].value;
	}

	var emails = document.getElementsByClassName("emailAddress");
	for (var i = 0; i< emails.length; i++) {
    	if(emails[i].value == "")
			continue;
		else
			email[1] = emails[i].value;
	}

	var msgs = document.getElementsByClassName("message");
	for (var i = 0;i < msgs.length; i++) {
    	if(msgs[i].value == "")
			continue;
		else
			email[2] = msgs[i].value;
			
	}

	if(email.length < 3){
		alert("Пожалуйста, заполните все поля!");
		return;
	}else
		alert("Сообщение отправлено");
	return email;
	
};
