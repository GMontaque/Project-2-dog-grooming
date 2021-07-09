// email validation

function manage(emailForm) {
	let email = document.getElementById("emailAddress");
	let subject = document.getElementById("subject");
	let body = document.getElementById("textArea");
	var bt = document.getElementById("submit");
	if (email.value && subject.value && body.value != "") {
		bt.disabled = false;
	} else {
		bt.disabled = true;
	}
}

// email address error pop up message

// const email = document.querySelector("#emailForm");
// const submit = document.querySelector("#submit");

// submit.addEventListener("click", () => {
// 	if (email.validity.typeMismatch) {
// 		email.setCustomValidity(
// 			"Email address should be entered in the following format: email@tester.com"
// 		);
// 	} else {
// 		email.setCustomValidity("");
// 	}
// });

// let checkEmail = document.querySelector("#submit");
// checkEmail.addEventListener("click", ValidateEmail);

// function emailAddress() {
// 	var input = document.getElementById("emailAddress");
// 	input.oninvalid = function (event) {
// 		event.target.setCustomValidity(
// 			"Email address should be entered in the following format: email@tester.com"
// 		);
// 	};
// }

// function ValidateEmail() {
// 	let inputText = document.querySelector("#emailAddress");
// 	inputText.oninvalid = function (e) {
// 		if (!e.target.validity.valid) {
// 			e.target.setCustomValidity(
// 				"Email address should be entered in the following format: email@tester.com"
// 			);
// 		}
// 	};

// 	var mailformat =
// 		/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
// 	if (inputText.value.match(mailformat)) {
// 		return null;
// 	} else {
// 		inputText.oninvalid = function (event) {
// 			event.target.setCustomValidity(
// 				"Email address should be entered in the following format: email@tester.com"
// 			);
// 		};

// 	}
// }

// function checker() {
// 	let emailFrom = document.getElementById("emailForm");
// 	if (emailFrom.checkValidity()) {
// 		return null;
// 	} else {
// 		alert(
// 			"Please note, email address should be entered in the following format: email@tester.com"
// 		);
// 	}
// }

/**********************reset submitted form************************************/

function resetForms() {
	let emailFrom = document.getElementById("emailForm");
	if (emailFrom.checkValidity()) {
		setTimeout(function () {
			document.getElementById("emailAddress").value = "";
			document.getElementById("subject").value = "";
			document.getElementById("textArea").value = "";
			document.getElementById("sumbit").disabled = false;
		}, 1000);
	} else {
		return;
	}
}
