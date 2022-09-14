const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=a738ef502266a0b1d2632c134155ebb1";

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    
    const t = jsObject.main.temp.toFixed(0);
    const s = jsObject.wind.speed;
    let answer = windChill(t, s);

    document.querySelector('#wind-chill').textContent = answer.toFixed(0);

    function windChill(tempF, speed) {
      let answer = 35.74 + 0.6215 * tempF - 35.75 * (speed ** 0.16) + 0.4275 * tempF * (speed ** 0.16);

      return answer;
    }
    
    let currentCondition = document.querySelector('#current');
    let tempHigh = document.querySelector('#high');
    let tempLow = document.querySelector('#low');
    let humidity = document.querySelector('#humid');
    let speed = document.querySelector('#wind-speed');
    

    currentCondition.textContent = jsObject.weather[0].main;
    tempHigh.textContent = jsObject.main.temp_max.toFixed(0);
    tempLow.textContent = jsObject.main.temp_min.toFixed(0);
    humidity.textContent = jsObject.main.humidity;
    speed.textContent = jsObject.wind.speed.toFixed(0);

  });

