const hamburger = document.querySelector(".menuBtn");
const headerNav = document.querySelector(".header-nav");
const imgEgg = document.querySelector(".img--egg");
const imgPinkCup = document.querySelector(".img--pinkCup");
const imgCherry = document.querySelector(".img--cherry");
const imgOrange = document.querySelector(".img--orange");
const gallery1 = document.querySelector(".gallery__1");
const gallery2 = document.querySelector(".gallery__2");
const gallery3 = document.querySelector(".gallery__3");
const gallery4 = document.querySelector(".gallery__4");

function displayGalleryImg() {
	if (window.matchMedia("(min-width: 750px)").matches) {
		gallery1.src = "/images/desktop/image-gallery-milkbottles.jpg";
		gallery2.src = "/images/desktop/image-gallery-orange.jpg";
		gallery3.src = "/images/desktop/image-gallery-cone.jpg";
		gallery4.src = "/images/desktop/image-gallery-sugar-cubes.jpg";
	} else {
		gallery1.src = "/images/mobile/image-gallery-milkbottles.jpg";
		gallery2.src = "/images/mobile/image-gallery-orange.jpg";
		gallery3.src = "/images/mobile/image-gallery-cone.jpg";
		gallery4.src = "/images/mobile/image-gallery-sugar-cubes.jpg";
	}

	if (window.matchMedia("(min-width: 800px)").matches) {
		imgEgg.src = "./images/desktop/image-transform.jpg";
		imgPinkCup.src = "/images/desktop/image-stand-out.jpg";
		imgCherry.src = "/images/desktop/image-graphic-design.jpg";
		imgOrange.src = "/images/desktop/image-photography.jpg";
	} else {
		imgEgg.src = "./images/mobile/image-transform.jpg";
		imgPinkCup.src = "/images/mobile/image-stand-out.jpg";
		imgCherry.src = "/images/mobile/image-graphic-design.jpg";
		imgOrange.src = "/images/mobile/image-photography.jpg";
	}
}

hamburger.addEventListener("click", () => {
	hamburger.classList.toggle("open");
	headerNav.classList.toggle("display");
});

// fires everytime window screen resizes
window.addEventListener("resize", displayGalleryImg);

displayGalleryImg();
