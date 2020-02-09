const headers = document.querySelectorAll('h2, h3');

const callback = entries => {
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
const observer = new IntersectionObserver(callback, options);

headers.forEach(header => observer.observe(header));
