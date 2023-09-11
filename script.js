const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
  if (inputBox.value === "") {
    alert("You must write something!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value; //text added in the inout field will go into the li
    listContainer.appendChild(li); // li will be displayed under list-container
    let span = document.createElement("span");
    span.innerHTML = "\u00d7"; //add cross icon
    li.appendChild(span);
  }
  //clear input field after add
  inputBox.value = "";
  saveData();
}

listContainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      //check if we clicked on li
      e.target.classList.toggle("checked"); // add checked classname if it is there or remove it if it is already there: toggle
      saveData();
    } else if (e.target.tagName === "SPAN") {
      //if clicked on span, delete.
      e.target.parentElement.remove(); //delete parentElement(li element)
      saveData();
    }
  },
  false
);

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
  listContainer.innerHTML = localStorage.getItem("data");
}
showTask();
