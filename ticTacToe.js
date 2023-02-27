let grid = document.getElementsByClassName("grid-cell");
var count = 0;

var player1 = { name: "player1", 0: [] };
var player2 = { name: "player2", 0: [] };

var resultArr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7],
];

console.log(grid);

for (let i = 0; i < grid.length; i++){
  grid[i].addEventListener("click", (event) => {
    if (grid[i].classList.contains("player1Click") == false && count % 2 == 1) {
      grid[i].classList.add("player2Click");
      grid[i].innerHTML = "O";
      count++;
      player2[0].push(i + 1);
    grid[i].animate(gridAnimationPlayer2,200)

    } else if (
      grid[i].classList.contains("player2Click") == false &&
      count % 2 == 0
    ) {
      grid[i].classList.add("player1Click");
      grid[i].innerHTML = "X";
      count++;
      player1[0].push(i + 1);
      grid[i].animate(gridAnimationPlayer1,200)

    }
    // grid[i].animate(gridAnimationPlayer2,200)

    if (count > 4) {
      checkResult.call(player1,i);
      checkResult.call(player2,i);
    }

  });
}
 

function checkResult(i) {
  if (this[0].length > 2) {
    console.log(this[0]);

    resultArr.forEach((element) => {
        let count = 0;

      element.forEach((element, i) => {
        this[0].forEach((items) => {
          if (items == element) count++;
        });
      });

      if (count == 3) {
        console.log("winner : ", this.name);
       
      }
    });
  }
}

const gridAnimationPlayer2 = [
   { color : 'yellow',fontSize : '0px'},
   {color: 'yellow',fontSize : '1500%'},
  //  {color: 'white'}
]
const gridAnimationPlayer1 = [
  { color : 'rgb(255, 112, 112)',fontSize : '0px'},
  {color: 'rgb(255, 112, 112)',fontSize : '1500%'},
 //  {color: 'white'}
]