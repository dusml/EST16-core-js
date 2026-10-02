/* ---------------- */
/* For In Loop      */
/* ---------------- */

const JS = {
  creator: 'Brendan Eich',
  createAt: '1995.05',
  standardName: 'ECMAScript',
  currentVersion: 2023,
};

// in 문
console.log('creator' in JS); //우변에 값이 좌변에 있니를 물어보는 것이다. in문 앞에 값은 문자로 적어야 한다.
//console.log('toString' in JS)내가 가지고 있지 않더라도 물어 물어 올라간다. 그러면 조상에 있으면 트루로 나오게 된다.
//저건 조건문에도 사용이 가능하다.

/* 
  진짜 내가 가지고 싶은 값만 가지고 싶을 때는 ..? hasOwnProperty
*/

// 객체의 속성(property) 포함 여부 확인 방법
// - 모든 객체가 사용 가능하도록 속성이 확장되었을 때 포함 여부 결과는?

// 객체 자신의 속성인지 확인하는 방법
// - "자신(own)의 속성(Property)을 가지고있는지(hac) 확인 방법"이 덮어쓰여질 수 있는 위험에 대처하는 안전한 방법은?

console.log(JS.hasOwnProperty('nickName'));
/* 왜 자꾸 빨간줄이 나올까??  자바스크립트는 내가 가지고 있는  빌트인 곳건, 매서드를보호해 주지 않는다. hasOwnProperty을 누군가.. 사용하면, 작동이 안될 수 있다. */

console.log(Object.prototype.hasOwnProperty.call(JS, 'nickName'));
//빌려쓰다 call! 함수 파트에서 다시 많이 사용한다. call(인자, 값)
//모브젝트야 너의능력을 쓸거야 헤스원에 빌려서 누가 제이에스가 라는 뜻
console.log(Object.hasOwn(JS, 'nickName'));

// for ~ in 문
// - 객체 자신의 속성만 순환하려면?

console.clear();

for (const key in JS) {
  console.log(key);
}
//for (const key in JS) key는 변수 이름이여서 바꿀 수도 있다.

//정확히 원하는 대상드만 하고 싶을 경우

for (const key in JS) {
  if (Object.hasOwn(JS, key)) {
    //safe zone

    const value = JS[key];
    // console.log(key);
    console.log(key, value); //value
  }
}

// - 배열 객체 순환에 사용할 경우? for in은 배열을 순환할 때 사용하지 않는다. 그래서for of를 권장한다.
