const questions = [
    {
      question: "1. Which planet is known as the red planet?",
      answers: [
        "Earth",
        "Mars",
        "Venus",
        "Jupiter"
      ],
      correct: "Mars"
    },
    {
      question: "2. Who invented the light bulb?",
      answers: [
        "Albert Einstein",
        "Isaac Newton",
        "Thomas Edison",
        "Alexander Graham Bell"
      ],
      correct: "Thomas Edison"
    },
    {
      question: "3. What is the smallest bone in the human body?",
      answers: ["Stapes", "Femur", "Ulna", "Tibia"],
      correct: "Stapes"
    },
    {
      question: "4. Which is the longest river in the world?",
      answers: ["Yamuna", "Ganga", "Nile", "Kaveri"],
      correct: "Nile"
    },
    {
      question: "5. How many continents are there on Earth?",
      answers: ["5", "6", "7", "8"],
      correct: "7"
    }
  ];
  
  let index = 0;
  let score = 0;
  
  const questionEl = document.getElementById("question");
  const answerBtns = document.querySelectorAll(".answer-btn");
  const nextBtn = document.getElementById("next-btn");
  
  function loadQuestion() {
    const current = questions[index];
    questionEl.innerText = current.question;
  
    answerBtns.forEach((btn, i) => {
      btn.innerText = current.answers[i];
      btn.disabled = false;
      btn.style.display = "block";
      btn.style.background = "#f1f1f1";
  
      btn.onclick = () => {
        if (btn.innerText === current.correct) {
          btn.style.background = "#90ee90";
          score++;
        } else {
          btn.style.background = "#f08080";
        }
  
        answerBtns.forEach(b => b.disabled = true);
        nextBtn.style.display = "inline";
      };
    });
  
    nextBtn.innerText = "Next";
    nextBtn.style.display = "none";
  }
  
  nextBtn.onclick = () => {
    index++;
    if (index < questions.length) {
      loadQuestion();
    } else {
      showScore();
    }
  };
  
  function showScore() {
    questionEl.innerHTML = `
      <strong>Quiz Completed!</strong><br><br>
      You got <span style="color: green;">${score}</span> out of 
      <span style="color: blue;">${questions.length}</span> 
    `;
    
    answerBtns.forEach(btn => {
      btn.style.display = "none";
    });
  
    nextBtn.innerText = "Restart Quiz";
    nextBtn.style.display = "inline";
    nextBtn.onclick = () => location.reload();
  }
  
  loadQuestion();