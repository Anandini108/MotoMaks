//Навигация

const menuMotopark = document.querySelector('.menu_motopark');
const menuConditions = document.querySelector('.menu_conditions');
const menuGallery = document.querySelector('.menu_gallery');
const menuContacts = document.querySelector('.menu_contacts');

const motopark = document.getElementById('motopark');
const conditions = document.getElementById('conditions');
const gallery = document.getElementById('gallery');
const contacts = document.getElementById('contacts');

menuMotopark.addEventListener('click', function () {
	motopark.scrollIntoView({ behavior: "smooth", block: "start" });
});
menuConditions.addEventListener('click', function () {
	conditions.scrollIntoView({ behavior: "smooth", block: "start" });
});
menuGallery.addEventListener('click', function () {
	gallery.scrollIntoView({ behavior: "smooth", block: "start" });
});
menuContacts.addEventListener('click', function () {
	contacts.scrollIntoView({ behavior: "smooth", block: "start" });
});




/*появление и исчезновение бургера*/
const burger = document.querySelector('.menu_burger');
const menu = document.querySelector('.menu');

document.addEventListener('click', function (event) {
	if (event.target.closest('.menu__item')) {
		menu.classList.remove('active');
	}
	if (event.target.closest('.menu_burger')) {
		menu.classList.toggle('active');
	}
	if (!event.target.closest('.menu_burger')) {
		menu.classList.remove('active');
	}
});

document.addEventListener('keyup', function (event) {
	if (event.code === 'Escape') {
		menu.classList.remove('active');
	}
});

/*Инициализация swiper (слайдера)*/
new Swiper('.gallery-slider', {
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	},
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
		dynamicBullets: true,
	}
});

new Swiper('.moto-slider', {
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	},
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
		dynamicBullets: true,
	}
});

//открытие и закрытие модального окна
//открытие и закрытие модального окна
const motosParent = document.querySelector('.moto__row');
const motoMassiv = motosParent.children;
let i, j, k, c;
for (i = 0; i < motoMassiv.length; i++) {
	j = String(i);
	motoMassiv[i].classList.add(`moto__item_${j}`);
}
const modals = document.querySelectorAll('.moto__modal');
for (k = 0; k < modals.length; k++) {
	c = String(k);
	modals[k].classList.add(`moto__modal_${c}`);
}

const imgMassiv = document.querySelectorAll('.moto__image');
for (g = 0; g < imgMassiv.length; g++) {
	m = String(g);
	imgMassiv[g].classList.add(`moto__image_${m}`);
}

const markaMassiv = document.querySelectorAll('.moto__name');
for (n = 0; n < markaMassiv.length; n++) {
	e = String(n);
	markaMassiv[n].classList.add(`moto__name_${e}`);
}

document.addEventListener("click", function (event) {
	for (let d = 0; d < motoMassiv.length; d++) {
		let p = String(d);
		if (event.target.closest(`.moto__image_${p}`) || event.target.closest(`.moto__name_${p}`)) {
			event.preventDefault();
			modals[d].classList.add('active');
		} else if (!event.target.closest('.moto__modal_content') && modals[d].classList.contains('active') || event.target.closest('.moto__modal_close')) {
			modals[d].classList.remove('active');
		}
	}
});

//валидация формы
const contactForm = document.forms.contactForm;
const select = contactForm.select;
const dataOne = contactForm.data1;
const dataTwo = contactForm.data2;
const yourName = contactForm.yourName;
const tel = contactForm.tel;
const email = contactForm.email;


contactForm.addEventListener("submit", formValidate);

function formValidate(contactForm) {
	if (select.value == 0) {
		select.parentNode.style.border = "1px solid #f56363";
		contactForm.preventDefault();
	} else {
		select.parentNode.style.border = "1px solid #fff";
	}
	if (!dataOne.value) {
		dataOne.parentNode.style.border = "1px solid #f56363";
		contactForm.preventDefault();
	} else {
		dataOne.parentNode.style.border = "1px solid #fff";
	}
	if (!dataTwo.value) {
		dataTwo.parentNode.style.border = "1px solid #f56363";
		contactForm.preventDefault();
	} else {
		dataTwo.parentNode.style.border = "1px solid #fff";
	}
	if (!yourName.value) {
		yourName.parentNode.style.border = "1px solid #f56363";
		contactForm.preventDefault();
	} else {
		yourName.parentNode.style.border = "1px solid #fff";
	}
	if (!tel.value) {
		tel.parentNode.style.border = "1px solid #f56363";
		contactForm.preventDefault();
	} else {
		tel.parentNode.style.border = "1px solid #fff";
	}
	if (!email.value) {
		email.parentNode.style.border = "1px solid #f56363";
		contactForm.preventDefault();
	} else {
		email.parentNode.style.border = "1px solid #fff";
	}
	if (error === 0) {
		alert("Письмо отправлено");
	}
}

