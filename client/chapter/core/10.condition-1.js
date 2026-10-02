/* ---------------- */
/* Condition        */
/* ---------------- */
/* const js = prompt(`자바스크립트의 '공식'이름은 무엇일까요?`);

if (js == 'ECMAScript') {
  alert('정답입니다!');
} else {
  alert('모르셨나요? 정답은 ECMAScript입니다.');
} */

// 그 영화 봤니?
//     ↓
// Yes | No
//     | 영화 볼거니?
//           ↓
//       Yes | No

// 영화 봤니?

// 영화 볼거니?

// if 문(statement)
function aa() {
  let didWatchMovie = confirm('그 영화 봤니??');
  if (didWatchMovie) {
    console.log('봤구나?');
  } else {
    let goingToWatchMovie = confirm('그 영화 볼거니??');

    if (goingToWatchMovie) {
      let who = prompt('누구랑 볼꺼야?');

      if (who === '너') {
        console.log('정말?');
      }
    } else {
      console.log('그래..??');
    }
  }
}
// else 절(clause)

// else if 복수 조건 처리

// 조건부 연산자

// 멀티 조건부 연산자 식
let didWatchMovie = 'no';
let goingToWatchMovie = 'yes';

// const mag = didWatchMovie === 'no' ? 'dd' : 'ss';
const mag = didWatchMovie.includes('no')
  ? '영화 재미 있겠다..'
  : goingToWatchMovie.includes('yes')
    ? '언제 보러갈래?'
    : '그래 잘가 안녕..';
