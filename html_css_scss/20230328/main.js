// https://api.openweathermap.org/data/2.5/weather?lat=37.5387846&lon=127.1271101&appid=d9d381ddd3817a9f1a138fe6ba049870

const APIKEY = "d9d381ddd3817a9f1a138fe6ba049870";

const weatherIcon = document.querySelector(".weatherIcon");
const weatherTemp = document.querySelector(".weatherTemp");

navigator.geolocation.getCurrentPosition(
  (position) => {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${APIKEY}`;

    fetch(url) //인자 하나만 들어옴/ http 주소 / 내장 API
      .then((response) => response.json()) //다이렉트로 제인슨으로 오지 않아서 .then으로 받아줌
      .then((data) => {
        weatherTemp.innerText =
          data.name + "," + parseInt(data.main.temp) + "℃";

        weatherIcon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`; //weather이 배열로 되어 있어 타고들어감
      });
    //형태가 크게 달라지지 않음
  },
  () => alert("no")
);

//get : 주소만 입력해서 바로 확인
// const a = async () => {
//   const response = await axios.get(url);

//post : 주소값으로는 안됨
//   const response = await axios.post(
//     url,
//     {
//       lat,
//       lon,
//     },
//     {
//       headers: {
//         key: APIKEY,
//       },
//     }
//   );

//   console.log(response.data);
// };
