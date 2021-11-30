const URL = 'https://byui-cit230.github.io/weather/data/towndata.json';
const container = document.querySelector('.container');

fetch(URL)
  .then(function (response) {
    return response.json();
  })
  
  .then(function (jsonObject) {
  
    console.log(jsonObject);

    const towns = jsonObject['towns'];
    const target = towns.filter(
      (towns) =>
        towns.name == 'Preston' ||
        towns.name == 'Soda Springs' ||
        towns.name == 'Fish Haven'
    );

    target.forEach((towns) => {
      console.log(towns)
      
      let town = document.createElement('section');
      let name = document.createElement('h2');
      let motto = document.createElement('h3');
      let yearfounded = document.createElement('p');
      let population = document.createElement('p');
      let rain = document.createElement('p');
      let card = document.createElement('div');
      let pic = document.createElement('img');

      card.setAttribute('class', 'card');
      name.textContent = `${towns.name}`;
      motto.textContent = `${towns.motto}`;
      yearfounded.textContent = `Founded: ${towns.yearFounded}`;
      population.textContent = `Population: ${towns.currentPopulation}`;
      rain.textContent = `Annual Rain Fall: ${towns.averageRainfall.toFixed(0)} '`;
      pic.setAttribute('src', `images/home-images/${towns.photo}`);
      pic.setAttribute('alt', towns.name);

      town.appendChild(name);
      town.appendChild(motto);
      town.appendChild(yearfounded);
      town.appendChild(population);
      town.appendChild(rain);
      card.appendChild(pic);
      card.appendChild(town);
  
     container.appendChild(card);

    })


  });
    
 