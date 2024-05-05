questions = [
    ["What style do you prefer when studying?", ["Cornell Method","Outline Method","Mind Mapping"]],
    ["What is your profession?", ["Student","Teacher","Other"]],
    ["What is your age?", ["9-12","13-18","18+"]]
]
settings = [
    "",
    "",
    ""
]

cur = 0
document.querySelector(".submit").onclick = function() {
    if (cur == questions.length-1) {
        console.log("Redirects")
        window.location.replace("/studyhome.html");
    } else {
        cur++
        displayquestion(cur)
    }
    
}

function displayquestion(n) {
    console.log("Clicked")
    document.querySelector(".choices").innerText = ""
    if (n == questions.length) return;
    question = questions[n][0];
    answers = questions[n][1];
    document.querySelector(".question").innerText = question;
    for (j=0; j<answers.length; j++) {
        ans = answers[j];
        b = document.createElement("div")
        b.classList.add("btn")
        b.innerText = answers[j]
        b.tagnum = j
        document.querySelector(".choices").append(b)
    }
}

document.onclick = (e) => {
    if (cur != questions.length) {
        el = e.target
        settings[cur] = questions[cur][1][el.tagnum]
        for (i=0; i<document.querySelectorAll(".btn").length; i++) {
            if (i == el.tagnum) {
                document.querySelectorAll(".btn")[i].style = "background-color: green"
            } else {
                document.querySelectorAll(".btn")[i].style = "background-color: rgb(5, 2, 62)"
            }
            
        }
        console.log(settings)
    }
}
displayquestion(0)
