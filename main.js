let form = document.getElementById("form");
let input = document.getElementById("input-field");
let msg = document.getElementById("msg");
let posts = document.getElementById("posts");

form.addEventListener("submit", (event) => {
  console.log("button clicked");
  event.preventDefault(); // prevent default behaviour of form

  formValidation();
});

let formValidation = () => {
  if (input.value === "") {
    console.log("canoot submit blank field");
    msg.innerHTML = "Input field cannot be blank";
  } else {
    console.log("success");
    msg.innerHTML = "";
    acceptData();
  }
};

let data = {};
let acceptData = () => {
  data["text"] = input.value;
  console.log(data);
  // localStorage.setItem("data", JSON.stringify(data));
  createPost();
};

let createPost = () => {
  posts.innerHTML += `
    <div>
    <p>${data.text}</p>
    <span class = "options">
    <button onclick="editPost(this)" class="fas fa-edit"></button>
    <button onclick="deletePost(this)"class="fas fa-trash-alt"></button>
    </span>
    </div>
    `;
  input.value = ""; //input field empty after posting value
};

let deletePost = (event) => {
  event.parentElement.parentElement.remove();
  // localStorage.setItem("data", JSON.stringify(data));
};

let editPost = (event) => {
  let selectedTask = event.parentElement.parentElement;
  input.value = selectedTask.children[0].innerHTML;

  deletePost(event);
};
