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

function emailAddress() {
	var input = document.getElementById("emailAddress");
	input.oninvalid = function (event) {
		event.target.setCustomValidity(
			"Email address should be entered in the following format: email@tester.com"
		);
	};
}
emailAddress();

/**********************reset submitted form************************************/

function resetForms() {
	let emailFrom = document.getElementById("emailForm");
	if (emailFrom.checkValidity()) {
		setTimeout(function () {
			document.getElementById("emailAddress").value = "";
			document.getElementById("subjectBar").value = "";
			document.getElementById("textArea").value = "";
			document.getElementById("sumbit").disabled = false;
		}, 1000);
	} else {
		return;
	}
}
