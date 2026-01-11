const resultEl = document.getElementById("result");
const userChoiceEl = document.getElementById("user-choice");
const computerChoiceEl = document.getElementById("computer-choice");
const choices = ["tosh", "qaychi", "qogoz"];
const icons = {
  tosh: {
    text: "Tosh",
    icon: "🪨",
  },
  qaychi: {
    text: "Qaychi",
    icon: "✂️",
  },
  qogoz: {
    text: "Qog'oz",
    icon: "📄",
  },
};
let attempComp = 0;
let compChoiceStep = 50;
function play(userChoice) {
  const randomIndex = Math.floor(Math.random() * 3);
  const computerChoice = choices[randomIndex];

  if (resultEl.classList.contains("lose")) resultEl.classList.remove("lose");
  if (resultEl.classList.contains("win")) resultEl.classList.remove("win");
  resultEl.style.display = "none";

  const iconUser = icons[userChoice];
  const iconComp = icons[computerChoice];

  userChoiceEl.innerHTML = `
        <span>
          ${iconUser.icon}<br />
          ${iconUser.text}
        </span>
  
  `;

  computerChoiceEl.innerHTML = `
        <span>
          ${iconComp.icon}<br />
          ${iconComp.text}
        </span>
  
  `;
  if (attempComp <= compChoiceStep) {
    setTimeout(() => {
      play(userChoice);
      attempComp += 1;
    }, 10);
  } else {
    if (userChoice === computerChoice) {
      resultEl.innerText = "Durrang!".toUpperCase();
      if (resultEl.classList.contains("lose"))
        resultEl.classList.remove("lose");
      if (resultEl.classList.contains("win")) resultEl.classList.remove("win");
    } else if (
      (userChoice === "tosh" && computerChoice === "qaychi") ||
      (userChoice === "qaychi" && computerChoice === "qogoz") ||
      (userChoice === "qogoz" && computerChoice === "tosh")
    ) {
      resultEl.innerText = "Ga'laba!".toUpperCase();
      resultEl.classList.add("win");
      if (resultEl.classList.contains("lose"))
        resultEl.classList.remove("lose");
    } else {
      resultEl.innerText = "Yutqazdingiz!".toUpperCase();
      resultEl.classList.add("lose");
      if (resultEl.classList.contains("win")) resultEl.classList.remove("win");
    }
    attempComp = 0;
    resultEl.style.display = "block";
  }
}
