const clock = document.querySelector("h2#clock");

//String() : number를 string으로 변환
//padStart(maxLength, fillstring) : padStart가 적용되는 문자열의 길이가 
//maxLength보다 작다면 부족한 길이만큼 fillstring을 문자열 앞쪽에 채운다.
//padEnd: 뒤쪽에 채운다.

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock();
//setInterval은 호출하려는 function의 이름 뒤에 매 호출 사이에 얼마나 기다릴지 써주면됨
setInterval(getClock, 1000);
