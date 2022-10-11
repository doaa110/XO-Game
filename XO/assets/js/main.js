let playerTurn = "x";
let turnTitle = document.querySelector(".game-title");
// let turnTitle = document.getElementById(".title");

let blocks = [];

// squares = [...document.querySelectorAll(".square")].innerHTML;
// console.log("squares :: ", squares);

function displayResult(x, y, z) {
  turnTitle.innerHTML = `${blocks[x]} is the winner !! `;

  document.getElementById("item" + x).style.background = "aquamarine";
  document.getElementById("item" + y).style.background = "aquamarine";
  document.getElementById("item" + z).style.background = "aquamarine";
  document.getElementById("item" + x).style.color = "#fff";
  document.getElementById("item" + y).style.color = "#fff";
  document.getElementById("item" + z).style.color = "#fff";

  setInterval(function () {
    turnTitle.innerHTML += ".";
  }, 1000);
  setTimeout(function () {
    location.reload();
  }, 4000);
}
function isWinner()
{
  //use querySelectorAll instead

  for (let i = 1; i < 10; i++)
  
  {
    blocks[i] = document.getElementById("item" + i).innerHTML;
  }

  /////checks each row if there are any matching of blocks

  if (blocks[1] == blocks[2] && blocks[2] == blocks[3] && blocks[1] != "") {
    console.log("first row matched");
    displayResult(1, 2, 3);
  }

  if (blocks[4] == blocks[5] && blocks[5] == blocks[6] && blocks[4] != "") {
    console.log("second row matched");
    displayResult(4, 5, 6);
  }
  if (blocks[7] == blocks[8] && blocks[8] == blocks[9] && blocks[7] != "") {
    console.log("third row matched");
    displayResult(7, 8, 9);
  }
  /////checks each column if there are any matching of blocks

  if (blocks[1] == blocks[4] && blocks[4] == blocks[7] && blocks[1] != "") {
    console.log("first column matched");
    displayResult(1, 4, 7);
  }
  if (blocks[2] == blocks[5] && blocks[5] == blocks[8] && blocks[2] != "") {
    console.log("second column matched");
    displayResult(2, 5, 8);
  }
  if (blocks[3] == blocks[6] && blocks[6] == blocks[9] && blocks[3] != "") {
    console.log("third column matched");
    displayResult(3, 6, 9);
  }
  /////checks each cross (adjacent) if there are any matching of blocks

  if (blocks[1] == blocks[5] && blocks[5] == blocks[9] && blocks[1] != "") {
    console.log("first cross matched");
    displayResult(1, 5, 9);
  }
  if (blocks[3] == blocks[5] && blocks[5] == blocks[7] && blocks[3] != "") {
    console.log("second cross matched");
    displayResult(3, 5, 7);
  }
}

//function for display the winner name and each player turn

function XOgame(id) {
  console.log(id);
  let element = document.getElementById(id);
  if (playerTurn === "x" && element.innerHTML == "") {
    element.innerHTML = "X";
    playerTurn = "O";
    turnTitle.innerHTML = "o turn";
  } else if (playerTurn == "O" && element.innerHTML == "") {
    element.innerHTML = "O";
    playerTurn = "x";
    turnTitle.innerHTML = "x turn";
  }
  isWinner();
}
