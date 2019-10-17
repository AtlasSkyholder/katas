const generateBoard = function(whiteQueen, blackQueen) {
  let boardArr = [];
  for (let i = 0; i < 8; i++) {
    let lineArr = [];
    for (let j = 0; j < 8; j++) {
      if (i === whiteQueen[0] && j === whiteQueen[1]) {
        lineArr.push(1);
      } else if (i === blackQueen[0] && j === blackQueen[1]) {
        lineArr.push(1);
      } else {
        lineArr.push(0);
      }
    }
    boardArr.push(lineArr);
  }
  return boardArr;
};

const queenThreat = function(board) {
  let whiteQueen = [];
  let blackQueen = [];
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      if (board[i][j] === 1 && whiteQueen.length < 1) {
        whiteQueen.push(i);
        whiteQueen.push(j);
      } else if (board[i][j] === 1 && blackQueen.length < 1) {
        blackQueen.push(i);
        blackQueen.push(j);
      }
    }
  }
  let threat = [];
  for (let vert = 0; vert < 8; vert++) {
    threat.push([vert , whiteQueen[1]]);
  }
  for (let hori = 0; hori < 8; hori++) {
    threat.push([whiteQueen[0], hori]);
  }
  let diaLePo = whiteQueen[1];
  for (let k = 0; k < 8; k++) {
    if (diaLePo < 0) {
      break;
    }
    threat.push([k, diaLePo]);
    diaLePo = diaLePo - 1;
  }
  let diaRiPo = whiteQueen[1];
  for (let k = 0; k < 8; k++) {
    if (diaRiPo === 8) {
      break;
    }
    threat.push([k, diaRiPo]);
    diaRiPo = diaRiPo + 1;
  }
  let diaLeNe = whiteQueen[1];
  for (let k = whiteQueen[0]; k >= 0; k--) {
    if (diaLeNe < 0) {
      break;
    }
    threat.push([k, diaLeNe]);
    diaLeNe = diaLeNe - 1;
  }
  let diaRiNe = whiteQueen[1];
  for (let k = whiteQueen[0]; k >= 0; k--) {
    if (diaRiNe === 8) {
      break;
    }
    threat.push([k, diaRiNe]);
    diaRiNe = diaRiNe + 1;
  }
  //now compare
  let state = false;
  for (let n = 0; n < threat.length; n++) {
    if (threat[n][0] === blackQueen[0] && threat[n][1] === blackQueen[1]) {
      state = true;
    }
  }
  return state;
};

//let whiteQueen = [0, 5];
//let blackQueen = [5, 0];
//let generatedBoard = generateBoard(whiteQueen, blackQueen);
//console.log(generatedBoard);
//console.log(queenThreat(generatedBoard));

let whiteQueen = [0, 0];
let blackQueen = [5, 7];
let generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));