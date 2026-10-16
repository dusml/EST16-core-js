
import {
  attr,
  getNode,
  addClass,
  insertLast,
  removeClass,
  clearContent,
} from './lib/index.js';
// 순서는 상관이 없다! ./lib/' 인덱스로 되어 있으면 이렇게만 작성하여도 vscode가 알아서 인덱스를 찾아준다.



// import clearContent from './lib/dom/clearContent.js';
// import { getNode, getNodes } from './lib/dom/getNode.js';
// import { insertLast } from "./lib/dom/insert.js";


// named export   => import { 함수이름/변수이름 as $ } from '경로설정'
// default export => import 함수이름/변수이름 from '경로설정'




// 1. input 선택하기
// 2. input 이벤트 바인딩
//    -addEventListener('input')
// 3. input value값 가져오기
// 4. 숫자 더하기
// 5. result에 출력하기


function phase1(){

    const first = getNode('#firstNumber');
    const second = getNode('#secondNumber');
    const result = getNode('.result');
    const clear = getNode('#clear');

    function handleInput(){
      const firstValue = Number(first.value);
      const secondValue = +second.value;
      const total = firstValue + secondValue;

      clearContent(result)
      insertLast(result,total);
    }

    function handleClear(e){
      e.preventDefault();
      clearContent(first);
      clearContent(second);
      clearContent(result);
      first.focus();
    }

    first.addEventListener('input',handleInput)
    second.addEventListener('input',handleInput)
    clear.addEventListener('click',handleClear)
}

phase1();



function phase2(){
  // const first = getNode('#firstNumber');
  // const second = getNode('#secondNumber');
  const calculator = getNode('.calculator');
  const result = getNode('.result');
  const clear = getNode('#clear');
  const numberInputs = [...document.querySelectorAll('input:not(#clear)')];

  function handleInput(){
    const total = numberInputs.reduce((acc,cur)=> acc + Number(cur.value),0);
    
    result.textContent = ''
    insertLast(result,total);

  }

  function handleClear(e){
    e.preventDefault();
    console.log( numberInputs );
    
    numberInputs.forEach((elem)=> elem.value = '')
    result.textContent = '-'
  }


  calculator.addEventListener('input',handleInput)
  clear.addEventListener('click',handleClear)

}











