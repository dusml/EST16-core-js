/* ---------------------------- */
/* Functions → Declaration      */
/* ---------------------------- */

// console.log('총 합 = ', 10000 + 8900 + 1360 + 2100);
// console.log('총 합 = ', 21500 + 3200 + 9800 + 4700);
// console.log('총 합 = ', 3800 + 15200 - 500 + 80200);
// console.log('총 합 = ', 560 + 5000 + 27100 + 10200);
// console.log('총 합 = ', 9000 - 2500 + 5000 + 11900);

function getRandomValue(){
  return Math.random() > 0.5 ? 1 : 0;
}




// 함수 선언
function calcPrice(priceA, priceB, priceC = getRandomValue()){

  // if(priceC === undefined) priceC = 0;
  // if(!priceC) priceC = 0;
  priceC = priceC || 0; //줄여 쓰는 코드 priceC ||= 0;

  return  priceA + priceB + priceC;
}
// 함수 호출
//인수 부분에 값을 넣은
// const total = calcPrice(1000, 1300, 2500);
const total = calcPrice(1000, 1300);
// priceC = 0의 값은 언디퐈인 나오디 때문에 디폴트 파리민터를 0으로 사용한 것이다. 이거 없이 사용 할려면

console.log(total);

// 함수 값 반환

// 매개 변수

// 매개 변수 (parameter) vs. 전달 인수 (argument)

// 외부(전역 포함), 지역 변수

// 매개 변수 기본 값

// 좋은 함수 작성 여건

/* 다음 함수를 작성해봅니다. -------------------------------------------------- */

// rem(pxValue: number|string, base: number):string;
// let rem;

function rem (pxValue, base = 16){

  if(!pxValue) throw Error('rem 함수에 첫 번째 인수는 필수 입력값 입니다.');
  if(typeof pxValue === 'string'){
    pxValue = parseInt(pxValue,10);
  }

  return pxValue / base + 'rem'
}

console.assert(rem('30px') === '1.875rem');
//assert 너는 이게 참이여야해!!!

// css(node: string, prop: string, value: number|strung) : string;
// let css;

/* const first = document.querySelector('.first')

function getCss(node, prop, value){

  if(typeof node === 'string'){
    node = document.querySelector(node)
  }

  if(!())

  return getComputedStyle(node)[prop]
  //[]한 번도 사용 안한 값을 .. 넣을때..?
}

console.log(getCss(first, 'font-size'));  //32px */

const first = document.querySelector('.first');

function getCss(node, prop) {
  if (typeof node === 'string') {
    node = document.querySelector(node);
  }

  if (!(prop in document.body.style)) {
    throw new Error(
      'getCss 함수의 두 번째 인수는 유효한 CSS 속성이어야 합니다.'
    );
  }

  return getComputedStyle(node)[prop];
  //[]한 번도 사용 안한 값을 .. 넣을때..?
}

function setCss(node, prop, value){

  if (typeof node === 'string') {
    node = document.querySelector(node);
  }

  if (!(prop in document.body.style)) {
    throw new Error(
      'setCss 함수의 두 번째 인수는 유효한 CSS 속성이어야 합니다.'
    );
  }

  if (!value) {
    throw new Error(
      'setCss 함수의 세 번째 인수는 필수 입력값입니다.'
    );
  }

  node.style[prop] = value;
}

console.log(getCss(first, 'fontSize'));
console.log(setCss(first, 'color','orange'));


//css함수 ㄷ개를 쓰면 겟 세게를 쓰면 셋을 가지고 오도록 하는 함수를 만들엊봐
function css(node, prop, value){
  if (typeof node === 'string') {
    node = document.querySelector(node);
  }
  if(!value){
  return getCss(node, prop)

  }else{
    setCss(node, prop, value)

  }

  //또는 삼항식으로
}
console.log(css('.second', 'color')); //값을 보여주는
console.log(css('.second', 'color','blue')); //값을 바꿔준다.

// node의 값을 'h1'으로 받았을 경우

// node가 없거나 document.ELEMENT_NODE가 아닐 경우

// prop의 값이 string이 아닐 경우

// prop의 값이 style 속성이 아닐 경우

// value의 값이 number가 아닌 경우

// 클릭 이벤트를 이용한 h1의 폰트 크기를 증가시키는 함수와 감소시키는 함수 만들기

// 1. h1,plus,minus 요소를 변수로 지정한다.
// 2. h1의 폰트 사이즈를 가져온다.
// 3. 증가함수와 감소함수를 만든다.
// 4. 클릭 이벤트와 바인딩한다.



/* 함수안에 함수를 넣어서 css함수만 꺼내서 사용 이를 모들화 인 캡슐레이션 
내가 원하는 애들만 안정하게 안에 모아 두는 클로저???


내가 꺼낸 값만 사용 할수 있겠끔.... 처음 조는 거라서 뭐라고 하는지 모르겠당...

*/