const header = document.querySelector("#header");
const image = header.querySelector("img");
const navbar = document.querySelector(".navbar");
const navList = document.querySelector("#navbarNavUl");
const mobileContainer = document.querySelector("#mobileNavContainer");
const bpSelector = document.querySelectorAll(".bp");
const scrollToTop = document.querySelector(".scroll-to-top");

const breakpoints = {
	xs: 0,
	sm: 576,
	md: 768,
	lg: 992,
	xl: 1200,
};

window.addEventListener("load", main);
window.addEventListener("resize", main);
window.addEventListener("scroll", scrollEvent);

function scrollEvent() {
	if (window.scrollY >= 10) {
		// navbar.classList.add("navbar-scroll");
		scrollToTop.classList.remove("invisible");
		scrollToTop.classList.add("bounce");
	} else {
		// navbar.classList.remove("navbar-scroll");
		scrollToTop.classList.remove("bounce");
		scrollToTop.classList.add("invisible");
	}
}

function main() {
	if (window.innerWidth <= breakpoints["lg"]) {
		image.src = "../assets/images/landing-header-sm.png";
		image.style = "width: 100%; position: absolute; z-index: 0";

		bpSelector.forEach(function (bpItem) {
			bpItem.classList.add("mobile");
		});

		mobileContainer.classList.add("w-100");
	} else {
		image.src = "../assets/images/landing-header.png";
		image.style = "width: 85%; position: absolute; z-index: 0";

		bpSelector.forEach(function (bpItem) {
			bpItem.classList.remove("mobile");
		});

		mobileContainer.classList.remove("w-100");
	}
}
