function toggleBanner() {
  document.querySelector('.navigation').classList.toggle('responsive');
}

const days = new Date();
if (days.getDate() == 1) {
  document.querySelector('.pancakes').style.display = 'block';
}

// const banner = document.querySelector('.cooking');
// const dayOfWeek = 
// const banner = document.querySelector('.pancakes');
// banner.addEventListener('load',('pancakes') => {if (dayOfWeek == 4)});

