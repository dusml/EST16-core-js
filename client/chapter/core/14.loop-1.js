/* --------------- */
/* While Loop      */
/* --------------- */
/* 
let i = 10;
while (i > 0) {
  console.log(--i); 1이 되었을 때 선감소하여 0이 나오게 된다.
} */

const frontEndDev = [
  'HTML',
  'CSS',
  'SVG',
  'JavaScript',
  'jQuery',
  'React',
  'Redux',
  'node.js',
];

/* 프론트엔드 개발 집합 항목 출력 ---------------------------------------------- */

/* console.log(frontEndDev[0]);
console.log(frontEndDev[1]);
console.log(frontEndDev[2]);
console.log(frontEndDev[3]);
console.log(frontEndDev[4]);
console.log(frontEndDev[5]);
console.log(frontEndDev[6]); */

/* 프론트엔드 개발 집합을 순환해서 각 아이템을 Console 패널에 출력 -------------------- */

// while 문 (순환 : 순방향)

/* let i = 0;

while (i < 7) {
  console.log(frontEndDev[i]);
  i++;
}
 */

let i = 0;

while (i < frontEndDev.length) {
  // console.log(frontEndDev[i]);
  i++;
}

// while 문 (역순환 : 역방향)

/* let l = frontEndDev.length; //배열의 갯수
while(l){ //false가 되면 실행이 안되므로 l이 0이되면 반복문이 종료가 된다.
  --l; // length는 개수이고, 인덱스 번호는 0번부터 시작하기 때문에 선 감소후 값이 들어가야 한다.
  console.log(frontEndDev[l]);

} */

let l = frontEndDev.length;

while (l) {
  console.log(frontEndDev[--l]);
}

// 성능 진단 : 순환 vs. 역순환
