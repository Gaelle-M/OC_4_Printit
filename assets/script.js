const bannerImg = document.querySelector('.banner-img');
const arrowLeft = document.querySelector('.arrow_left');
const arrowRight = document.querySelector('.arrow_right');
const dotsContainer = document.querySelector('.dots');

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

let currentIndex = 0;

function bulletActive() {
    const currentSlide = slides[currentIndex];
    bannerImg.src = `./assets/images/slideshow/${currentSlide.image}`;
    bannerImg.alt = currentSlide.tagLine;

    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
        dot.classList.remove('dot_selected');
        if (index === currentIndex) {
            dot.classList.add('dot_selected');
        }
    });
}

for (let i = 0; i < slides.length; i++) {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    
    dot.addEventListener('click', () => {
        currentIndex = i;
        bulletActive();
    });

    dotsContainer.appendChild(dot);
}

function goToNextSlide() {
    if (currentIndex < slides.length - 1) {
        currentIndex++;
    } else {
        currentIndex = 0; 
    }
    bulletActive();
}

function goToPrevSlide() {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = slides.length - 1;
    }
    bulletActive();
}

arrowLeft.addEventListener("click", goToPrevSlide);
arrowRight.addEventListener("click", goToNextSlide);

bulletActive();
