/* --------------- */
/* For Of Loop     */
/* --------------- */

//enumerable => 열거 가능한
//iterable => 반복 가능한
//mutable => 변형 가능한
//immutable => 변형 할 수 없는

//유사배열은 이터너블 하지 못하기 때문에 사용이 안된다.for of를 돌릴수 없다.

const languages = [
  {
    id: 'ecma-262',
    name: 'JavaScript',
    creator: 'Brendan Eich',
    createAt: 1995,
    standardName: 'ECMA-262',
    currentVersion: 2022,
  },
  {
    id: 'java',
    name: 'Java',
    creator: 'James Gosling',
    createAt: 1995,
    standardName: null,
    currentVersion: 18,
  },
  {
    id: 'ecma-334',
    name: 'C#',
    creator: 'Anders Hejlsberg',
    createAt: 2000,
    standardName: 'ECMA-334',
    currentVersion: 8,
  },
];

// for ~ of 문
// - 특정 조건에서 건너띄기
// - 특정 조건에서 중단하기

for (const value of languages) {  //languages의 배역의 값을 꺼내서 value에 넣겠다.
  const name = value.name; //꺼낸 객체에서 name 값만 가져와서 name이라는 변수에 넣는다.

  if (name.includes('Java') && name.length < 5) continue; //name에 'Java'가 포함되어 있고 그리고 문자열 길이가 5보다 작다면, 이번 반복은 건너뛴다.
  console.log(name);
}

const randomUser = {
  gender: 'female',
  name: { title: 'Ms', first: 'Carol', last: 'May' },
  location: {
    street: { number: 9162, name: 'Church Road' },
    city: 'Birmingham',
    state: 'Cumbria',
    country: 'United Kingdom',
    postcode: 'FO5E 4TN',
    coordinates: { latitude: '-4.3301', longitude: '155.0223' },
    timezone: {
      offset: '-4:00',
      description: 'Atlantic Time (Canada), Caracas, La Paz',
    },
  },
  email: 'carol.may@example.com',
  login: {
    uuid: '39e4e214-7f66-44a6-a3ba-3b5ce46b8e25',
    username: 'redduck745',
    password: 'picks',
    salt: '8xzqOzAn',
    md5: '7250e4042c2367cc82487f798c7c5253',
    sha1: '6c0e2fac669d6d7f11fb0bab52493f441cf5834b',
    sha256: '9e49256b8917113750533c24c015336af43d5d7130cf8faa19054c1ba36e7de8',
  },
  dob: { date: '1962-12-07T21:51:26.781Z', age: 59 },
  registered: { date: '2018-06-08T04:07:17.788Z', age: 4 },
  phone: '022 1280 9236',
  cell: '07653 428700',
  id: { name: 'NINO', value: 'SH 44 98 72 L' },
  picture: {
    large: 'https://randomuser.me/api/portraits/women/21.jpg',
    medium: 'https://randomuser.me/api/portraits/med/women/21.jpg',
    thumbnail: 'https://randomuser.me/api/portraits/thumb/women/21.jpg',
  },
  nat: 'GB',
};

console.clear();

const obj = {
  nickName: 'tiger',
  age: 30,
};

//객체는 이터너블 하지 안아서.. for of를 사용을 못한다. 심볼의 이터네이터가 있냐 없냐에따라 ...
//일반 객체는 기본적으로 Symbol.iterator가 없어서 for...of로 바로 순회할 수 없거, 배열은 Symbol.iterator를 가지고 있있다...

// 객체를 for of로 돌리고 싶다면, 객체를배열로 바꿔야 하기 때문에...그래서
// Object.keys() - 키 값들만 보아서  배열로 만들어 준다.
// Object.values()
// Object.entries()

//순서??
// 객체숙환 for in 을 써야 함  문제가 있음 조상의 아이템
// hasOwn.. 사용하면 해결됨
// for of는 그런거 필요없음..
// for in은 인터너블한 값이 필요한다.
// 그러면 객체를 배열로 바꿔버려!!

const keys = Object.keys(obj);
console.log(keys); //객체의 키 값을 모아 새로운 배열을 변환 하는 유틸 함수 [nickName, age]

for (const key of keys) {
  console.log(key);
}

const values = Object.values(obj); //객체의 밸류를 모아 새로운 배열을 반환 하는 유틸 함수 [tiger,30]

for (const value of values) {
  console.log(value);
}

const entries = Object.entries(obj); // 객체의 키와 벨류를 모아서 한 쌍의 배열로 반환하는 유틸 함수 - 정말 많이 사용한다.
// [[key, value],[key, value]]
console.log(entries);

/* for (const entrie of entries) {
  const key = entrie[0];
  const value = entrie[1];

  console.log(key, value);
}
 */

//구조분해 할당  위에 식과 같은 방식이다.
for (const [key, value] of entries) {
  console.log(key, value);
}

//for of는 배열의 껍대기를까주기 때문에 값만 나온다. 배열안에 배열이 들어가기 떄무에 안에 있는 배열이 나온다,. 키와 밸류응 담고 있디 떄뭉네 콘솔에 찍어보면 안에 있는 배열만 나오게 된다. 안에 있는 알맹이들은 키밸류를 가지도 있음 0번이 키 뱅유가 2번 값 키만 또 뽑기 글노끼가 변수를 만들어서 키는 기밧만 벨류는 벨류값만 나오게 변수지정 해서 확이하면 값만 뽑아서 보여준다. 중첩 중복은 안된다.

const scores = {
  html: 90,
  css: 75,
  javascript: 85,
  react: 60,
};

const score = Object.entries(scores);
for (const [key, value] of score) {
  // console.log(key, value);

  if (value >= 80) {
    console.log(key, value);
  }
}

// 객체의 키, 값 순환
// - for ~ in 문

/* for (const key in randomUser) {
  console.log(randomUser[key]);

  if (Object.hasOwn(randomUser, key)) {
    const L1 = randomUser[key];
    console.log(L1);
  }

  if (typeof key === 'object') {
  for(const key in L1){

  }
  }
} */
console.clear();
/* for (const key in randomUser) {
  if (Object.hasOwn(randomUser, key)) {
    const L1 = randomUser[key];
    console.log(L1);

    if (typeof L1 === 'object') {
      for (const key in L1) {
        if (Object.hasOwn(L1, key)) {
          const L2 = L1[key];

          console.log('\t', L2);

          if (typeof L2 === 'object') {
            for (const key in L2) {
              if (Object.hasOwn(L2, key)) {
                const L3 = L2[key];

                console.log('\t\t', L3);
              }
            }
          }
        }
      }
    }
  }
} */

// - for ~ of 문

/* for(const keyValue of Object.entries(randomUser)){
  const
} */
for (const keyValue of Object.entries(randomUser)) {
  const key = keyValue[0];
  const value = keyValue[1];
  console.log(value);

  if (typeof value === 'object') {
    for (const keyValue of Object.entries(value)) {
      const key = keyValue[0];
      const value = keyValue[1];
      console.log('\t', value);

      if (typeof value === 'object') {
        for (const keyValue of Object.entries(value)) {
          const key = keyValue[0];
          const value = keyValue[1];
          console.log('\t\t', value);
        }
      }
    }
  }
}

// - 성능 비교 진단
