/* ---------------- */
/* Switch           */
/* ---------------- */

const MORNING = '아침',
  LUNCH = '점심',
  DINNER = '저녁',
  NIGHT = '밤',
  LATE_NIGHT = '심야',
  DAWN = '새벽';

let thisTime = DAWN;

/* 다양한 상황에 맞게 처리 --------------------------------------------------- */

// 조건 유형(case): '아침'
// '뉴스 기사 글을 읽는다.'

// 조건 유형(case): '점심'
// '자주 가는 식당에 가서 식사를 한다.'

// 조건 유형(case): '저녁'
// '동네 한바퀴를 조깅한다.'

// 조건 유형(case): '밤'
// '친구에게 전화를 걸어 수다를 떤다.'

// 조건 유형(case): '심야'
// 조건 유형(case): '새벽'
// '한밤 중이거나, 새벽이니 아마도 꿈나라에 있을 것이다.'

switch (thisTime) {
  case MORNING:
    console.log('뉴스 기사 글을 읽는다.');
    break;
  case LUNCH:
    console.log('자주 가는 식당에 가서 식사를 한다.');
    break;
  case DINNER:
    console.log('동네 한바퀴를 조깅한다.');
    break;

  case NIGHT:
    console.log('친구에게 전화를 걸어 수다를 떤다.');
    break;

  case LATE_NIGHT:
  case DAWN:
    console.log('한밤 중이거나, 새벽이니 아마도 꿈나라에 있을 것이다.');
    break;
}

/* switch문 → if문 변환 --------------------------------------------------- */
if (thisTime === MORNING) {
  console.log('뉴스 기사 글을 읽는다.');
} else if (thisTime === LUNCH) {
  console.log('자주 가는 식당에 가서 식사를 한다.');
} else if (thisTime === DINNER) {
  console.log('동네 한바퀴를 조깅한다.');
} else if (thisTime === NIGHT) {
  console.log('친구에게 전화를 걸어 수다를 떤다.');
} else if (thisTime === LATE_NIGHT || thisTime === DAWN) {
  console.log('한밤 중이거나, 새벽이니 아마도 꿈나라에 있을 것이다.');
}

/* switch vs. if -------------------------------------------------------- */
//prmpt를 통해 숫자를 받는다.(0~6 까지)

/* let day = +prompt('숫자를 입력하세요','0~6 까지의 숫자만 입력 가능');

switch (day) {
  case 0:
    console.log('일');
    break;
  case 1:
    console.log('월');
    break;
  case 2:
    console.log('화');
    break;
  case 3:
    console.log('수');
    break;
  case 4:
    console.log('목');
    break;
  case 5:
    console.log('금');
    break;
  case 6:
    console.log('토');
    break;
  default:
    console.log('값이 존재하지 않습니다.');
} */

function days() {
  let day = +prompt('숫자를 입력하세요', '0~6 까지의 숫자만 입력 가능');

  switch (day) {
    case 0:
      console.log('일');
      break;
    case 1:
      console.log('월');
      break;
    case 2:
      console.log('화');
      break;
    case 3:
      console.log('수');
      break;
    case 4:
      console.log('목');
      break;
    case 5:
      console.log('금');
      break;
    case 6:
      console.log('토');
      break;
    default:
      console.log('값이 존재하지 않습니다.');
  }
}

//함수는 하나의 기능만을 수행하는 것을 목표로 합니다.
// 함수는 재사용성이 좋아야 한다.
function getRandom(n) {
  const day = Math.floor(Math.random() * n);

  return day;

  //return  Math.floor(Math.random() * 7); 이렇게 작성하면 된다.
  //문 함 식은 값이 나온다. 함수는 커스터마이징이 좋다. 값이 나오려면 return을 하면 된다.
}

function getDay() {
  const day = getRandom(7);

  switch (day) {
    case 0:
      return '일';
    case 1:
      return '월';
    case 2:
      return '화';
    case 3:
      return '수';
    case 4:
      return '목';
    case 5:
      return '금';
    case 6:
      return '토';
  }
}

/* function weekend() {
  const today = getDay();

  if (today.includes('토') || today.includes('일')) {
    return `오늘은 ${today}요일 입니다, 그러므로 주말 입니다.`;
  } else {
    return `오늘은 ${today}요일 입니다, 그러므로 평일 입니다.`;
  }
}
 */

function weekend() {
  const today = getDay();

  /* return today.includes('토') || today.includes('일')
    ? `오늘은 ${today}요일 입니다, 그러므로 주말 입니다.`
    : `오늘은 ${today}요일 입니다, 그러므로 평일 입니다.`; */
  const day =
    today.includes('토') || today.includes('일')
      ? `오늘은 ${today}요일 입니다, 그러므로 주말 입니다.`
      : `오늘은 ${today}요일 입니다, 그러므로 평일 입니다.`;

  return day;
}
//문자.includes<< 문자에 포함하고 있나 없나
