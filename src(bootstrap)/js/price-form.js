"use strict"

let siteType = 0;
let design;
let adaptivity;
let deadline;
let budget;

function GetInfo(){
		let flag = true;
		while(flag === true) {
			siteType = prompt("Выберите тип сайта (Введите цифру):\n1. Сайт-визитка\n2. Интернет-магазин\n3. Блог");
			if(siteType < 1 || siteType > 3) {
				alert("Некоррекный ввод. Проверьте правильность введенных данных.");
			}
			else{
				console.log(`Site Type: ${siteType}`);
				flag = false;
			}
		}

		flag = true;
		while(flag === true) {
			design = prompt("Выберите Дизайн (Введите цифру):\n1. Уникальный дизайн\n2. Шаблонный-дизайн\n3. Wow-дизайн");
			if(design < 1 || design > 3) {
				alert("Некоррекный ввод. Проверьте правильность введенных данных.");
			}
			else{
				console.log(`Site Type: ${design}`);
				flag = false;
			}
		}

		flag = true;
		while(flag === true) {
			adaptivity = prompt("Выберите адаптивность (Введите цифру):\n1. Большое разрешение\n2. Разрешение для телефона\n3. Универсальный");
			if(adaptivity < 1 || adaptivity > 3) {
				alert("Некоррекный ввод. Проверьте правильность введенных данных.");
			}
			else{
				console.log(`Site Type: ${adaptivity}`);
				flag = false;
			}
		}
	
		flag = true;
		while(flag === true) {
			deadline = prompt("Выберите срок (Введите цифру):\n1. Неделя\n2. Месяц\n3. 3 месяца\n4. Полгода и дольше");
			if(deadline < 1 || deadline > 3) {
				alert("Некоррекный ввод. Проверьте правильность введенных данных.");
			}
			else{
				console.log(`Site Type: ${deadline}`);
				flag = false;
			}
		}

		flag = true;
		while(flag === true) {
			budget = prompt("Ваш бюджет (руб):");
			if(budget < 30000) {
				alert("Некоррекный ввод. Минимальная сумма 30000");
			}
			else{
				console.log(`Site Type: ${budget}`);
				flag = false;
			}
		}
}	

let result = setTimeout(GetInfo, 2300);
			
