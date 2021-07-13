// email validation check all fields completed

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

let checkEmail = document.querySelector("#submit");
checkEmail.addEventListener("click", checker);
function checker() {
	let inputText = document.querySelector("#emailAddress");
	var mailformat = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
	if (inputText.value.match(mailformat)) {
		null;
	} else {
		alert(
			"Email address should be entered in the following format: email@tester.com"
		);
	}
}

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
