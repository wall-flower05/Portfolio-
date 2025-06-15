// script.js

// Typing Effect
new Typed('#typed-text', {
  strings: ["Saru", "a Student", "Web Developer", "Creative Thinker", "Frontend Enthusiast"],
  typeSpeed: 80,
  backSpeed: 50,
  loop: true
});

// Contact Form Alert
document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();
  alert('Thank you for reaching out! I will get back to you soon.');
  this.reset();
});

// Toggle Light/Dark Mode
document.getElementById("modeToggle").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// ScrollReveal Animations
/*ScrollReveal().reveal('.reveal',{
  distance: '50px',
  duration: 1000,
  easing: 'ease-in-out',
  origin: 'bottom',
  reset: false,
  interval: 200
});*/
const reveals=document.querySelectorAll('.reveal');
window.addEventListener('scroll',()=>{
	reveals.forEach(el=>{
		const top=el.getBoundingClientRect().top;
		if(top<window.innerHeight-100){
			el.classList.add('revealed');
		}
	});
});
