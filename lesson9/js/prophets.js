
// const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';


// fetch(requestURL)
//   .then(function (response) {
//     return response.json();
//   })
  
//   .then(function (jsonObject) {
  
    // temporary checking for valid response and data parsing
    // console.table(jsonObject);

    //   const prophets = jsonObject['prophets'];
    
    // for (let i = 0; i < prophets.length; i++) {

    //   const container = document.querySelector('.cards');
    //   let card = document.createElement('section');

    //   let h2 = document.createElement('h2');
      // h2.textContent = prophets[i].name + ' ' + prophets[i].lastname;
      // h2.textContent = `${prophets[i].name} ${prophets[i].lastname}`;

      // let dob = document.createElement('p');

      // dob.textContent = `Birthdate: ${prophets[i].birthdate}`;
      // dob.textContent = prophets[i].birthdate;

  //     let bp = document.createElement('p');
  //     bp.textContent = `Brirthplace: ${ prophets[i].birthplace}`;

  //     let image = document.createElement('img');
  //     image.setAttribute('src', prophets[i].imageurl);

  //     container.appendChild(card)
  //     card.appendChild(h2);
  //     card.appendChild(dob);
  //     card.appendChild(bp);
  //     card.appendChild(image);

  //     document.querySelector('div.cards').appendChild(card);
      
  //   }
  // });

// ----- another way to code jason -----

const URL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';

fetch(URL)
  .then(response => {
    return response.json();
  }).then(jasonObject => {
    console.log(jasonObject);
    const prophets = jasonObject['prophets'];
    const main = document.querySelector('main');
    for (let i = 0; i < prophets.length; i++) {
      const section = document.createElement('section');
      section.innerHTML = `<h1>${prophets[i].name} ${prophets[i].lastname}<h1>
      <img src="${prophets[i].imageurl}" alt="${prophets[i].name} - ${prophets[i].order}"/>
      <p>
        Date: ${prophets[i].birthdate} <br>
        Brithplace: ${prophets[i].birthplace}
      </p>`
      main.appendChild(section);
    }
  })


  

  