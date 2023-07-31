"strict";
AOS.init();

const inputText = document.querySelector(".form-control");
const button = document.querySelector(".btn");
const list = document.querySelector(".list");

let todos = localStorage.getItem("todos");
let innertext = "";

if (!todos) {
  todos = "[]";
}
todos = JSON.parse(todos);
init(todos);

//reading the input and adding it
const Readinput = () => {
  let id = todos.length + 1;

  const todo = {
    title: inputText.value,
    id: id,
  };
  todos.push(todo);

  todos.forEach((todo, id) => {
    innertext = `<div class="list-item " id=${todo.id}>
    <div>
    <input
      class="form-check-input"
      type="checkbox"
      value=""
      id="flexCheckDefault"
    />
    <label id="checkbox" class="form-check-label" for="flexCheckDefault"
      >${todo.title}
    </label>
    </div>
    
    <button class="delete" >Delete</button>    
  </div>`;
  });
  list.innerHTML += innertext;
  localStorage.setItem("todos", JSON.stringify(todos));
  inputText.value = "";
};

list.addEventListener("click", (e) => {
  const target = e.target;
  if (e.target.classList.contains("delete")) {
    todos.filter((todo) => {
      return todo.id != Number(e.target.parentNode.id);
    });
    target.parentNode.remove();
  }

  localStorage.setItem("todos", JSON.stringify(todos));
});

button.addEventListener("click", Readinput);

function init(todos) {
  todos.forEach((todo, id) => {
    innertext = `<div class="list-item " id=${todo.id}>
    <div>
    <input
      class="form-check-input"
      type="checkbox"
      value=""
      id="flexCheckDefault"
    />
    <label id="checkbox" class="form-check-label" for="flexCheckDefault"
      >${todo.title}
    </label>
    </div>
  
    <button class="delete" >Delete</button>    
  </div>`;
  });
  list.innerHTML += innertext;
}
