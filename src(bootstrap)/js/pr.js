function Validate() {
    'use strict'
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
          form.classList.add('was-validated')
        }, false)
      })
};

function GetType() {
	var select = document.getElementById("type");
	var value = select.value;
	return value;
};

function GetDesign() {
	var select = document.getElementById("design");
	var value = select.value;
	return value;
};

function GetAdaptivity() {
	var select = document.getElementById("flex");
	var value = select.value;
	return value;
};

function GetBudget() {
	var price = $("#budget").val();
	return price;
};

function GetDeadline() {
	var deadline = $("#deadline").val();
	return deadline;
};

function ShowDeadline() {
	let deadline = ["Неделя", "Месяц", "3 месяца", "Полгода и дольше"];
	document.getElementById("deadline-display").innerHTML = deadline[GetDeadline() - 1];
}

function ShowBudget() {
	document.getElementById("budget-display").innerHTML = GetBudget() + "руб.";
}

function GetInfo() {
	let sType = parseInt(GetType()),
		sDesign = parseInt(GetDesign()),
		sFlex = parseInt(GetAdaptivity()),
		sDeadline = parseInt(GetDeadline()),
		sBudget = parseInt(GetBudget());

	let siteType = ["Сайт-визитка", "Интернет-магазин", "Блог"];
	let design = ["Уникальный дизайн", "Шаблонный-дизайн", "Wow-дизайн"];
	let adaptivity = ["Большое разрешение", "Разрешение для телефона", "Универсальный"];
	let deadline = ["Неделя", "Месяц", "3 месяца", "Полгода и дольше"];
	let budget = GetBudget();
	let baseprice = 20000;

	const data = [siteType[sType - 1],
	design[sDesign - 1],
	adaptivity[sFlex - 1],
	deadline[sDeadline - 1],
		sBudget];

	if (sType === 1)
		baseprice += 10000;
	else if (sType === 2)
		baseprice += 50000;
	else if (sType === 3)
		baseprice += 25000;

	if (sDesign === 1)
		baseprice += 20000;
	else if (sDesign === 2)
		baseprice += 10000;
	else if (sDesign === 3)
		baseprice += 50000;

	if (sFlex === 1)
		baseprice += 5000;
	else if (sFlex === 2)
		baseprice += 5000;
	else if (sFlex === 3)
		baseprice += 10000;

	if (sDeadline === 1)
		baseprice += 30000;
	else if (sDeadline === 2)
		baseprice += 15000;
	else if (sDeadline === 3)
		baseprice += 10000;
	else if (sDeadline === 4)
		baseprice += 5000;

	console.log(data);

	document.getElementById("site-type").innerHTML = "Тип Сайта: " + data[0];
	document.getElementById("site-design").innerHTML = "Дизайн: " + data[1];
	document.getElementById("site-flex").innerHTML = "Адаптивность: " + data[2];
	document.getElementById("sDdln").innerHTML = "Сроки: " + data[3];
	document.getElementById("sTotal").innerHTML = "Итого: " + baseprice + "руб.";
	document.getElementById("sBudget").innerHTML = "Ваш Бюджет: " + sBudget + "руб.";
}


function ProcessEmailModal(){
	$custName = $('.name-modal').val();
	$custEmail = $('.emailAddress-modal').val();
	$custMsg = $('.message-modal').val();

	const email = {
		name: $custName,
		emailAddress: $custEmail,
		message: $custMsg
	};

	alert("Письмо отправлено");
	console.log(email);
	return 0;
};

function ProcessEmail(){
	$('.name').each(function(){
		if($('.name' != ""))
			$custName = $(this).val();
	});

	$('.emailAddress').each(function(){
		if($('.emailAddress' != ""))
			$custEmail = $(this).val();
	});

	$('.message').each(function(){
		if($('.message' != ""))
			$custMsg = $(this).val();
	});
	const email = {
		name: $custName,
		emailAddress: $custEmail,
		message: $custMsg
	};

	alert("Письмо отправлено");
	console.log(email);
	return 0;
};