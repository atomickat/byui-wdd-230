
function main() {
   let t = 32;
  let s = 15;
      
  let answer = windChill(t, s);

  document.querySelector('#wind-chill').textContent = answer.toFixed(0);
}
 


function windChill(tempF, speed) {
  let answer = 35.74 + 0.6215 * tempF - 35.75 * (speed ** 0.16) + 0.4275 * tempF * (speed ** 0.16);

  return answer;
}

main();