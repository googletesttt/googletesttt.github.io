const images = ["0.jpg", "1.jpg", "2.jpg", "3.jpg"];

//chosenImage에 랜덤한 문자열을넣기
const chosenImage = images[Math.floor(Math.random() * images.length)];

//html에 img 만들기
const bgImage = document.createElement("img");

//이미지 경로
bgImage.src = `img/${chosenImage}`;

//이미지를 만들었지만 body에 넣어줘야해서 넣어주는 코드
document.body.appendChild(bgImage);