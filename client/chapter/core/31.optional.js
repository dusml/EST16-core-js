/* -------------------------- */
/* Optional Chaining          */
/* -------------------------- */


const portableFan = {
  maker: 'fromB',
  brand: 'FD221',
  type: 'neckband',
  photo: {
    static: 'https://bit.ly/3OS50UD',
    animate: 'https://bit.ly/3P8646q'
  },
  getFullName() {
    return `${this.brand}, ${this.maker}`;
  },
};

// 아래 코드는 문제가 있어 런타임 중 오류가 발생합니다.
// console.log(portableFan.photos.animate);

// 오류를 발생시키지 않으려면 아래와 같이 작성해야 합니다.
// if ('photos' in portableFan) {
//   if ('animate' in portableFan.photos) {
//     console.log(portableFan.photos.animate);
//   }
// }


// 위 구문을 논리곱 연산자를 사용한 방식으로 변경해봅니다.
// portableFan && portableFan.photos && portableFan.photos.animate

// 위 구문을 옵셔널 체이닝을 사용한 구문으로 변경해봅니다.
portableFan.photos?.animate

// 메서드 사용 시, 옵셔널 체이닝을 사용해봅니다.
const fullName = portableFan.getFullName?.()

// 객체의 프로퍼티 접근 시, 옵셔널 체이닝을 사용해봅니다.

//Browser API

//자바스크립트는 싱글 스레드 
//잡업 공간이 하나, 그래서 스텍이 싸이면 하나하나하나 해야 한다. 이를 동지적 일 처리 하나가 일처리 중이면 다른건 일처리가 안돼다. 

// console.log('1번 잡업 끝!');
// // console.log('2번 잡업 끝!');
// console.log('3번 잡업 끝!');


const button = document.querySelector('.btn');


setTimeout(()=>{
  console.log('2번 잡업 끝! 10s');
  const tag = /* html */ `
  <button type="button" class="btn">동적 생성된 버튼</button>
  `;

  document.body.insertAdjacentHTML('beforeend', tag);
},5000)




//코드의 흐름을 보고, 옵션널 체인지를 하든.. 


// setTimeout(()=>{
//   console.log('2번 잡업 끝! 10s');
//   const tag = /* html */ `
//   <button type="button" class="btn">동적 생성된 버튼</button>
//   `;

//   document.body.insertAdjacentHTML('beforeend', tag);

//   const button = document.querySelector('.btn');
//   button.addEventListener('click',()=>{})

// },5000)

//브라우저에서 일처리를 할수 있도로고 넘겨준다. 비동기
//clearTimeout


// ========================================
// console.log('1');


// function fibonacci(n) {
//   if (n <= 0) return 0;
//   if (n <= 2) return 1;
//   return fibonacci(n - 1) + fibonacci(n - 2);
// }


// fibonacci(40)


// setTimeout(()=>{
//   console.log('2');
// },2000)


// console.log('3');



// ===========================================

setInterval(()=>{
  console.log('반복하다.');
},1000)


let count = 0;

const h3 = document.querySelector('button');

/* const interval = setInterval(() => {
  h3.style.transform = `translate(0px,${++count}px) rotate(${++count}deg)`;

  if (count >= 200) {
    clearInterval(interval);
  }
}, 1); */


function animation() {

  h3.style.transform = `translate(0px,${++count}px) rotate(${++count}deg)`;

  const id = requestAnimationFrame(animation);

  if (count >= 300) {
    cancelAnimationFrame(id);
}

}

animation();

























