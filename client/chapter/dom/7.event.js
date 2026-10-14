/* --------------------- */
/* Event Handling        */
/* --------------------- */


/* 이벤트 핸들링 3가지 방법 --------------------------------------------------- */

// 1. HTML 속성 : onclick="handler()"
// 2. DOM 프로퍼티 : element.onclick = handler
// 3. 메서드 : element.addEventListener(event, handler[, phase])


const second = getNode('.second');


{/* <h1 lang="en" class="first" onclick="handler()"></h1> */}

// second.onclick = handler;

/* function handler(){
  console.log('clicked!');
  
} */

/* function handler(e) {
  console.log(e.altKey);
} */

/* function handler(e) {
  console.log(e.clientX, e.clientY);
  console.log(e.offsetX, e.offsetY);
  //내 위치에서 
} */

// second.addEventListener('click', handler);


/* function handler(e) {
  if (e.deltaY > 0) {
    console.log('up');
  } else {
    console.log('down');
  }
}

second.addEventListener('wheel', handler);
 */


const ground = getNode('.ground');
const ball = getNode('.ball');


function handler(e) {
  console.log(e.offsetX, e.offsetY);

  const w = ball.offsetWidth / 2;
  const h = ball.offsetHeight / 2;

  ball.style.transform = `translate(${e.offsetX-w}px,${e.offsetY-h}px)`;
}

/* let timeout;

function debounce(f,limit){

  clearTimeout(timeout)
  timeout = setTimeout(() => {
    f();
  }, limit);
} */




function moveHandler(e){

  const x = e.offsetX
  const y = e.offsetY
  console.log(e.offsetX, e.offsetY)
  const template = `
  <div class="emotion" style="top:${y-16}px; left:${x-16}px">🐯</div>
  `

  insertLast(ground, template);
  
}

ground.addEventListener('mousemove', throttle(moveHandler,300));

/* window.addEventListener('resize', () => {
  debounce(() => {
    console.log('resize!');
  },1000);
});
 */

window.addEventListener('resize', debounce(() => {console.log('resize!');}));

window.addEventListener('resize',throttle(()=>{console.log('resize!!!!!!!!!')}))


/* 이벤트 추가/제거 --------------------------------------------------------- */

// - addEventListener
// - removeEventListener