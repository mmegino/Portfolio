// toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

// scroll section
let navLinks = document.querySelectorAll('header nav a');



// scroll sections
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
    

        if(top >= offset && top < offset + height) {
            // active navbar links
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
            // active sections for animation on scroll
            sec.classList.add('show-animate');
        }
        // Use this if you want animation that repeats on scroll
        // else {
        //     sec.classList.remove('show-animate');
        // }
    });

    // sticky header
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    // remove toggle icon and navbar when click navbar links (scroll)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

    // animation footer on scroll
    let footer = document.querySelector('footer');

    footer.classList.toggle('show-animate', this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight);
}

let connect = document.getElementById("connect");
let connectLink = "https://www.linkedin.com/in/manuel-megino-48889a250/";
connect.addEventListener("click", function() {
    // Open the link when the paragraph is clicked
    window.open(connectLink, "_blank");
});

//Smooth scrolling
let currentSection = 0;
const sections = document.querySelectorAll('section');
let lastScrollTime = Date.now();
let scrolling = false;
const scrollDelay = 500;

// Prevent the window from scrolling to an intermediate section
document.querySelectorAll('nav a').forEach((link, index) => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    scrolling = true;
    currentSection = index;
    sections[currentSection].scrollIntoView({ behavior: 'smooth' });
    setTimeout(() => {
      scrolling = false;
    }, scrollDelay);
  });
});

// Reload go to Home Section
  window.addEventListener('load', function () {

    if (performance.navigation.type === 1) {
      document.body.style.overflow = 'auto'; // Allow scrolling without splash screen
      window.scrollTo(0, document.getElementById('home').offsetTop);
    }
  });



  let header = document.querySelector('.header');
  let timeoutId;
  
  // Function to hide the header
  const hideHeader = () => {
    header.classList.add('hidden');
  };
  
  // Function to reset the timeout and show the header
  const resetTimeout = () => {
    header.classList.remove('hidden');
    clearTimeout(timeoutId);
    timeoutId = setTimeout(hideHeader, 5000);
  };
  
  // Event listener for mousemove and scroll events
  document.addEventListener('mousemove', resetTimeout);
  document.addEventListener('scroll', resetTimeout);
  
  // Initial setup to hide header after 5 seconds on page load
  timeoutId = setTimeout(hideHeader, 5000);
  

  