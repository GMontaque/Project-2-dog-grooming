// nav bar active images
let navLink = document.getElementById("navBar");
let navItem = navLink.getElementsByClassName("nav-item");
for (var i = 0; i < navItem.length; i++) {
    navItem[i].addEventListener("click", function() {
  let current = document.getElementsByClassName("nav-active");
  if (current.length > 0) { 
    current[0].className = current[0].className.replace("nav-active", "");
  }
  this.className += "nav-active";
  });
}