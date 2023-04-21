// Кнопка практика
practiceBtn.addEventListener("click", startPractice);

function startPractice() {
  setTimeout(function () {
    hideButtons();
    showAnswers();
    showQuestion();
    showTimers.style.display = "none";
    mainImg.style.display = "none";
    home.style.display = "block";
  }, 1500);

  animBg();
}
// анимация фото
function animBg() {
  mainImg.classList.add("anim-bg");
}

//Кнопка рестарт
home.addEventListener("click", () => {
  location.reload();
});

//показать и спрятать кнопки
function hideButtons() {
  practiceBtn.style.display = "none";
  examinationBtn.style.display = "none";
  nextQuestion.style.display = "block";
  question.style.display = "block";
  quote.style.display = "none";
  showAllQuestions.style.display = "block";
  showTimers.style.display = "block";
  progressBar.style.display = "block";
  /* mainImg.style.display = "none"; */
  nextQuestionExamen.style.display = "block";
  title.style.display = "block";
  nextQuestionExamen.style.display = "none";
  title.style.display = "none";
}

//Показать вопрос
function showQuestion() {
  question.innerHTML = data[countQuestion].question;
  countQuestion++;
  //показать колво вопросов
  showAllQuestions.innerHTML = `${countQuestion} из ${maxQuestions}`;
  //показать прогрессбар
  progrBar();
}

//Показать ответ
function showAnswers() {
  for (let i = 0; i < data[currentAnswers].answers.length; i++) {
    let li = document.createElement("li");
    li.classList.add("list__item");
    list.appendChild(li);

    li.innerHTML = data[currentAnswers].answers[i];
    const corect = data[currentAnswers].correctAnswer;
    if (i == corect - 1) {
      li.addEventListener("click", function () {
        li.style.backgroundColor = "#0a7c0a";
        setTimeout(function () {
          li.style.backgroundColor = "#669ed3";
        }, 1000);
      });
    } else {
      li.addEventListener("click", function () {
        li.classList.add("animation");
        setTimeout(function () {
          li.classList.remove("animation");
        }, 500);
      });
    }
  }
}

//Кнопка показать сл. вопрос
nextQuestion.addEventListener("click", showNextQuestion);
function showNextQuestion() {
  if (data.length == countQuestion) {
    alert("Закончили упражнение");
    clearInterval(countTimer);
    return;
  }
  showQuestion();
  const lis = document.querySelectorAll(".list__item");
  lis2 = [...lis].length;
  for (let i = 0; i < lis2; i++) {
    const lis3 = document.querySelector(".list__item");
    lis3.remove();
  }
  currentAnswers++;
  showAnswers();
}
