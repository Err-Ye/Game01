let rowOne = [null,null,null];
let rowTwo = [null,null,null];
let rowThree = [null,null,null];
let addingMoreBlock = true;
let aiTurn = false;
let ai = null;
let player = null;
let playerSignHolder = document.getElementById('playerSign');
let aiSignHolder = document.getElementById('aiSign');
let playerColor = "#50b1e9";
let aiColor = "#ee5454";

window.onbeforeunload = settingPlayerSing();

function addingBlock(x,y){
    addingMoreBlock = !checkingMark(x,y);
    if(addingMoreBlock){
        let currentColor = aiTurn ? aiColor : playerColor;
        let currentPlayer = aiTurn ? ai : player;
        switch (Number(x)) {
            case 1:
                document.getElementById(x+y).style.background = currentColor
                document.getElementById(x+y).innerHTML = currentPlayer ? "X" :  "O";
                rowOne[Number(y)-1] = currentPlayer;
                break;
            case 2:
                document.getElementById(x+y).style.background = currentColor
                document.getElementById(x+y).innerHTML = currentPlayer ? "X" :  "O";
                rowTwo[Number(y)-1] = currentPlayer;
                break;
            case 3:
                document.getElementById(x+y).style.background = currentColor
                document.getElementById(x+y).innerHTML = currentPlayer ? "X" :  "O";
                rowThree[Number(y)-1] = currentPlayer;
                break;
        }
        aiTurn = !aiTurn;
        console.log([rowOne, rowTwo, rowThree]);
        console.log("ai="+ai+",player="+player);
        
    }
}

function generatePlayerSign(){
    return Math.floor(Math.random()*2);
}

function settingPlayerSing(){
    ai = generatePlayerSign();
    player = ai ?  0: 1;
    playerSignHolder.innerText = ai ? 'O':'X';
    aiSignHolder.innerText = ai ? 'X':'O';
}

function checkingMark(x,y){
    let allRow = [rowOne,rowTwo,rowThree];
    console.log(allRow);
    
    return allRow[x-1][y-1] !== null;
}

function generateRandomMove(){
    return Math.floor(Math.random()*3)+1;
}

function aiMoving(){
    let x= generateRandomMove();
    let y= generateRandomMove();
    while(checkingMark(x,y)){
        x=generateRandomMove();
        y=generateRandomMove();
    }
    
}
// let addingBlockInRow = (row,y,value) => {
//     row[y-1] = value;
// }
// const color = aiTurn ? aiColor : playerColor;
// const currentPlayer = aiTurn ? ai : player;