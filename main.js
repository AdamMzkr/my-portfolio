const observer = new IntersectionObserver(entries => {
    // Loop over the entries
    entries.forEach(entry => {
      // If the element is visible
      if (entry.isIntersecting) {
        // Add the animation class
        entry.target.classList.add('animate-drop');
      }
    });
  });

  function updateList() {
    const titles = [...document.querySelectorAll('h1, h2')].sort((a, b) => {
      return Math.abs(a.getBoundingClientRect().top) - Math.abs(b.getBoundingClientRect().top);
    });
  
    document.querySelectorAll(".active").forEach(c => c.classList.remove("active"));
    
    document.querySelectorAll(".nav-square")[[...document.querySelectorAll('h1, h2')].indexOf(titles[0])].classList.add("active");
  }
  
  updateList();
  window.addEventListener('scroll', () => {
      updateList();
  })
  
  observer.observe(document.querySelector('#p1'));
  observer.observe(document.querySelector('#p2'));
  observer.observe(document.querySelector('#p3'));
  observer.observe(document.querySelector('#about'));
  
