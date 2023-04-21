let fullWidth = window.innerWidth;
let step = Math.floor(fullWidth / maxQuestions);
let a = Math.floor((step * 100) / fullWidth);

function progrBar() {
  progressBar.style.width = countQuestion * a + "%";
}
