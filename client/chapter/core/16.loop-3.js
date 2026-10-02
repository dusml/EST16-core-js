/* ------------ */
/* For Loop     */
/* ------------ */

// 2 ~ 10까지의 짝수 출력하기

/* let j = 0;

while (j < 10) {
  j++;

  if (j % 2 !== 0) continue;

  console.log(j);
} */

/* for (let p = 0; p < 10; p++) {
  console.log(p);
} */

for (let p = 0; p < 10;) {
  p++;
  // console.log(p);
}

const frontEndDev = 'HTML CSS SVG JavaScript jQuery React Redux'.split(' ');

//.split(' ')은 문자열에서 사용하는 메서드이며, 문자열을 나눠 배열로 만들어준다.괄호 안에는 문자열을 나눌 기준을 넣는다.예를 들어 .split('/')로 작성하면 /를 기준으로 문자열을 나눠 배열로 만들어준다.

let i = 0;
let l = frontEndDev.length;

while (i < l) {
  // console.log(frontEndDev[i]);
  i += 1;
}

for (let i = 0; i < l; i++) {
  // if (i === 2 || i === 4) continue;
  const value = frontEndDev[i]; //날것을 바로 사용하는 것이 아니라 변수에 넣어서 사용
  const toLower = value.toLowerCase();

  //if (toLower.includes('jquery') || toLower.includes('svg')) continue;

  if (toLower.includes('jquery')) break;

  console.log(value);
}

// while 문 → for 문 (순환)
// - 실행 흐름
// - 순환 중단 또는 이어서 순환
//   - 조건이 맞을 경우, 이어서(continue) 순환
//   - 조건: SVG, jQuery는 출력하지 마세요.

//   - 조건이 맞을 경우, 순환 중단(break)
//   - 조건: JavaScript 까지만 출력하세요.

//   - 무한 루프 (브레이크)
//   - for 문 (역순환)

console.clear();

//.shift(), .pop() => 원본을 회손한다.
// 원본을 회손시키면 안됀다(리엑트에서는 크리티컬이다.). 전역을 오혐시키지 않는다. 써야하는 순간들이 오면 spread operator syntax[...]을 사용하면 복제가 되면서 원본이 사라지지 않는다.

const arr = [...frontEndDev];

for (let i = 0; i < l; i++) {
  // console.log(frontEndDev.shift());
  console.log(arr.pop()); //역순환
}

console.log(frontEndDev); // 찍게 되면 아무것도 안나온다. 이유는 뺴내기 때문이다..shift(), .pop()이것도 함수이기 때문에 값을 반환한다. 내가 없앤 값을 반환한다, 배열에 매서드 이다.
