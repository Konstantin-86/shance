//кнопка начать экзамен
examinationBtn.addEventListener("click", function () {
  setTimeout(function () {
    showQuestionEx();
    showAnswersEx();
    hideButtons();
    progressBar.style.display = "none";
    nextQuestionExamen.style.display = "block";
    countTimer = setInterval(timer, 1000);
    showAllQuestions.innerHTML = `${countQuestion} из ${randQ.length}`;
    nextQuestion.style.display = "none";
    mainImg.style.display = "none";
    home.style.display = "block";
    quote.style.display = "none";
  }, 1500);

  animBg();
});

//Показать вопрос
function showQuestionEx() {
  question.innerHTML = data[randQ[0 + countQuestion]].question;
  countQuestion++;

  //показать колво вопросов
  showAllQuestions.innerHTML = `${countQuestion} из ${randQ.length}`;
}
//ответы чекбокс режим экзамен
function showAnswersEx() {
  for (let i = 0; i < data[randQ[0 + currentAnswers]].answers.length; i++) {
    let lbl = document.createElement("label");
    let input = document.createElement("input");
    input.classList.add("input");
    input.type = "radio";
    input.name = "one";
    input.id = "input" + variablesForId;
    lbl.classList.add("input-lbl");
    lbl.htmlFor = "input" + variablesForId;

    list.appendChild(input);
    list.appendChild(lbl);

    lbl.innerHTML = data[randQ[0 + currentAnswers]].answers[i];
    variablesForId++;
  }
}

//кнопка показать сл. вопрос режим экзамен
nextQuestionExamen.addEventListener("click", showNextQuestionEx);

function showNextQuestionEx() {
  let corect = data[randQ[0 + currentAnswers]].correctAnswer;
  const lis = document.querySelectorAll(".input");
  const lis4 = document.querySelectorAll(".input-lbl");
  let lis2 = [...lis].length;
  let lis5 = [...lis].length;

  if (corect == 1 && lis[0].checked == true) {
    resultCorrect++;
  } else if (lis[corect - 1].checked !== true) {
    resultNotCorrect.push(data[randQ[0 + currentAnswers]]);
  } else {
    resultCorrect++;
  }
  console.log(countQuestion);
  console.log(randQ.length);
  if (countQuestion == 5) {
    aboba.style.display = "block";
    aboba.classList.add("aboba-best");
  } else {
    aboba.style.display = "none";
  }
  if (randQ.length == countQuestion) {
    alert("Закончили упражнение");
    clearInterval(countTimer);
    score();
    showWrongAnswers();
    return;
  }

  for (let i = 0; i < lis2; i++) {
    const lis3 = document.querySelector(".input");
    lis3.remove();
  }

  for (let i = 0; i < lis5; i++) {
    const lis6 = document.querySelector(".input-lbl");
    lis6.remove();
  }
  currentAnswers++;
  showQuestionEx();
  showAnswersEx();
}

function getRandomInt(num) {
  while (randQ.length !== 10) {
    let numb = Math.floor(Math.random() * num);
    if (!randQ.includes(numb)) {
      randQ.push(numb);
    }
  }
}
getRandomInt(maxQuestions);

//показать неправильные ответы экзамена
function showWrongAnswers() {
  question.style.display = "none";
  const lis = document.querySelectorAll(".input");
  const lis4 = document.querySelectorAll(".input-lbl");
  let lis2 = [...lis].length;
  let lis5 = [...lis].length;

  for (let i = 0; i < lis2; i++) {
    const lis3 = document.querySelector(".input");
    lis3.remove();
  }

  for (let i = 0; i < lis5; i++) {
    const lis6 = document.querySelector(".input-lbl");
    lis6.remove();
  }

  //показать правильный ответ
  for (let i = 0; i < resultNotCorrect.length; i++) {
    let resultCorrectAnsw = resultNotCorrect[i].correctAnswer;
    //показать вопрос
    let liQes = document.createElement("div");
    liQes.classList.add("list__item-qes");
    showWrongAnswersDiv.appendChild(liQes);
    liQes.innerHTML = resultNotCorrect[i].question;

    let resAnswLength = resultNotCorrect[i].answers.length;
    let count = 0;
    while (count !== resAnswLength) {
      let li = document.createElement("p");
      if (count + 1 == resultCorrectAnsw) {
        li.classList.add("list__item-ans-cor");
      } else {
        li.classList.add("list__item-ans");
      }
      showWrongAnswersDiv.appendChild(li);
      li.innerHTML = resultNotCorrect[i].answers[count];
      count++;
    }
  }
}

function score() {
  scoreShow.style.display = "block";
  if (resultCorrect >= 7) {
    scoreShow.innerHTML = `Красавчик!!! Правильных ответов ${resultCorrect}`;
    scoreShow.style.backgroundColor = "#21b60e;";
  }
  if (resultCorrect >= 5 && resultCorrect < 7) {
    scoreShow.innerHTML = `Неплохо, конечно, но можно и лучше!!! Правильных ответов ${resultCorrect}`;
    scoreShow.style.backgroundColor = "#0d4e05";
  }
  if (resultCorrect < 5) {
    scoreShow.innerHTML = `Ебанный неудачник!!! Правильных ответов ${resultCorrect}`;
    scoreShow.style.backgroundColor = "#ff0000";
  }
}
