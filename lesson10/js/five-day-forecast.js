const fiveDay = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&appid=a738ef502266a0b1d2632c134155ebb1";

fetch(fiveDay)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);

    // let currentCondition = document.querySelector('#current');
    // currentCondition.textContent = jsObject.weather[0].main;

    let tempHigh1 = document.querySelector('#high');
    tempHigh1.textContent = jsObject.list[6].main.temp_max.toFixed(0);

    // let tempLow = document.querySelector('#low');
    // tempLow.textContent = jsObject.main.temp_min.toFixed(0);

    // let humidity = document.querySelector('#humid');
    // humidity.textContent = jsObject.main.humidity;

    // let speed = document.querySelector('#wind-speed');
    // speed.textContent = jsObject.wind.speed.toFixed(0);
    
    // const t = jsObject.main.temp.toFixed(0);
    // const s = jsObject.wind.speed;
    // let answer = windChill(t, s);

    // document.querySelector('#wind-chill').textContent = answer.toFixed(0);

    // function windChill(tempF, speed) {
    //   let answer = 35.74 + 0.6215 * tempF - 35.75 * (speed ** 0.16) + 0.4275 * tempF * (speed ** 0.16);

    //   return answer;
    // }
    
   

  });

  
  // ------- days of the week rotate in five day forecast
  // -------- out put day of the week per from the date