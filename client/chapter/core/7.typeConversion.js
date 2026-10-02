/* --------------------- */
/* Type Conversion       */
/* --------------------- */

/* 데이터 → 문자 ----------------------------------------------------------- */

// number
const YEAR = 2026;
//명시적
console.log(String(YEAR));
//암시적
console.log(YEAR + '');
// undefined, null
const nul = null;
let undef;
console.log(String(nul));
console.log(String(undef));
// boolean
let isClicked = false;

console.log(String(isClicked));

/* 데이터 → 숫자 ----------------------------------------------------------- */

// undefined
let friend;

console.log(Number(friend));
// null
const money = null;

console.log(money * 1);
console.log(money / 1);
console.log(+money);
// boolean
let isActive = false;

console.log(isActive / 1);
// string
let num = '100';

console.log(num * 1);
// numeric string
const width = '120.5px';

console.log(parseInt(width));
// console.log(window.parseInt(width));
// 해석한다. 정수 로써.. 그래서 .5가 날아간다.
console.log(parseFloat(width));
//소수 점 까지...(함수)
/* 데이터 → 불리언 ---------------------------------------------------------- */

// null, undefined, 0, NaN, ''
console.clear();

console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(0));
console.log(Boolean(NaN));
// 위에 나열한 것 이외의 것들
console.log(Boolean('0'));
console.log(Boolean(' '));
console.log(Boolean(-1));

//암시적 앞에 !!
console.log(!!-1);
console.log(!!{});
console.log(!![]);
console.log(!![false]);
console.log(!!(() => false));
