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
      let card = document.createElement('div');
      let pic = document.createElement('img');
      let town = document.createElement('section');
      let name = document.createElement('h2');
      let motto = document.createElement('h3');
      let yearfounded = document.createElement('p');
      let population = document.createElement('p');
      let rain = document.createElement('p');

      pic.setAttribute('src', `images/home-images/${towns.photo}`);
      pic.setAttribute('alt', towns.name);
      card.setAttribute('class', 'card');
      name.textContent = `${towns.name}`;
      motto.textContent = `${towns.motto}`;
      yearfounded.textContent = `Founded: ${towns.yearFounded}`;
      population.textContent = `Population: ${towns.currentPopulation}`;
      rain.textContent = `Annual Rain Fall: ${towns.averageRainfall}`;

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
    
 