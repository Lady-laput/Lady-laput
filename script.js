document.addEventListener("DOMContentLoaded", () => {
  const carousel = document.querySelector('.carousel-images');
  const images = document.querySelectorAll('.carousel img');
  const btnNext = document.querySelector('.next');
  const btnPrev = document.querySelector('.prev');

  let index = 0;
  const update = () => {
    carousel.style.transform = `translateX(-${index * 100}%)`;
  };

  btnNext.addEventListener('click', () => {
    index = (index + 1) % images.length;
    update();
  });

  btnPrev.addEventListener('click', () => {
    index = (index - 1 + images.length) % images.length;
    update();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') {
      index = (index + 1) % images.length;
      update();
    } else if (e.key === 'ArrowLeft') {
      index = (index - 1 + images.length) % images.length;
      update();
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
    const carousel = document.querySelector('.models-carousel-images');
    const cards = document.querySelectorAll('.models-carousel-images .model-card');
    const btnNext = document.querySelector('.models-carousel .next');
    const btnPrev = document.querySelector('.models-carousel .prev');

    let index = 0;
    const cardWidth = cards[0].offsetWidth + 20;

    const update = () => {
        carousel.style.transform = `translateX(-${index * cardWidth}px)`;
    };

    btnNext.addEventListener('click', () => {
        if(index < cards.length - Math.floor(carousel.parentElement.offsetWidth / cardWidth)) {
            index++;
            update();
        }
    });

    btnPrev.addEventListener('click', () => {
        if(index > 0){
            index--;
            update();
        }
    });
});

const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
    if (navMenu.style.display === "flex") {
        navMenu.style.display = "none";
    } else {
        navMenu.style.display = "flex";
        navMenu.style.flexDirection = "column";
    }
});
