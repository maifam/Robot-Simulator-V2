
  // initializes the board
init();

  // ADD CODE HERE!

 //++++++++++++ GRABBING NODES FROM DOM +++++++++//
const movesUl = document.querySelector('#moves-container')
const movesBtn = document.querySelector('#move-button')




 //++++++++++++ ADD EVENT LISTENERS ++++++++++++++++++//
document.addEventListener('keydown', handleArrowPress
movesBtn.addEventListener('click', moveRobot)
  
function handleArrowPress(e) {
    // console.log(e)
  if (e.code === "ArrowRight") {
    //this is a helper function we have to build 
      //to manipulate the DOM 
    createLi("Right")
  }else if (e.code === "ArrowLeft") {
    createLi("Left")
  }else if (e.code === "ArrowDown"){
    createLi("Down")
  }else if (e.code === "ArrowUp") {
    createLi("Up")
  }
}



 
//++++++++++ MANIPULATING / CHANGING THE DOM ++++//
function createLi(direction){
  let li = document.createElement('li')
  li.innerText = direction
  movesUl.append(li)
}

function moveRobot(e) {
  let moveLi = movesUl.querySelector('li')
   // move is from movement.js 
  move(moveLi.innerText.toLowerCase())
  moveLi.remove()
}

// BONUS DELIVERABLE //

  // When the "Move!" button is clicked, 
  // the robot automatically moves according 
  // the the list of directions every half 
  // second. The directions should disappear 
  // from your list of directions as the robot 
  // moves. You may want to look into setInterval 
  // or setTimeout.

movesBtn.addEventListener("click", autoMoveRobot)

// function autoMoveRobot () {

//   setInterval(function(){ 

//     let moveLi = movesUl.querySelector('li')
//     move(moveLi.innerText.toLowerCase())
//     moveLi.remove()
//   }, 1000)
// }

function autoMoveRobot() {
  let moveTime = setInterval(addRobot, 1000);
  let moveLi = movesUl.querySelector('li')

  function addRobot() {
    if (movesUl.children.length === 0){
      clearInterval(moveTime)
    }else{
      let moveLi = movesUl.querySelector('li')
      move(moveLi.innerText.toLowerCase())
      moveLi.remove()
    }
  }
}