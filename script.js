const profile = document.querySelector('.profile');
const skills = document.querySelector('.skills');
const projects = document.querySelector('.projects');
const contact = document.querySelector('.contact');

profile.addEventListener('click', function() {
  profile.classList.add('active');
  skills.classList.remove('active');
  projects.classList.remove('active');
  contact.classList.remove('active');
});

skills.addEventListener('click', function() {
  profile.classList.remove('active');
  skills.classList.add('active');
  projects.classList.remove('active');
  contact.classList.remove('active');
});

projects.addEventListener('click', function() {
  profile.classList.remove('active');
  skills.classList.remove('active');
  projects.classList.add('active');
  contact.classList.remove('active');
});

contact.addEventListener('click', function() {
  profile.classList.remove('active');
  skills.classList.remove('active');
  projects.classList.remove('active');
  contact.classList.add('active');
});

