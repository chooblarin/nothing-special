window.addEventListener("load", () => {
  const options = {
    rootMargin: "-40px",
    threshold: [0.2]
  };

  const contents = Array.from(document.querySelectorAll(".content"));

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (contents.includes(entry.target) && entry.isIntersecting) {
        entry.target.classList.add("shown");
        obs.unobserve(entry.target);
      }
    });
  }, options);

  contents.forEach(el => observer.observe(el));
});
