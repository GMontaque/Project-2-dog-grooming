// nav bar active images
let navLink = document.getElementById("navBar");
let navItem = navLink.getElementsByClassName("nav-item");
for (var i = 0; i < navItem.length; i++) {
	navItem[i].addEventListener("click", function () {
		let current = document.getElementsByClassName("nav-active");
		if (current.length > 0) {
			current[0].className = current[0].className.replace("nav-active", "");
		}
		this.className += "nav-active";
	});
}

window.onload = function () {
	let all_links = document.getElementById("navBar").getElementsByTagName("a"),
		i = 0,
		len = all_links.length,
		full_path = location.href.split("#")[0]; //Ignore hashes?

	// Loop through each link.
	for (; i < len; i++) {
		if (all_links[i].href.split("#")[0] == full_path) {
			all_links[i].className += " nav-active";
		}
	}
};

// nav bar mobile JS

function myFunction() {
	// Get the checkbox
	let checkBox = document.getElementById("navMobile-toggle");

	// Get the output text
	let logo = document.getElementById("navMobile-logo-top");
	// let siteName = document.getElementById("webName");
	let mobNavBody = document.getElementById("mobNavBody");
	// If the checkbox is checked, display the output text
	if (checkBox.checked == true) {
		logo.style.display = "none";
		mobNavBody.style.backgroundColor = "#fcfcfc";
		mobNavBody.style.boxShadow = "3px 3px 7px rgba(40, 40, 40, 0.2)";
		// siteName.style.display = "none";
	} else {
		logo.style.display = "block";
		mobNavBody.style.backgroundColor = "white";
		mobNavBody.style.boxShadow = "";
		// siteName.style.display = "block";
	}
}
