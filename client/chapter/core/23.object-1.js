/* --------- */
/* Object    */
/* --------- */


/* Primitives vs. Object --------- */

// key:value 쌍으로 구성된 엔티티(entity) 데이터 구조
let cssCode = /* css */`
  .dialog {
    position: fixed;
    z-index: 10000;
    top: 50%;
    left: 50%;
    width: 60vw;
    max-width: 800px;
    height: 40vh;
    min-height: 280px;
    transform: translate(-50%, -50%);
  }
`;

const dialog = {
  position: 'fixed',
  ['z-index']:10000,
  top:50,
  left: '50%',
  width: '60vw',
  maxWidth: 800,
  height: 40,
  ['min-height']: 280,
  // transform: translate(-${position.x}px, ${position.y}px),
}

// 위 CSS 스타일 코드를 JavaScript 객체로 작성해봅니다.
let cssMap ;


// 인증 사용자 정보를 객체로 구성해봅니다.
// 인증 사용자(authentication user)
// - 이름
// - 이메일
// - 로그인 여부
// - 유료 사용자 권한

let authUser = { // 어스 라는 단어를 많이 사용한다. 
  uuid:crypto.randomUUID(),
  name:'tiger',
  email:'seonbom@gmail.com',
  isSignIn:true,
  permission:'paid',//paid \free
};


// 점(.) 표기법
// authUser 객체의 프로퍼티에 접근해 Console에 출력해봅니다.

// 대괄호([]) 표기법
// 유료 사용자 권한(paid User Rights) 이름으로 프로퍼티를 재정의하고 
// 대괄호 표기법을 사용해 접근 Console에 출력해봅니다.

//객체의 key(프로퍼티 이름)만 모아서 배열로 반환하는 함수

const keys = Object.keys(authUser);

function getKeys(obj){
  let arr = [];

  for(const key in obj){
    if(Object.hasOwn(obj,key)){
      arr.push(key);
    }
  }

  return arr;
}

// 객체의 value들을 모아서 배열로 반환하는 함수

function getValues(obj){
  let arr = [];

  for(const key in obj){
    arr.push(obj[key])
  }

  return arr;
}

//entries
function getEntries(obj){
  let arr = [];

  for(const key in obj){
    arr.push([key,obj[key]])
  }

  return arr;
}


// 계산된 프로퍼티 (computed property)
let calculateProperty = 'phone'; // phone | tel


// 프로퍼티 포함 여부 확인


// 프로퍼티 나열


// 프로퍼티 제거(remove) or 삭제(delete) 
//         비워두기(null)    메모리 없음 

/* function removeProperty(obj,key){
  if(typeof obj === 'object'){
    obj[key] = null;
  }else{
    throw new Error(`removeProperty 함수의 첫 번째 인수는 객체 타입만 사용할 수 있습니다.`)
  }
} */


//조금더 정확하게 하기 위해서
/* function removeProperty(obj, key) {

  if (
    Object.prototype.toString.call(obj).slice(8, -1).toLowerCase() === 'object'
  ) {
    obj[key] = null;
  } else {
    throw new Error(
      'removeProperty 함수의 첫 번째 인수는 객체 타입만 사용할 수 있습니다.'
    );
  }

}
//개발에서는 타입 비교가 많이 한다.. 그런데 이렇게 계쇽해서 작성 할수 없으니 함수로..
 */

//
function removeProperty(obj, key) {
  if (isObject(obj)) {
    obj[key] = null;
  } else {
    throw new Error(
      'removeProperty 함수의 첫 번째 인수는 객체 타입만 사용할 수 있습니다.'
    );
  }
}




// 단축 프로퍼티
let name = '선범';
let email = 'seonbeom2@euid.dev';
let authorization = 'Lv. 99';
let isLogin = true;

//기존 데이터를 가지고, 새로운 객체를 만들자!

/* const student = {
  name: name,
  email : email,
  authorization : authorization,
  isLogin : isLogin,
} */
//중복 되는 애용들을 줄이자 - 제거
const student = {
  name,
  email,
  authorization,
  isLogin,
}
//이제 나중에 단축할려고 외부 변수명이랑 객체 프로퍼티 키네임이랑동일하게 세팅할려고 막 그럴거에요 라고 말씀을 해주셨다.





// 프로퍼티 이름 제한
// 예약어: class, if, switch, for, while, ...


// 객체가 프로퍼티를 포함하는 지 유무를 반환하는 유틸리티 함수 isEmptyObject 작성
function isEmptyObject() {
  return null;
}




/* ------------------------------------------- */
/* ⭐⭐⭐⭐⭐⭐⭐⭐⭐배열 구조 분해 할당  destructuring assignments   */
/* ------------------------------------------- */

const arr = [10,100,1000, 10_000, 100_000]

// arr[0]을 많이 사용하네..? 그러면 변수로 만들어서 사용을 하자!
//const a1 = arr[0]; //이렇게 하자 . 근데 이것 도 너무 힘들다..
//const a1 = arr[2]; 
//const a1 = arr[3]; 

const [a1,a2,a3] = arr;
//위에 식을 아래에서 풀어 사용하자..?? 순서가 중요하다. 변수는 바꾸어 쓸수도 있다.

//const [a1,a2,a3] = arr; a6가 없다면 여기서는 let a6; 만 사욯한 상태 여기서 만약 a6를 나중에라도 쓸거야.. a6 = 999로 사용, 값이 있으면 있는 값을 사용!

//const [a1, ,a3] = arr; a2를 비워두고 싶으며 이렇게 사용하면 된다. 사용하지 않는 값이다 _어 사용 해도 된다. 
// console.log( a1 );

/* //우사 배열들에고 사용 할수 ㅇ맀다.
const [first, second, third] = document.querySelectorAll('span');

console.log(third);

second.addEventListener('click', function () {
  this.style.color = 'orange';
});
 */


/* -------------------------------------------- */
/* 객체 구조 분해 할당  destructuring assignments    */
/* --------------------------------------------- */

const salaries = {
  이소망 : 330,
  박소연: 550,
  이유정: 130,
  김효경: 60
}

// salaries.이소망;
// salaries.박소연;
// salaries.이유경;

// 네이밍을 마음데로 지을수 없다. 실제 프로퍼티 키네임과 같아야합니다. 그래야 값이 나오게 된다. 함수에서 값을 뽑아 낼떄 많이 사용 , 실제로 많이 사용 한다. 
// 객체는 순서가 상관이 없다.
// 별칭 등록이 가능하다. 박소연:카페알바생 이런식으로 작성을 하면 된다. 이렇게 등록을 하면 앞에 있는 변수는 에러가 난다. 이름이 겹칠때 같은 컨테스트 안에서 그려면 알이라스를 사용해나라... 이 이유가 9할
//신재훈 = 30 이렇게 기본값을 줄수 도 있고, 알리아스도 줄수 있다.

const { 이소망, 박소연:카페알바생, 이유경, 김효경, 신재훈 = 30 } = salaries;
//오른쪽이 

console.log(이소망);


function createUserObject(obj) {
  const { name, age, address, phone, job, gender } = obj;

  return { name, age, address, phone, job, gender };
}

createUserObject({
  age: 30,
  phone: '010-7169-0262',
  name: 'tiger',
  address: '남양주시',
  job: '강사',
  gender: 'male'
});


