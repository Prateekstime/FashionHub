const bar = document.getElementById('bar');
const close = document.getElementById('close');
const navbar = document.getElementById('navbar');

if(bar){
  bar.addEventListener('click',() => {
    navbar.classList.add('active');
  })
}

if(bar){
  close.addEventListener('click',() => {
    nav.classList.add('active');
  })
}