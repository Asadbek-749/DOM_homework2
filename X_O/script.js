const winConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8], 
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8], 
  [0, 4, 8],
  [2, 4, 6], 
];

const btnElement1 = document.querySelector(".square1");
const btnElement2 = document.querySelector(".square2");
const btnElement3 = document.querySelector(".square3");
const btnElement4 = document.querySelector(".square4");
const btnElement5 = document.querySelector(".square5");
const btnElement6 = document.querySelector(".square6");
const btnElement7 = document.querySelector(".square7");
const btnElement8 = document.querySelector(".square8");
const btnElement9 = document.querySelector(".square9");

let active = true;
let gameOver = false;

const btns = [
  btnElement1,
  btnElement2,
  btnElement3,
  btnElement4,
  btnElement5,
  btnElement6,
  btnElement7,
  btnElement8,
  btnElement9,
];

btns.forEach((item) => {
  item.addEventListener("click", () => {
    if (gameOver || item.textContent !== "") return;
    item.textContent = active ? "X" : "O";
    item.disabled = true;
    checkWinner();
    active = !active;
  });
});

function checkWinner() {
  winConditions.forEach((condition) => {
    const a = btns[condition[0]].textContent;
    const b = btns[condition[1]].textContent;
    const c = btns[condition[2]].textContent;

    if (a !== "" && a === b && b === c) {
      console.log(a + " yutdi!");
      gameOver = true; // O'yin tugadi
      alert(a + " g'alaba qozondi!");

      btns.forEach((btn) => (btn.disabled = true));
    }
  });
}

// let btn = true;

// btnElement1.addEventListener("click", () => {
//   if (active === true) {
//     btnElement1.textContent = "X";
//     active = false;
//   } else if (active === false) {
//     btnElement1.textContent = "O";
//     active = true;
//   }
// });

// btnElement2.addEventListener("click", () => {
//   if (active === true) {
//     btnElement2.textContent = "X";
//     active = false;
//   } else if (active === false) {
//     btnElement2.textContent = "O";
//     active = true;
//   }
// });

// btnElement3.addEventListener("click", () => {
//   if (active === true) {
//     btnElement3.textContent = "X";
//     active = false;
//   } else if (active === false) {
//     btnElement3.textContent = "O";
//     active = true;
//   }
// });
// btnElement4.addEventListener("click", () => {
//   if (active === true) {
//     btnElement4.textContent = "X";
//     active = false;
//   } else if (active === false) {
//     btnElement4.textContent = "O";
//     active = true;
//   }
// });

// btnElement5.addEventListener("click", () => {
//   if (active === true) {
//     btnElement5.textContent = "X";
//     active = false;
//   } else if (active === false) {
//     btnElement5.textContent = "O";
//     active = true;
//   }
// });

// btnElement6.addEventListener("click", () => {
//   if (active === true) {
//     btnElement6.textContent = "X";
//     active = false;
//   } else if (active === false) {
//     btnElement6.textContent = "O";
//     active = true;
//   }
// });

// btnElement7.addEventListener("click", () => {
//   if (active === true) {
//     btnElement7.textContent = "X";
//     active = false;
//   } else if (active === false) {
//     btnElement7.textContent = "O";
//     active = true;
//   }
// });

// btnElement8.addEventListener("click", () => {
//   if (active === true) {
//     btnElement8.textContent = "X";
//     active = false;
//   } else if (active === false) {
//     btnElement8.textContent = "O";
//     active = true;
//   }
// });

// btnElement9.addEventListener("click", () => {
//   if (active === true) {
//     btnElement9.textContent = "X";
//     active = false;
//   } else if (active === false) {
//     btnElement9.textContent = "O";
//     active = true;
//   }
// });
