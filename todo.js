var toDoList = []
var itemNums = 0

if (localStorage.getItem("TDList") != null && localStorage.getItem("TDList") != ""){
    toDoList = localStorage.getItem("TDList").split(',')
    for(i=0;i<toDoList.length;i++){
        el = document.createElement("div")
        el.setAttribute("id",toString(itemNums))
        itemNums += 1
        el.classList.add("item")
        el.innerText = toDoList[i]
        document.querySelector(".items").append(el)
    }
}

function updateStorage(){
    localStorage.setItem("TDList",toDoList)
}

function submit() {
    if (document.querySelector(".inp").value == "") return
    el = document.createElement("div")
    el.setAttribute("id",toString(itemNums))
    itemNums += 1
    el.classList.add("item")
    el.innerText = document.querySelector(".inp").value
    toDoList.push(document.querySelector(".inp").value)
    document.querySelector(".inp").value = ""
    document.querySelector(".items").append(el)
    updateStorage()
}

function exp() {
    // Export function
    var textToSave = "To-do list:\n";
    for (i=0; i<document.querySelectorAll(".item").length; i++) {
        textToSave += "- "
        textToSave += document.querySelectorAll(".item")[i].innerText
        textToSave += "\n"
        console.log("Lengthened")
    }
	var hiddenElement = document.createElement('a');
	hiddenElement.href = 'data:attachment/text,' + encodeURI(textToSave);
	hiddenElement.target = '_blank';
	hiddenElement.download = 'todo-focusbubble.txt';
	hiddenElement.click();
}


window.onclick = e => {
    console.log(e.target);
    if (e.target.classList.contains("item")) {
        e.target.style = "opacity: 0; height: 0; margin: 0;"
        toDoList.splice(parseInt(e.target.getAttribute("id"),10),1)
        itemNums -= 1
        updateStorage()
        setTimeout(() => {
            e.target.parentNode.removeChild(e.target)
        }, 300)
    }
}


// NOTE: ADD A NUMBER THAT KEEP TRACKS OF THE NUMBER OF ITEMS YOU HAVE DONE TODAY