// возвращение на белую рамку поля формы при изменении
contactForm.addEventListener('change', function (e) {
	e.target.parentNode.style.border = "1px solid #fff";
}, { capture: true });

// Фокус поля у формы
contactForm.addEventListener('focus', function (e) {
	let targetField = e.target.parentElement;
	if (!targetField.classList.contains('form__item_btn')) {
		targetField.classList.add('field_focus');
	}
}, { capture: true });

contactForm.addEventListener('blur', function (e) {
	let targetField = e.target.parentElement;
	targetField.classList.remove('field_focus');
}, { capture: true });

//ТЕЛЕФОННАЯ МАСКА
document.addEventListener("DOMContentLoaded", function () {
	let phoneInput = document.getElementById("tel");

	let getInputNumbersValue = function (input) {
		return input.value.replace(/\D/g, ""); //получаем числа, удаляем не числа
	};

	let onPhoneInput = function (e) {
		let input = e.target,
			InputNumbersValue = getInputNumbersValue(input);//сохраняем значения инпута, но только числа
		formattedInputValue = "";
		selectionStart = input.selectionStart; // положение курсора

		if (!InputNumbersValue) {
			return input.value = ""; //обрезаем нечисловые символы
		}

		//возможность редактирвоать в середине строки
		if (input.value.length != selectionStart) { //если длина строки не равна позиции картеки, то
			if (e.data && /\D/g.test(e.data)) {
				input.value = InputNumbersValue;
			}
			return;
		}

		if (["7", "8", "9"].indexOf(InputNumbersValue[0]) > -1) {
			//Russian phone number
			if (InputNumbersValue[0] == "9") InputNumbersValue = "7" + InputNumbersValue;
			let firstSymbols = (InputNumbersValue[0] == "8") ? "8" : "+7";
			formattedInputValue = firstSymbols + " ";
			if (InputNumbersValue.length > 1) {
				formattedInputValue += "(" + InputNumbersValue.substring(1, 4);
			}
			if (InputNumbersValue.length >= 5) {
				formattedInputValue += ") " + InputNumbersValue.substring(4, 7);
			}
			if (InputNumbersValue.length >= 8) {
				formattedInputValue += "-" + InputNumbersValue.substring(7, 9);
			}
			if (InputNumbersValue.length >= 10) {
				formattedInputValue += "-" + InputNumbersValue.substring(9, 11);
			}
		} else {
			// Not Russian phone number
			formattedInputValue = "+" + InputNumbersValue.substring(0, 16);
		}
		input.value = formattedInputValue;
	}

	let onPhoneKeyDown = function (e) { //очистка последнего символа при delete (первого в номере)
		let input = e.target;
		if (e.keyCode == 8 && getInputNumbersValue(input).length == 1) {
			input.value = "";
		}
	}

	let onPhonePate = function (e) {
		let pasted = e.clipboardData || window.clipboardData,
			input = e.target,
			inputNumbersValue = getInputNumbersValue(input);

		if (pasted) {
			let pastedText = pasted.getData("Text");
			if (/\D/g.test(pastedText)) {
				input.value = inputNumbersValue;
			}
		}
	}

	phoneInput.addEventListener("input", onPhoneInput);
	phoneInput.addEventListener("keydown", onPhoneKeyDown);
	phoneInput.addEventListener("paste", onPhonePate);
});


//МАСКА ДЛЯ ПОЛЯ ИМЕНИ
let nameInput = document.getElementById("name");

nameInput.addEventListener('keydown', function (e) {
	if (e.key.match(/[0-9]/)) return e.preventDefault();
}); // Будет перехватывать все числа при ручном вводе. 
// Тажке нужна, чтобы replace не сбрасывал каретку, срабатывая каждый раз.

nameInput.addEventListener('input', function (e) {
	// На случай, если умудрились ввести через копипаст или авто-дополнение.
	nameInput.value = nameInput.value.replace(/[0-9]/g, "");
});




