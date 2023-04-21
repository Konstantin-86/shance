//Таймер

function timer() {
  let ours = Math.floor(fullTime / 60);
  let seconds = fullTime - ours * 60;
  if (fullTime == 0) {
    clearInterval(countTimer);
    alert("Время вышло");
    score();
    showWrongAnswers();
  }
  if (ours < 10) {
    taimerMin.innerHTML = `0${ours}`;
  } else {
    taimerMin.innerHTML = `${ours}`;
  }
  if (seconds < 10) {
    taimerSec.innerHTML = `0${seconds}`;
  } else {
    taimerSec.innerHTML = `${seconds}`;
  }
  fullTime--;
}
