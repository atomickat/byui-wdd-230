const fiveDay = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&appid=a738ef502266a0b1d2632c134155ebb1";


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
      // ---------- api shows the same temp for temp_min & temp_max ----------
      // document.querySelector(`#low${day + 1}`).textContent = forecast.main.temp_min.toFixed(0);
  
      day++;
     
    });

 
  
  });


