const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden"; //string 을 많이 쓰면 변수를 만드는게 좋음
const USERNAME_KEY = "username"

function onLoginSubmit(event) {
    event.preventDefault(); //기본동작을 막아줌
    loginForm.classList.add(HIDDEN_CLASSNAME); //hidden 이라는 class name을 추가해서 form 숨기기
    const username = loginInput.value; //유저이름 변수 저장
    localStorage.setItem(USERNAME_KEY, username); //local storage에 유저정보 저장
    paintGreetings(username); //함수 불러오기
}

function paintGreetings(username){
    greeting.innerText = `Hello ${username}`; //유저이름 h1에넣기
    greeting.classList.remove(HIDDEN_CLASSNAME); // 그리고 hidden class 제거
}

//localstorage 브라우저에 있는 작은 db 같은것 유저정보를 저장 삭제 불러오기 등등 할수있음
//localstorage에 유저정보가 있으면 유저 정보를 변수에 담고
const savedUsername = localStorage.getItem(USERNAME_KEY);

// 유저정보가 null이면
if (savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME); //form 의 hidden class명 지워서 form 을 보여주고
    loginForm.addEventListener("submit", onLoginSubmit); //submit 하면 onLoginSubmit function(함수) 불러옴
    
} else { //유저정보가 null이 아니면
    paintGreetings(savedUsername);
    
}