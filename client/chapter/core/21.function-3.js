/* ---------------------- */
/* Functions → Arrow      */
/* ---------------------- */

const calculateTotal = function(moneyA, moneyB, moneyC, moneyD) {
  return moneyA + moneyB + moneyC + moneyD;
}
//함수 표현식이다.


let resultX = calculateTotal(10000, 8900, 1360, 2100);
let resultY = calculateTotal(21500, 3200, 9800, 4700);
let resultZ = calculateTotal(9000, -2500, 5000, 11900);

// console.log(resultX);
// console.log(resultY);
// console.log(resultZ);


// 함수 선언 → 화살표 함수 (표현)식
/* let calcAllMoney = function(a,b){
  return a + b;
};
calcAllMoney(1000,2000);
 */

//화살표 함수로 만들었다.
/* let calcAllMoney = (a,b) => {
  
  console.log(arguments);//화살표 함수는 최근에 나온 문법 안에 필요없는 내용을 버리고 라이트하게 나온다. 그중에 하나가 아규먼트를 없애서 화살표 함수에는 아규먼트를 사용할 수 없다. 그러면 이게 없으면 어떻게 하니...?? 이보다 더 좋은 기능을 해준다. 아래 코드를 보자!!
  
  
  
  return a + b;

};
calcAllMoney(1000,2000); */

// ...rest 레스트 파라민터! 여기서 이름은 꼭 렛터 라고 해야 하나?? 아니다! arges라고 하기도 하다 나머지 값이여서!  [...]전개연산자와 헷갈리면 안된다. 
/* let calcAllMoney = (...rest) => {

  console.log(rest)
  
  
  return a + b;

};
calcAllMoney(1000,2000, 3000, 4000, 5000, 6000); */

//이렇게 하면 앞에 값을 뺀 나머지 값이 배열로 들어간다.
let calcAllMoney = (...rest) => {

  // const first = rest[0]

  console.log(rest)
  
  //for...of 문을 사용해서 값의 합을 구하세요.
  /* let total = 0;
  for(const value of rest){
    total = total + value
  }
  console.log(total); */

  //for Each
  let total = 0;
  //function은 콜백함수 이다. value값이 반복하면서 같은 값이 나온다.
  // rest.forEach((value) => total += value)

  // console.log(total);

  //reduce ?? 이건 어떻게 확인하지..??
  return rest.reduce((acc,current) =>  acc + current,0)
    // console.log(acc)
    // console.log(current)
  

  
  // return a + b;

};
calcAllMoney(1000,2000, 3000, 4000, 5000, 6000, 7000);

// 화살표 함수와 this

//자바스크립트 세상에서 this는 어디에나 존재한다.


//일반 함수 : 나를 호출한 대상을 기준으로 this응 바인딩 한다.
function a(){
  console.log(this);
  //윈도우.. 나를 호출한 대상
  
}


// 화살표 함수 : this 자체를 바인딩 하지 않는다. 상위 컨텍스트에서 가져올 뿐.
const _a = () => console.log(this)
// 바인딩 = 묶어 준다. 나는 디스는 모르지만 가지고 올꼐 ... 상위 컨텐츠가 누구냐 바로 전역컨텐츠 이다. 그래서 그것 가져와서 보여주는 것 뿐이다.


a()
_a()

// 함수 선언문, 함수 표현식, 화살표 함수 
// 다양한 함수들은 객체 안에서도 사용할 수 있다. (메서드 method)
// 메서드 => 다양한 방법을 만들 수 있다.


// 일반 함수
// this : 나를 호출한 대상을 this
//constructor : 내장


// 화살표 함수
// this : 바인딩 하지 않음 => 상위 컨텍스트에서 찾음
//constructor : 비내장(서능 최적화)

//concise method
//constructor : 비내장(서능 최적화) 나를 호출한 대상을 자 찾기 때문에 매서드로 많이 사용을 합니다


//객체의 메서드를 사용해야 한다.concise method를 사용 근데 그 안에서 또 함수를 써야하는 일이 생긴다. 그러면 화샇표 함수 왜?? 바로 this 떄문에!!!
//그러면 일반 함수는 언제?? 간단한 더하기 함수에 서!! 보기가 편하기 떄문에!


const obj = {
  name:'tiger',
  age:30,
  sayHi:function(){ //일반함수 메써드
    console.log(this);
  },
  _sayHi:()=>{ //화살표 함수 메서드
    //여기에는 prototype가 없다.. 너 누구로부터 상속을 받았는가?를 물어보는 것이다.
    console.log(this);
  },
  __sayHi(){ //concise method: 간결하게 작성하는 법 -> 나를 호출한 대상이 잘 나온다!!!!! 가장 많이 사용하며, 메서드 축약현..!!
    console.log(this)
  }
}



/* const user = {
  name: '이소망',
  total: 0,
  grades:[30, 50, 90],
  totalGrades(){
    //grades를 가져와야 구하던가 하지..
    this.grades.forEach((grade) => this.total += grade)
  }
} */

  const user = {
  name: '이소망',
  total: 0,
  grades:[30, 50, 90],
  totalGrades(){
    //grades를 가져와야 구하던가 하지..
    this.grades.forEach(function(grade){
      this.total += grade
    },this)
  }
}

user.totalGrades();

//자바스크립트의 함수 양면의 얼굴
//1. normal function(일반함수) => 리턴값을 명시
//2. constructor function(생성자 함수) => 무조건 객체를 리턴한다.


/* 다음 함수를 작성해봅니다. -------------------------------------------------- */

// pow(numeric: number, powerCount: number): number;
let pow = (numeric,powerCount) => {
  let total = 1;

  for(let i = 0; i < powerCount; i++){
    total *= numeric
  }
  return total
}

let _pow = (numeric,powerCount) => {
  Array(powerCount).fill(null).reduce(acc => acc * numeric,1)
}








// repeat(text: string, repeatCount: number): string;
let repeat = (text,repeatCount) => {
  let total = '';//빈문자가 있어야 문자르 접할 할 수 있어서
  
  for(let i=0; i<repeatCount; i++){

    total += text
  }

  return total
}; 



let _repeat = (text,repeatCount) =>  Array(repeatCount).fill(null).reduce(acc=> acc + text,'')