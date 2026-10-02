let i = 0;

/* do {
  console.log(i);

  i++;
} while (i < 5); */

do {
  console.log(i);
  if (i === 3) {
    break;
  }
  i++;
} while (i < 5);

/* -------------------- */
/* Do While Loop        */
/* -------------------- */
// do ~ while 문 (역순환)
// - prompt 창을 띄워 사용자로 하여금 순환 횟수를 요청
// - 사용자로부터 요청된 횟수 만큼 역방향으로 순환 출력
// - 사용자로부터 요청된 횟수가 0보다 작을 경우,
//   '최초 실행된 메시지입니다. 이 메시지는 조건이 거짓이어도 볼 수 있습니다.' 출력
// - 순환 중단

// do ~ while 문 (순환)
// - 위 do ~ while 문을 순방향으로 순환되도록 설정

//클라스 돔의 세상에 접근 -> 값을 가져오라고 한다. HTML 문서(DOM)에서 .first 클래스를 가진 요소를 찾아서 가져오는 코드!!
//값이 null이 나오는 이유는  html은 위에서 아래부터 읽는데, 이미 자바스크립트 읽혀서 아래 body부분을 못일끼 때문에 null 이 나온다. 그래서 스크립트를 body 맨 밑에 놓는다.
//오늘날에는 다른 방법으로 사용 <script src="./chapter/core/15.loop-2.js" defer></script>
// const first = document.querySelector('.first');
// console.dir(first); 객체의 내부 구조를 자세히 확인할 때 사용
// console.log(first);

//if(너 태그 마자??), dom세상에서 작은 애들은 node라고 한다. 택스트, 주석, 앨리먼트 노트 이고 , 식별번호가 있다, 이것을 노트 타입이라고한다. 자주 사용하는 거는 기억해 두는 것이 좋다. 1,3,8,9 번호는 기억해 두는게 좋다.
//  https://developer.mozilla.org/en-US/docs/Web/API/Node/nodeType

/* const first = document.querySelector('.first');
let second = first;

do {
  second = second.nextSibling;
  console.log(second);
} while (second.nodeType !== 1);
 */

/* 
const first = document.querySelector('.first');
function next(node){
  let second = node;

  do {
    second = second.nextSibling;
  } while (second.nodeType !== 1);

  return second;
} */

/* 
function next(node) {

  node = document.querySelector(node);
  do {
    node = node.nextSibling;
  } while (node.nodeType !== 1);

  return node;
} */

function next(node) {
  //const node; 값이 들어온다. 매계변수는 넣는 순간 / 메모리에 들어간다.시각적으로 안돼기 깨문에 이렇게 설명
  if (typeof node === 'string') {
    node = document.querySelector(node);
  }

  node = document.querySelector(node);
  do {
    node = node.nextSibling;
  } while (node.nodeType !== 1);

  return node;
}

//문자와 값이 나오게 하고 싶다.
//노드에넘어 온 값ㅇ; 문자가 맞아?? 로 비교하기 위에 조건문이 들어온다. 앨리먼트로 비교하게 되면 너무 복잡하기 때문에 문자인가로 구분

function prev(node) {
  if (typeof node === 'string') {
    node = document.querySelector(node);
  }

  node = document.querySelector(node);
  do {
    node = node.previousSelector;
  } while (node.nodeType !== 1);

  return node;
}
