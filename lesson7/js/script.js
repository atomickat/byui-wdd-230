document.getElementById("copyrightyear").textContent = new Date().getFullYear();


const currentyear = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };

document.getElementById("currentyear").textContent = new Date().toLocaleDateString('en-US', currentyear);

const menubutton = document.querySelector('.menu');
const mainnav = document.querySelector('.navigation')

menubutton.addEventListener('click', () => { mainnav.classList.toggle('responsive') }, false);

window.onresize = () => { if (window.innerWidth > 760) mainnav.classList.remove('responsive') };


const imagesToLoad = document.querySelectorAll("img[data-src]");

const imgOptions = {
  threshold: 0,
  rootMargin: "0px 0px 50px 0px"
};

const loadImages = (image) => {
  image.setAttribute('src', image.getAttribute('data-src'));
  image.onload = () => { image.removeAttribute('data-src');};
};

if ('IntersectionObserver' in window) {
    const imgObserver = new IntersectionObserver((items, observe) => {
        items.forEach(item => {
          if (item.isIntersecting) {
              loadImages(item.target);
              observe.unobserve(item.target);
          }
        });
    }, imgOptions);

      imagesToLoad.forEach(image => {
      imgObserver.observe(image);
    });
}
else {
    imagesToLoad.forEach((img) => {
      loadImages(img);
    });
}





