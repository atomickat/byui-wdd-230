const URL = 'https://byui-cit230.github.io/weather/data/towndata.json';


fetch(URL)
  .then(function (response) {
    return response.json();
  })
  
  .then(function (jsonObject) {
  
    temporary checking for valid response and data parsing
    console.log(jsonObject);

      const towns = jsonObject['towns'];
    
    for (let i = 0; i < towns.length; i++) {

      const container = document.querySelector('.events');
      let card = document.createElement('section');


      let h4 = document.createElement('h4');
      h4.textContent = towns[6].events;
    //   h4.textContent = `${towns[i].name} ${towns[i].lastname}`;

      container.appendChild(card)
      card.appendChild(h4);
  
      document.querySelector('div.events').appendChild(card);
      
    }
  });

