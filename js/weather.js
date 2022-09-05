const API_KEY = "cc7637ce962e0c5f46362b1e56cf478d";

function onGeoOk(position) {
  //위치를 받을 때
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;


  fetch(url)
    .then(response => response.json())
    .then(data => {
      const iconimg = document.createElement("img");
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      iconimg.setAttribute('class', 'iconimg');
      iconimg.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
      document.body.appendChild(iconimg);
      city.innerText = data.name;
      weather.innerText = `${data.main.temp} ${data.weather[0].main} `;
    });
}

function onGeoError() {
  // 위치를 받는 데 문제가 발생했을때
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

