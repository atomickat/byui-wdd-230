const URL = 'https://byui-cit230.github.io/weather/data/towndata.json';


fetch(URL)
  .then(function (response) {
    return response.json();
  })
  
  .then(function (jsonObject) {
  
    console.log(jsonObject);

      const towns = jsonObject['towns'];
    
    // for (let i = 0; i < towns.length; i++) {

      const container = document.querySelector('.events');
      let card = document.createElement('section');


      let x = document.createElement('h4');
    x.textContent = towns[6].events[0];
    
    let y = document.createElement('h4');
    y.textContent = towns[6].events[1];
    
    let z = document.createElement('h4');
      z.textContent = towns[6].events[2];
    //   h4.textContent = `${towns[i].name} ${towns[i].lastname}`;

      container.appendChild(card)
      card.appendChild(x);
      card.appendChild(y);
      card.appendChild(z);
  
      document.querySelector('div.events').appendChild(card);
      
    // }
  });

