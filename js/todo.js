const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

// toDos array를 localStorage에 집어넣는것
function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
  const li = event.target.parentElement;  // 버튼 누른 부모를 가져옴 li 를 찾을수있다
  li.remove(); //li 찾은것을 없애는것
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id)); //우리가 클릭한 li.id와 다른 toDo는 남겨두고 싶다
  saveToDos();
}


function paintToDo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  span.innerText = newTodo.text; //  span에 텍스트를 넣음
  const button = document.createElement("button");
  button.innerText = "X";
  button.addEventListener("click", deleteToDo); //버튼 눌렀을때
  li.appendChild(span); //li 안에 span 넣고
  li.appendChild(button);//li 안에 button 넣고
  toDoList.appendChild(li); // list에 li를 놓는다
}


function hacdleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value; // input의 현재 value를 새로운 변수에 넣는것
  toDoInput.value = ""; // 그 이후에 초기화 해도 newTodo에는 값 있음
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoObj); // 텍스트를 toDos 배열에 push 하고
  paintToDo(newTodoObj); //화면에 toDo를 그려줌
  saveToDos();

}

//사용자가 submit 하면
toDoForm.addEventListener("submit", hacdleToDoSubmit);

//localStorage에 있는 todos 항목에 있는 값을 savedTodos에 넣음
const savedToDos = localStorage.getItem(TODOS_KEY);

//savedToDos가 null이 아니면 (값이 존재하면)
if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos); // JSON.parse 가 localStorage에서 온 string을 살아있는 javascript object로 변하게 만듬
  toDos = parsedToDos;
  //forEach는 parsedToDos에 있는 각각의 item에 대해 함수를 실행함
  //예) paintToDo({text:"a", id:121212121}); 이런값이 들어간다는소리
  parsedToDos.forEach(paintToDo);
}

function sexyFilter() {

}

