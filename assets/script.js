// VARIABLES
const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]
let currentSlideIndex = 0
const carrouselLeftArrowElement = document.querySelector(".arrow_left");
const carrouselRightArrowElement = document.querySelector(".arrow_right");
const dotsContainerElement = document.querySelector(".dots");
const carrouselInfoElements = document.querySelector(".banner-info");
const carrouselImageElements = document.querySelector(".banner-img");


// FUNCTIONS
createHTMLElementFromString = (pString) => {
	let tempDiv = document.createElement("div");
	tempDiv.innerHTML = pString.trim();
	return tempDiv.firstChild;
}

updateSlide = (pIndex) => {
	currentSlideIndex = pIndex;
	updateDots();
	carrouselInfoElements.innerHTML = slides[currentSlideIndex].tagLine;
	carrouselImageElements.src = `./assets/images/slideshow/${slides[currentSlideIndex].image}`;
}

changeSlide = (pNumber) => {
	if (currentSlideIndex + pNumber < 0) {updateSlide(slides.length - 1); return}
	if (currentSlideIndex + pNumber >= slides.length) {updateSlide(0); return}
	updateSlide(currentSlideIndex + pNumber);
}

updateDots = () => {
	let dotsList = document.querySelectorAll(".dot");
	dotsList.forEach((dot, index) => {
		dot.classList.remove("dot_selected");
	});
	dotsList[currentSlideIndex].classList.add("dot_selected");
}


// EVENTS
carrouselLeftArrowElement.addEventListener("click", (e) => {
	changeSlide(-1);
});

carrouselRightArrowElement.addEventListener("click", (e) => {
	changeSlide(1);
});


// DOTS
const bulletHTMLElement = `<span class="dot"></span>`;
for (let i = 0; i < slides.length; i++) {
	dotsContainerElement.appendChild(createHTMLElementFromString(bulletHTMLElement));
}


// INIT
updateSlide(0);