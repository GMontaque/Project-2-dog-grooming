// nav bar active images
// let navLink = document.getElementById("navBar");
// let navItem = navLink.getElementsByClassName("nav-item");
// for (var i = 0; i < navItem.length; i++) {
//     navItem[i].addEventListener("click", function() {
//   let current = document.getElementsByClassName("nav-active");
//   if (current.length > 0) {
//     current[0].className = current[0].className.replace("nav-active", "");
//   }
//   this.className += "nav-active";
//   });
// }

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

// auto slide reviews
var slideIndex = 0;
showSlides();

function showSlides() {
	var i;
	var slides = document.getElementsByClassName("mySlides");
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	slideIndex++;
	if (slideIndex > slides.length) {
		slideIndex = 1;
	}
	slides[slideIndex - 1].style.display = "block";
	setTimeout(showSlides, 7000); // Change image every 2 seconds
}
