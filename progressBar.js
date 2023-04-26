let fullWidth = window.innerWidth;
let step = Math.floor(fullWidth / maxQuestions);

function progrBar() {
  progressBar.style.width = countQuestion * step + "px";
}
