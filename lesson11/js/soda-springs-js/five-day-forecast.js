const fiveDay = "https://api.openweathermap.org/data/2.5/forecast?id=5607916&units=imperial&appid=a738ef502266a0b1d2632c134155ebb1";


fetch(fiveDay)
  .then(response => response.json())
  .then(jsObject => {
    console.log(jsObject);

    
    const sixOclock = jsObject.list.filter(x => x.dt_txt.includes('18:00:00'));
    console.log(sixOclock);

    const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    let day = 0;

    
      
    sixOclock.forEach(forecast => {
      let theDate = new Date(forecast.dt_txt);
      
      // console.log(theDate);
      document.querySelector(`#day${day + 1}`).textContent = weekdays[theDate.getDay()];
      document.querySelector(`#high${day + 1}`).textContent = forecast.main.temp_max.toFixed(0);
      document.querySelector(`#icon${day + 1}`).setAttribute('src', `https://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png`);
      document.querySelector(`#icon${day + 1}`).setAttribute('alt', forecast.weather[0].description);
    
      day++;
     
    });

 
  
  });


