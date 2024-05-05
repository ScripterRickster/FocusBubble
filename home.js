randomquotes = [
  "Success comes with effort, and effort requires practice and resilience",
  "Focusing and Studying are the keys to success",
  "Three Two One...",
  "Practice makes perfect!",
  "No matter how bad it is, always submit it",
]

cur = 0
setInterval(() => {
  setTimeout(() => {
    document.getElementById("quoteTitle").innerText = randomquotes[cur]
    document.getElementById("quoteTitle").style.opacity = 1;
  }, 1000);
  cur++
  cur = cur%randomquotes.length
  document.getElementById("quoteTitle").style.opacity = 0;
}, 5000)
