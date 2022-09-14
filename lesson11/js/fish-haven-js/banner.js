
const saturdayBanner = document.querySelector('.pancakes');

const days = new Date();


if (days.getDay() == 5) {
  saturdayBanner.style.display = 'block';
} else {
  saturdayBanner.style.display = 'none';
}
