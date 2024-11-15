const myCarouselElement = document.querySelector('#carouselContainer')

const carousel = new bootstrap.Carousel(myCarouselElement, {
  interval: 2000,
  touch: false
})