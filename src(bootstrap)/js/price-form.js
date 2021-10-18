"use strict"

let siteType = ["Сайт-визитка", "Интернет-магазин", "Блог"];
let design = ["Уникальный дизайн", "Шаблонный-дизайн", "Wow-дизайн"];
let adaptivity = ["Большое разрешение", "Разрешение для телефона", "Универсальный"];
let deadline = ["Неделя", "Месяц", "3 месяца", "Полгода и дольше"];
let budget;
let	baseprice = 20000;

function ShowBase(){
	console.log("Baseprice: ", baseprice);
}

function GetInfo(){
		let data = [];
		let option;
		let flag = true;
		while(flag === true) {
			option = prompt("Выберите тип сайта (Введите цифру):\n1. Сайт-визитка\n2. Интернет-магазин\n3. Блог");
			(option < 1 || option > 3) ? 
				alert("Некоррекный ввод. Проверьте правильность введенных данных.") : flag = false;
		}

		if(parseInt(option) === 1)
			baseprice += 10000;
		else if(parseInt(option) === 2)
			baseprice += 50000;
		else
			baseprice += 25000;

		data[0] = siteType[option-1];

		flag = true;
		while(flag === true) {
			option = prompt("Выберите Дизайн (Введите цифру):\n1. Уникальный дизайн\n2. Шаблонный-дизайн\n3. Wow-дизайн");
			(option < 1 || option > 3)? 
				alert("Некоррекный ввод. Проверьте правильность введенных данных.") : flag = false;
		}

		if(parseInt(option) === 1)
			baseprice += 20000;
		else if(parseInt(option) === 2)
			baseprice += 10000;
		else
			baseprice += 50000;

			data[1] = design[option-1];

		flag = true;
		while(flag === true) {
			option = prompt("Выберите адаптивность (Введите цифру):\n1. Большое разрешение\n2. Разрешение для телефона\n3. Универсальный");
			(option < 1 || option > 3) ?
				alert("Некоррекный ввод. Проверьте правильность введенных данных.") : flag = false;
		}

		if(parseInt(option) === 1)
			baseprice += 5000;
		else if(parseInt(option) === 2)
			baseprice += 5000;
		else
			baseprice += 10000;

			data[2] = adaptivity[option-1];
	
		flag = true;
		while(flag === true) {
			option = prompt("Выберите срок (Введите цифру):\n1. Неделя\n2. Месяц\n3. 3 месяца\n4. Полгода и дольше");
			(option < 1 || option > 4) ?
				alert("Некоррекный ввод. Проверьте правильность введенных данных.") : flag = false;
		}

		if(parseInt(option) === 1)
			baseprice += 30000;
		else if(parseInt(option) === 2)
			option += 15000;
		else if(option == 3)
			baseprice += 10000;
		else
			baseprice += 5000;

			data[3] = deadline[option-1];

		flag = true;
		while(flag === true) {
			budget = prompt("Ваш бюджет (руб):");
			(parseInt(budget) < 30000) ? 
				alert("Некоррекный ввод. Минимальная сумма 30000") : flag = false;
		}

		data[4] = budget;
		ShowBase();
		console.log(option);
		console.log("Budget: ", data[4]);

		alert(
			"Вы выбрали:" + 
			"\n\nТип Сайта: " + data[0] + 
			"\nДизайн: " + data[1] + 
			"\nАдаптивность: " + data[2] + 
			"\nСроки: " + data[3] +
			"\n\nИтого: " + baseprice + 
			"руб.\nВаш Бюджет: " + budget + "руб."
		);
}	

let result = setTimeout(GetInfo, 2100);
