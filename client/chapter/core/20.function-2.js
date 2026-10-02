/* ----------------------- */
/* Functions → Expression  */
/* ----------------------- */

//함수 선언문
function calcTotal(moneyA, moneyB, moneyC, moneyD) {
  return moneyA + moneyB + moneyC + moneyD;
}

const resultX = calcTotal(10000, 8900, 1360, 2100);
const resultY = calcTotal(21500, 3200, 9800, 4700);
const resultZ = calcTotal(9000, -2500, 5000, 11900);

// console.log(resultX);
// console.log(resultY);
// console.log(resultZ);


// 함수 선언 → 일반 함수 (표현)식
let calculateTotal = function(){

  //함수 안에서만 접근 가능한 인수들의 집합 객체
  console.log(arguments);

  ///for문을 사용해서 모든 값의 합을 return
  // let total = 0;
  /*  
  for(let i = 0; i < arguments.length; i++){
    // total = total + arguments[i];
    total += arguments[i];
  }
  
  return total; */

  // --------------------------------------------

  //for...of를 사용해 모든 값을 합을 return 시켜주세요.

/*  for(let value of arguments){
    // console.log(value);

    //total = total + value; ...1번
    // 현재 total 값에 value를 더하고 다시 total에 저장 을 반복..?
    
    total += value; ...2번
  }
  for(let value of arguments) total += value;

    return total;
 */

// ------------------------------------------------


  //배열 메서드 forEach (값을 내보낼수 없어음) , reduce(값을 내보냄), map , filter

  //유사베열 -> 배열로 만들면 되지 않나?

  // const arr = Array.prototype.slice.call(arguments) 인스턴스 메서드 근본이 객체인 애들만 사용하는 ??? 어레이의 의해 생성되 생성자 함수로 ... ㅜㅜ

  //나 배열 쓰고 싶어.. 근데 나 배열 아니야 그래서 빌려 쓸께..????? 잉??
   // const arr = Array.from(arguments); 스테틱 메서드 내가 굳이 배열이 아니더라고 사용이 가능한 메서드 유틸 함수 언제든지 가져다가 사용할 수 있다.
  
  /* 
  왜ㅑ 다르가> 누구는 빌려쓰고 그냉써도 되는 .. 빌려쓰는 애들은 인스턴스 

  instance method는 정파라서 함부로 못 가져다 쓰니까 빌려쓴다
  진짜 배열이면 빌려서 안스고 바로 사용할 수 있다 [1,2,3].slice()라고 작성을 해야 하는 , 위에 아규먼트는 가짜 이기 때문에 빌려서 사용해 야 한다. 
  static method는 사파라서 막 써도 되니까 그냥 갖다 쓴다
  Array.from(arguments); 어레이꺼니까 가져다 쓸께..???
  */

  const arr= [... arguments] //spread operator 전개 연산자...

  // console.log(arr);
  /* 
  arr.forEach(function(value){
    console.log(value);
    total += value;

  })
  return total;   */

  // function sum (value, index){
  //   console.log(value, index);
  //   total += value;
  // }
  // arr.forEach(sum)



  //reduce는 초기 값을 설정하지 않으면, 배열의 첫번째 값을 acc에 할당합니다.
  //const aa = arr.reduce(function(acc,current){
    // console.log(acc);
    // console.log(current);

   // return acc/* 누적값 */ + current // 더해진 값이 다기 acc도 들어가고 또 다음 값과 더해거 다시 acc로 들어간다. 그리고 여기는 값을 리턴 하지 않기 때문에 리턴을 적어 주어야 한다. 
  // },0)


  //console.log(aa);
  


//  __ 던더 프로터 라고 한다. 부모 바꿔치기 술?
  arguments.__proto__ = Array.prototype;
  console.log(arguments)

  arguments.forEach(function(v){
    console.log(v);
    
  })








  // return total; 







  // return A + B + C + D + E + F + G;
};

const result = calculateTotal(10000,23500,38400,19900,18700,29800,9900)

console.log(result);

// 익명(이름이 없는) 함수 (표현)식
let anonymousFunctionExpression = function(){
  //이렇게 되엉 있는 함수를 이름이 없는 함수
};


// 유명(이름을 가진) 함수 (표현)식
let namedFunctionExpression = function hello (){
  //hello로 작동을 안돼고 함수를 찾을 깨 사용!
};


// 콜백 함수 (표현)식
let cb = function(condition, success, fail){
  if(condition) success();
  else fail();


};

cb(
  true,
  function(){
    console.log('성공입니다.');
    
  },
  function(){
    console.log('실패입니다.');
    
  }
)


//그래서 콜백 함수를 왜 사용하는 거야???

function movePage(url, success, fail){
  if(url.includes('https')){
    // 제대로 된 url
    success();
  }else{
    //이상란 url
    fail();
  }
}

movePage(
  'https://www.naver.com', 

  function(){
    console.log(`3초 뒤 해당 사이트로 이동합니다.`);
    
  },

  function(){
    console.log(`잘못된 url 정보를 입력하셨스니다.`);
    
  }
)



// 함수 선언문 vs. 함수 (표현)식


// 즉시 실행 함수 (표현)식
// Immediately Invoked Function Expression
let IIFE;

// 캡슐화
//클로저 CLOSURE 폐쇄
(function(){}())
