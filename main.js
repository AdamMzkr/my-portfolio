// works side menubar(dot menu)

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



 // show adn hidden menu
  const mobileMenu=document.querySelector('.mobile-menu')
  const iconH =document.querySelector('#nav-icon3')

  iconH.addEventListener('click',()=>{
   iconH.classList.toggle('open');
   mobileMenu.classList.toggle('active-nav');
  }
  )
  // colored active links
  const links = document.querySelectorAll(".link");

  for (let i = 0; i < links.length; i++) {
    
    links[i].addEventListener("click", function() {
      var current = document.getElementsByClassName("active-item");
      current[0].className = current[0].className.replace(" active-item", "");
      this.className += " active-item";
      })
    }

  

    //contact form

    //get the form by its id
const form = document.getElementById("contact-form"); 


const formEvent = form.addEventListener("submit", (event) => {
  event.preventDefault();
  let mail = new FormData(form);
  sendMail(mail);
})

const sendMail = (mail) => {
  //1.
  fetch("/send", {
    method: "post", //2.
    body: mail, //3.

  }).then((response) => {
    return response.json();
  });
};


 


  // show adn hidden menu
  const mobileMenu=document.querySelector('.mobile-menu')
  const iconH =document.querySelector('#nav-icon3')

  iconH.addEventListener('click',()=>{
   iconH.classList.toggle('open');
   mobileMenu.classList.toggle('active-nav');
  }
  )
  // colored active links
  const links = document.querySelectorAll(".link");

  for (let i = 0; i < links.length; i++) {
    
    links[i].addEventListener("click", function() {
      var current = document.getElementsByClassName("active-item");
      current[0].className = current[0].className.replace(" active-item", "");
      this.className += " active-item";
      })
    }

  
  
