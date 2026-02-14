document.addEventListener('DOMContentLoaded', () => {
  const slider = document.querySelector('.announcement-slider');
  if (!slider) return;

  const slides = slider.querySelectorAll('.announcement-slide');
  const intervalTime = parseInt(slider.dataset.interval, 10) || 3000;

  let currentIndex = 0;
  let direction = 'left'; // alternate direction
  let intervalId = null;

  function showNextSlide() {
    const currentSlide = slides[currentIndex];
    const nextIndex = (currentIndex + 1) % slides.length;
    const nextSlide = slides[nextIndex];

    // Clean classes
    slides.forEach(slide => {
      slide.classList.remove(
        'is-active',
        'slide-in-left',
        'slide-in-right',
        'slide-out-left',
        'slide-out-right'
      );
    });

    // Outgoing animation
    currentSlide.classList.add(
      direction === 'left' ? 'slide-out-left' : 'slide-out-right'
    );

    // Incoming setup
    nextSlide.classList.add(
      direction === 'left' ? 'slide-in-left' : 'slide-in-right'
    );

    // Force reflow
    nextSlide.offsetHeight;

    // Activate incoming slide
    nextSlide.classList.add('is-active');

    currentIndex = nextIndex;
    direction = direction === 'left' ? 'right' : 'left';
  }

  function startSlider() {
    intervalId = setInterval(showNextSlide, intervalTime);
  }

  function stopSlider() {
    clearInterval(intervalId);
  }

  // Init first slide
  slides[0].classList.add('is-active');

  startSlider();

  slider.addEventListener('mouseenter', stopSlider);
  slider.addEventListener('mouseleave', startSlider);
});

