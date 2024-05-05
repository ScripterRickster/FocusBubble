var qAndAns = []

var currIndex = 0

if(localStorage.getItem("FCV2") != null){
    const tempArr = localStorage.getItem("FCV2").split(',')
    var newArr = []
    for(i=0;i<tempArr.length;i++){
        newArr.push(tempArr[i])
        if(i%2 == 1){
            qAndAns.push(newArr)
            newArr = []
        }
    }
}

var onAnswer = false
var canDelete = false

const mainFC = document.querySelector(".mainfc")
const arrowR = document.querySelector(".arrow.right")
const arrowL = document.querySelector(".arrow.left")
const header = document.querySelector(".headerfc")
const removeBTTN = document.querySelector(".remove")

if(qAndAns.length>0){
    varQ = qAndAns[currIndex][0]
    varA = qAndAns[currIndex][1]
    canDelete = true
    removeBTTN.style.opacity = 1
}else{
    varQ = "[PLEASE INPUT A QUESTION]"
    varA = "[PLEASE INPUT AN ANSWER]"
    removeBTTN.style.opacity = 0.2
}
mainFC.innerHTML = varQ
header.innerHTML = "QUESTION"

function updateArrows(){
    if(currIndex <= 0){
        arrowL.style.opacity = 0.2
    }else{
        arrowL.style.opacity = 1
    }

    if(currIndex >= qAndAns.length - 1){
        arrowR.style.opacity = 0.2
    }else{
        arrowR.style.opacity = 1
    }
}
updateArrows()
mainFC.onclick = function(){
    if(header.innerHTML == "QUESTION"){
        mainFC.innerHTML = varA
        onAnswer = true
        header.innerHTML = "ANSWER"
    }else{
        mainFC.innerHTML = varQ
        onAnswer = false
        header.innerHTML = "QUESTION"
    }
}

arrowL.onclick = function(){
    switchCard("L")
}

arrowR.onclick = function(){
    switchCard("R")
}



function switchCard(d){
    header.innerHTML = "QUESTION"
    if(qAndAns.length > 1){

        if((currIndex > 0) && d == "L"){
            currIndex -= 1
        }else if((currIndex < qAndAns.length - 1) && d == "R"){
            currIndex += 1
        }
        
        varQ = qAndAns[currIndex][0]
        varA = qAndAns[currIndex][1]

        mainFC.innerText = varQ

    }else if(qAndAns.length == 1){
        currIndex = 0
        varQ = qAndAns[currIndex][0]
        varA = qAndAns[currIndex][1]
    }

    updateArrows()
}

function addQuestion(txt){
    if (txt){
        qAndAns.push(txt)
        if(qAndAns.length <= 1){
            mainFC.innerHTML = txt[0]
            varQ = txt[0]
            varA = txt[1]
        }
        localStorage.setItem("FCV2",qAndAns)
        canDelete = true
        removeBTTN.style.opacity = 1

       updateArrows()
    }
}

function removeQuestion(){
    index = currIndex
    if(canDelete == true){
        qAndAns.splice(currIndex,1)
        localStorage.setItem("FCV2",qAndAns)
        header.innerHTML = "QUESTION"
        if(qAndAns.length == 0){
            canDelete = false
            currIndex = 0
            varQ = "[PLEASE INPUT A QUESTION]"
            varA = "[PLEASE INPUT AN ANSWER]"
            removeBTTN.style.opacity = 0.2
        }else{
            currIndex = 0
            varQ = qAndAns[currIndex][0]
            varA = qAndAns[currIndex][1]
        }
        mainFC.innerHTML = varQ
        updateArrows()
    }
}
removeBTTN.onclick = function(){
    removeQuestion()
}

document.getElementById("submitButton").onclick = function(){
    q = document.getElementById("q").value
    a = document.getElementById("a").value
    addQuestion([q,a])
    document.getElementById("q").value = ""
    document.getElementById("a").value = ""
}




