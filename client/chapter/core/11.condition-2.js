/* ------------------- */
/* Logical Operators   */
/* ------------------- */

let a = 10;
let b = '';
let value = Boolean(b);

// 논리곱(그리고) 연산자 F
let AandB = a && b;
console.log(AandB);

// 논리합(또는) 연산자 T
let AorB = a || b;
console.log(AorB);

//논리곱 할당 연산자
// a &&=b;
// a = a && b; 이거라는 뜻

//논리합 할당 연산자
// a ||= b;
// a = a||b;

// 부정 연산자
let reverseValue = !value;
console.log(reverseValue);

// 조건 처리

// 첫번째 Falsy를 찾는 연산 (&&)
let whichFalsy = true && ' ' && [] && { thisFalsy: false };

console.log(whichFalsy);
// 첫번째 Truthy를 찾는 연산 (||)
let whichTruthy = false || '' || [2, 3].length || { thisFalsy: true };

let userName = prompt('ID를 입력해 주세요');

if (userName?.toLowerCase() === 'admin') {
  let pass = prompt('비밀번호를 입력해 주세요');
  if (pass === '1234') {
    alert('환영합니다!!');
  } else if (pass === null || pass === ' ') {
    alert('취소 되었습니다.');
  } else {
    alert('인증에 실패하였습니다.');
  }
} else if (userName === null || userName.replace(/\s*/g, '') === '') {
  alert('취소 되었습니다.');
} else {
  alert('누구세요??');
}

/* 콘솔로 확인해 값을 확인 취소를 누르면 null
toLowerCase() 대소문자
공백을 제어 .replaceAll()
정규식 replaceAll(' ','') 공백을 찾아서 빈칸을 만들꺼야 문자열.replaceAll(찾을문자, 찾은문자를 "모두" 바꿈)
replace(' ', '')공백문자를 찾으면 빈공간을 하겠다. 이건 하나만 찾는다.이럴떄 정규 표현식 - 비밀번호, 특수문자 아이디를 이메일로 받아야 할떄 리콰이어드
*/

/* /       /   → 정규식 시작/끝
\s          → 공백 문자
*           → 0개 이상
g           → 전체(global)에서 찾기
''          → 찾은 걸 빈 문자열로 바꾸기 */

// userName? 널이나 언디퐈인드가 뜨면 뒤에께 나오지 않는다.옵셔널 체이닝(Optional Chaining)

function logIn() {
  let userName = prompt('ID를 입력해 주세요');

  /* if (userName === null || userName === undifind) return;
  if (!userName) return; */
  if (userName === null) return;

  if (userName?.toLowerCase() === 'admin') {
    let pass = prompt('비밀번호를 입력해 주세요');
    if (pass === '1234') {
      alert('환영합니다!!');
    } else if (pass === null || pass === ' ') {
      alert('취소 되었습니다.');
    } else {
      alert('인증에 실패하였습니다.');
    }
  } else if (userName === null || userName.replace(/\s*/g, '') === '') {
    alert('취소 되었습니다.');
  } else {
    alert('누구세요??');
  }
}
