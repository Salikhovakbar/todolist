const btnCreateEl = document.getElementById("create-plan-btn");
const inputAddEl = document.getElementById("input-add-plan");
const closeEl = document.querySelector(".bi-x-circle");
const taskEl = document.querySelector(".goals");
const formEl = document.getElementById("form-add-task");
const btnDelete = document.getElementById("btn-delete");
formEl.addEventListener("submit", (e) => {
    e.preventDefault();
    const boxEl = document.createElement("div");
    const date = new Date();
    const timeEl = date.getHours() + ":" + date.getMinutes() 
    taskEl.appendChild(boxEl);
    boxEl.className = "consequence-box"
    const taskText = document.createElement("p"); 
    boxEl.appendChild(taskText);
    const btnboxs = document.createElement("div");
    boxEl.appendChild(btnboxs);
    const completeBtn = document.createElement("button");
    const editBtn = document.createElement("button");
    const deleteBtn = document.createElement("button");
    const time = document.createElement("button");
    btnboxs.appendChild(completeBtn);
    btnboxs.appendChild(editBtn);
    btnboxs.appendChild(deleteBtn);
    btnboxs.appendChild(time);
    completeBtn.innerHTML = ' <i class="bi bi-check2-all"></i> <br>  Complete';
    editBtn.innerHTML = ' <i class="bi bi-pencil-square"></i> <br> Edit';
    deleteBtn.innerHTML = ' <i class="bi bi-trash3"></i> <br> Delete';
    time.innerHTML = ' <i class="bi bi-clock-history"></i> <br>' + timeEl;
taskText.innerHTML = inputAddEl.value;
btnboxs.className = "btn-box"
completeBtn.addEventListener("click", () => {
    taskText.classList.toggle("completeBtnStyle")
})
editBtn.addEventListener("click", () => {
if (taskText.hasAttribute("contenteditable")){
    taskText.removeAttribute("contenteditable");
    editBtn.innerHTML = ' <i class="bi bi-check2-all"></i> <br> Edit';
    taskText.style.border = "none"
}
else{
    taskText.setAttribute("contenteditable", true);
    editBtn.innerHTML = '<i class="bi bi-pencil"></i>'
    taskText.style.border = "1px solid black"
    taskText.style.borderRadius = "8px"
    taskText.style.outline = "none"
}
  })
  deleteBtn.addEventListener("click", () => {
boxEl.remove();
  })
} )
closeEl.addEventListener("click", () => {
    inputAddEl.value = "";
})
btnDelete.addEventListener("click", () => {
taskEl.innerText = "";
})