const ntButton = document.querySelector(".bottombtn.Note-Taking")
const fcButton = document.querySelector(".bottombtn.flashcards")
const tdlButton = document.querySelector(".bottombtn.todolist")

if(localStorage.getItem("FCOpened") == null){
    fcButton.innerHTML = "Start!"
}else if(localStorage.getItem("FCOpened") == "true"){
    fcButton.innerHTML = "Go!"
}


if(localStorage.getItem("NTOpened") == null){
    ntButton.innerHTML = "Start!"
}else if(localStorage.getItem("NTOpened") == "true"){
    ntButton.innerHTML = "Go!"
}

if(localStorage.getItem("TDLOpened") == null){
    tdlButton.innerHTML = "Start!"
}else if(localStorage.getItem("TDLOpened") == "true"){
    tdlButton.innerHTML = "Go!"
}

ntButton.onclick = function(){
    location.href = "notetake.html"
    localStorage.setItem("NTOpened","true")
}

fcButton.onclick = function(){
    location.href = "studying.html";
    localStorage.setItem("FCOpened","true")
}

tdlButton.onclick = function(){
    location.href = "todo.html";
    localStorage.setItem("TDLOpened","true")
}
