function play(userChoice) {
  const choices = ["tosh", "qaychi", "qogoz"];
  const randomIndex = Math.floor(Math.random() * 3);
  const computerChoice = choices[randomIndex];

  let text =
    "Siz: ${userChoice.toUpperCase()} | Kompyuter: ${computerChoice.toUpperCase()} — ";

  if (userChoice === computerChoice) {
    text += "Durrang!";
  } else if (
    (userChoice === "tosh" && computerChoice === "qaychi") ||
    (userChoice === "qaychi" && computerChoice === "qogoz") ||
    (userChoice === "qogoz" && computerChoice === "tosh")
  ) {
    text += "Siz yutdingiz!";
  } else {
    text += "Kompyuter yutdi!";
  }

  document.getElementById("result").innerText = text;
}
