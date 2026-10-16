




import { diceAnimation, getNode, getNodes } from "./lib/index.js";

//주사위 굴리기 버튼
//클릭 이벤트 바인딩

const [rollingButton, recordButton, resetButton] = getNodes('.buttonGroup > button');
// console.log(rollingButton);

let isClicked = false;
let stopAnimation;

function handleRollingDice() {

  if (!isClicked) {
    console.log('재생!');
    stopAnimation = setInterval(diceAnimation, 300);
  } else {
    console.log('멈춰!');
    clearInterval(stopAnimation);
  }

  isClicked = !isClicked;
}

rollingButton.addEventListener('click',handleRollingDice)
