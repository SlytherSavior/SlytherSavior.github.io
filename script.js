function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  window.scrollTo({
    top: section.offsetTop - document.getElementById('navbar').offsetHeight,
    behavior: 'smooth'
  });
}

window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  if (window.scrollY > 50) {
    navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
    navbar.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.1)';
  } else {
    navbar.style.backgroundColor = 'transparent';
    navbar.style.boxShadow = 'none';
  }
});

document.addEventListener("DOMContentLoaded",function(){

  





});