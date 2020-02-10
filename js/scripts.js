const headers = document.querySelectorAll('h2, h3');
const imageHolders = document.querySelectorAll('.image');

const toggleInView = entries => {
  entries.forEach(entry => {
    if (entry.intersectionRatio >= 0.1) {
      entry.target.classList.add('in-view');
    } else {
      entry.target.classList.remove('in-view');
    }
  });
};
const options = {
  threshold: [0, 0.1, 1]
};
const observer = new IntersectionObserver(toggleInView, options);

headers.forEach(header => observer.observe(header));
imageHolders.forEach(holder => observer.observe(holder));

barba.init({
  transitions: [],
  views: [],
  debug: true
});
