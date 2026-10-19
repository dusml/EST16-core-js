
import { clearContent, diceAnimation, endScroll, getNode, getNodes, insertLast } from "./lib/index.js";

//주사위 굴리기 버튼
//클릭 이벤트 바인딩

const [rollingButton, recordButton, resetButton] = getNodes('.buttonGroup > button');
const recordListWrapper = getNode('.recordListWrapper');

/* function handleRollingDice() {

  let isClicked = false;
  let stopAnimation;

  function c(){
    if (!isClicked) {
      console.log('재생!');
      stopAnimation = setInterval(diceAnimation, 300);
    } else {
      console.log('멈춰!');
      clearInterval(stopAnimation);
    }

    isClicked = !isClicked;
    
  }
  return c;
}

rollingButton.addEventListener('click',handleRollingDice())
 */


/* let count = 0;
let total = 0;

function renderRecordItem() {
  const diceNumber = +getNode('#cube').getAttribute('dice');

  const template = `
    <tr>
      <td>${++count}</td>
      <td>${diceNumber}</td>
      <td>${total += diceNumber}</td>
    </tr>
  `;

  insertLast('tbody', template);
} */

let count = 0;
let total = 0;

function createItem(value) {
  const template = `
    <tr>
      <td>${++count}</td>
      <td>${value}</td>
      <td>${total += value}</td>
    </tr>
  `;

  return template;
}

function renderRecordItem() {
  const diceNumber = +getNode('#cube').getAttribute('dice');
  insertLast('tbody', createItem(diceNumber));
}

const handleRollingDice = (() => {
  
  let isClicked = false;
  let stopAnimation;

  return () => {
    if(!isClicked){
      // console.log('재생!');
      stopAnimation = setInterval(diceAnimation,200);
      recordButton.disabled = true;
      resetButton.disabled = true;
      
    }else{
      // console.log('멈춰!');
      clearInterval(stopAnimation);
      recordButton.disabled = false;
      resetButton.disabled = false;
    }

    isClicked = !isClicked;
  }
})()


function handleRecord(){
  recordListWrapper.hidden = false;
  renderRecordItem();

  endScroll(recordListWrapper);
}

function handleReset(){
  clearContent('tbody');
  count = 0;
  total = 0;
  recordListWrapper.hidden = true;
}
rollingButton.addEventListener('click',handleRollingDice)
recordButton.addEventListener('click',handleRecord)
resetButton.addEventListener('click',handleReset)
