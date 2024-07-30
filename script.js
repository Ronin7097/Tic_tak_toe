let countx = document.querySelector("#x");
let count0 = document.querySelector("#o");
let draw = document.querySelector("#draw");
let newgame = document.querySelector("#btn");
let cell = document.querySelectorAll(".play_box");

const winPatters = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];
let move = 0;
function disable_all() {
  cell.forEach((cel) => {
    cel.disabled = true;
  });
}
function enable_all() {
  cell.forEach((cel) => {
    cel.disabled = false;
    cel.innerText = "";
  });
  move = 0;
  document.querySelector("h1").innerText = "";
  newgame.innerText = "Reset Game";
}
cell.forEach(function f(cel) {
  cel.addEventListener("click", () => {
    if (move % 2 == 0) {
      cel.innerText = "O";
      cel.style.color = "rgb(207, 207, 40)";
    } else {
      cel.innerText = "X";
      cel.style.color = "rgb(53, 212, 223)";
    }
    move++;
    cel.disabled = true;
    checkWinners();
    if (move == 9) {
      checkWinner();
      if(!checkWinners()){
      draw.innerText++;
      document.querySelector("h1").innerText = "Draw";
      newgame.innerText = "New Game";
      }
    }
  });
});
const checkWinners = () => {
  for (pat of winPatters) {
    let pos1 = cell[pat[0]].innerText;
    let pos2 = cell[pat[1]].innerText;
    let pos3 = cell[pat[2]].innerText;
    if (pos1 !== "" && pos2 !== "" && pos3 !== "") {
      if (pos1 === pos2 && pos2 === pos3) {
        if (pos1 === "X") countx.innerText++;
        else count0.innerText++;
        document.querySelector("h1").innerText = "Winner " + pos1;
        newgame.innerText = "New Game";
        disable_all();
      }
    }
  }
  return true;
};
newgame.addEventListener("click", enable_all);
