function hamburgerClick() {
    var mobileMenu = document.getElementsByClassName("mobile-menu")[0];
    var display = mobileMenu.style.display;
    if (display == "") {
        mobileMenu.style.display = "flex";
    } else {
        mobileMenu.style.display = "";
    }
}

var hamburgerIcon = document.getElementsByClassName("menu-icon")[0];
hamburgerIcon.addEventListener("click", hamburgerClick);
