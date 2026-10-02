# JavaScript 기초 학습 노트

EST 16기 수업에서 배운 JavaScript의 핵심 개념과 실습 코드를 정리하는 공간입니다.
변수와 자료형부터 연산자, 조건문, 반복문, 함수까지 직접 실행해 보며 동작 원리를 익힙니다.

## 목차

학습 파일 번호와 같은 순서로 정리했습니다. 학습 주제를 누르면 해당 내용으로 이동합니다.

| 순서 | 학습 주제 | 핵심 키워드 |
| --- | --- | --- |
| 01 | [코드 구조](#01-코드-구조) | 문장, 주석, 브라우저 대화상자 |
| 02 | [변수와 상수](#02-변수와-상수) | `let`, `const`, 재할당 |
| 03 | [엄격 모드](#03-엄격-모드) | `use strict` |
| 04 | [전역 객체](#04-전역-객체) | `globalThis`, 전역 변수 |
| 05 | [var와 스코프](#05-var와-스코프) | `var`, 함수 스코프, 중복 선언 |
| 06 | [데이터 타입](#06-데이터-타입) | `typeof`, `null`, `undefined` |
| 07 | [형 변환](#07-형-변환) | `Number`, `Boolean`, Truthy/Falsy |
| 08 | [기본 연산자](#08-기본-연산자) | 산술 연산, 증감, 우선순위 |
| 09 | [비교 연산자](#09-비교-연산자) | `==`, `===`, 문자열 비교 |
| 10 | [조건문과 조건부 연산자](#10-조건문과-조건부-연산자) | `if`, `else`, 삼항 연산자 |
| 11 | [논리 연산자와 로그인 실습](#11-논리-연산자와-로그인-실습) | `&&`, `\|\|`, `!`, `?.` |
| 12 | [switch와 함수 활용](#12-switch와-함수-활용) | `case`, `break`, `return` |
| 13 | [null 병합 연산자](#13-null-병합-연산자) | `??`, 기본값 지정 |
| 14 | [while 반복문](#14-while-반복문) | 조건 검사, 배열 순회, 역순회 |
| 15 | [do while과 DOM 탐색](#15-do-while과-dom-탐색) | 최소 한 번 실행, `break`, 형제 노드 |
| 16 | [for 반복문](#16-for-반복문) | `continue`, `break`, 배열 복사 |
| 17 | [for in과 객체 속성](#17-for-in과-객체-속성) | `in`, `Object.hasOwn`, 키 순회 |
| 18 | [for of와 구조 분해 할당](#18-for-of와-구조-분해-할당) | 이터러블, `Object.entries`, 구조 분해 |
| 19 | [함수 선언과 활용](#19-함수-선언과-활용) | 매개변수, 기본값, `return`, CSS 함수 |
| 20 | [함수 표현식과 콜백](#20-함수-표현식과-콜백) | `arguments`, 배열 변환, `reduce`, 콜백, IIFE |
| 21 | [화살표 함수와 this](#21-화살표-함수와-this) | 화살표 함수, 나머지 매개변수, `this`, 메서드 축약형 |
| 22 | [재귀 함수와 실행 컨텍스트](#22-재귀-함수와-실행-컨텍스트) | 종료 조건, 재귀 단계, 호출 스택, 메모이제이션 |

[키워드로 찾아보기](#키워드로-찾아보기) · [복습 질문](#복습-질문) · [실습 실행 방법](#실습-실행-방법)

## 키워드로 찾아보기

문법 이름이 기억나지 않을 때는 궁금한 내용으로 찾아보세요.

| 궁금한 내용 | 바로가기 |
| --- | --- |
| 변수 선언과 재할당 | [변수와 상수](#02-변수와-상수) |
| 전역 변수와 함수 스코프 | [전역 객체](#04-전역-객체) · [var와 스코프](#05-var와-스코프) |
| 자료형 종류와 `typeof null` | [데이터 타입](#06-데이터-타입) |
| 문자열을 숫자로 바꾸기, `parseInt`, `parseFloat` | [형 변환](#07-형-변환) |
| 빈 문자열과 공백, Truthy와 Falsy | [형 변환](#07-형-변환) |
| 홀수·짝수 판별, 산술 연산 | [기본 연산자](#08-기본-연산자) |
| `==`와 `===`의 차이 | [비교 연산자](#09-비교-연산자) |
| 조건에 따라 값 선택하기, 삼항 연산자 | [조건문과 조건부 연산자](#10-조건문과-조건부-연산자) |
| 논리 연산자의 반환값과 단락 평가 | [논리 연산자와 로그인 실습](#11-논리-연산자와-로그인-실습) |
| 입력 취소 처리, 공백 제거, 옵셔널 체이닝 | [논리 연산자와 로그인 실습](#11-논리-연산자와-로그인-실습) |
| 함수 반환값, 무작위 숫자와 요일 판정 | [switch와 함수 활용](#12-switch와-함수-활용) |
| `??`와 `\|\|`의 차이, 기본값 설정 | [null 병합 연산자](#13-null-병합-연산자) |
| 배열을 순방향·역방향으로 반복하기 | [while 반복문](#14-while-반복문) · [for 반복문](#16-for-반복문) |
| 조건과 관계없이 한 번 실행하기, 형제 노드 찾기 | [do while과 DOM 탐색](#15-do-while과-dom-탐색) |
| 반복 건너뛰기와 중단, 원본 배열 보존하기 | [for 반복문](#16-for-반복문) |
| 상속받은 속성과 객체 자신의 속성 구분하기 | [for in과 객체 속성](#17-for-in과-객체-속성) |
| 객체의 키와 값을 배열로 꺼내기, 구조 분해 할당 | [for of와 구조 분해 할당](#18-for-of와-구조-분해-할당) |
| 함수의 입력과 반환값, 단위 변환과 스타일 읽기·변경하기 | [함수 선언과 활용](#19-함수-선언과-활용) |
| 함수 표현식, 여러 인수의 합계, 배열 메서드 | [함수 표현식과 콜백](#20-함수-표현식과-콜백) |
| 성공·실패 콜백과 즉시 실행 함수 | [함수 표현식과 콜백](#20-함수-표현식과-콜백) |
| 화살표 함수의 반환값, rest와 spread의 차이 | [화살표 함수와 this](#21-화살표-함수와-this) |
| 객체 메서드와 콜백에서 this 사용하기 | [화살표 함수와 this](#21-화살표-함수와-this) |
| 재귀의 종료 조건과 함수 호출 스택 | [재귀 함수와 실행 컨텍스트](#22-재귀-함수와-실행-컨텍스트) |
| 피보나치 계산 결과 재사용, `memoFibo`와 캐시 | [메모이제이션](#메모이제이션과-memofibo) |

---

## 01. 코드 구조

학습 파일: [1.codeStructure.js](client/chapter/core/1.codeStructure.js)

- 문장과 주석으로 코드를 구성하고 실행 결과를 확인합니다.
- `alert()`는 메시지를 표시하고, `confirm()`은 확인 여부를 불리언으로 반환합니다.
- `prompt()`는 입력한 문자열을 반환하며, 취소하면 `null`을 반환합니다.

[↑ 목차로 돌아가기](#목차)

---

## 02. 변수와 상수

학습 파일: [2.variables.js](client/chapter/core/2.variables.js)

- `let`은 재할당할 수 있는 변수를 선언합니다.
- `const`는 재할당할 수 없는 변수를 선언합니다.
- 변수 이름은 저장하는 값의 의미가 드러나도록 작성합니다.

```js
let nickName = 'tiger';
nickName = 'lion';

const OUR_PLANET_NAME = 'earth';
```

[↑ 목차로 돌아가기](#목차)

---

## 03. 엄격 모드

학습 파일: [3.stricMode.js](client/chapter/core/3.stricMode.js)

- `'use strict'`는 엄격 모드를 적용합니다.
- 선언하지 않은 변수에 값을 할당하는 등의 실수를 오류로 확인할 수 있습니다.
- 스크립트나 함수 본문의 시작 부분에 작성합니다.

```js
'use strict';

let message = 'hello';
// 선언하지 않은 변수에 할당하면 ReferenceError가 발생합니다.
```

[↑ 목차로 돌아가기](#목차)

---

## 04. 전역 객체

학습 파일: [4.globalThis.js](client/chapter/core/4.globalThis.js)

- `globalThis`로 현재 실행 환경의 전역 객체에 접근합니다.
- 브라우저의 일반 `<script>`에서 최상위 `var` 선언은 전역 객체의 프로퍼티가 되지만, `let`과 `const` 선언은 그렇지 않습니다.

[↑ 목차로 돌아가기](#목차)

---

## 05. var와 스코프

학습 파일: [5.legacVar.js](client/chapter/core/5.legacVar.js)

- `var`는 함수 스코프를 가지며, 함수 밖에서는 전역 스코프를 가집니다.
- 블록만으로는 범위가 제한되지 않습니다. 블록 스코프를 가지는 `let`, `const`와 비교합니다.
- `var`는 같은 스코프에서 중복 선언을 허용합니다.

[↑ 목차로 돌아가기](#목차)

---

## 06. 데이터 타입

학습 파일: [데이터 타입](client/chapter/core/6.dataTypes.js)

| 타입 | 의미 | 예시 |
| --- | --- | --- |
| `undefined` | 값이 할당되지 않은 상태 | `let value;` |
| `null` | 의도적으로 비어 있음을 나타내는 값 | `null` |
| `string` | 문자열 | `'hello'` |
| `number` | 숫자 | `10`, `1.23` |
| `bigint` | 큰 정수를 표현할 수 있는 타입 | `123n` |
| `boolean` | 참과 거짓 | `true`, `false` |
| `symbol` | 고유한 식별자 | `Symbol('id')` |
| `object` | 여러 값이나 복잡한 데이터를 담는 객체 | `{ name: 'tiger' }` |

`typeof` 연산자로 값의 타입을 확인합니다. 배열과 함수도 객체에 속하지만, `typeof`의 결과는 배열이 `'object'`, 함수가 `'function'`입니다.

```js
typeof 10;        // 'number'
typeof 'hello';   // 'string'
typeof undefined; // 'undefined'
typeof null;      // 'object' — 언어의 오래된 특수 동작
```

[↑ 목차로 돌아가기](#목차)

---

## 07. 형 변환

학습 파일: [형 변환](client/chapter/core/7.typeConversion.js)

- `String()`, `Number()`, `Boolean()`으로 타입을 명시적으로 변환합니다.
- 연산 과정에서 타입이 자동으로 바뀌는 암시적 형 변환도 발생합니다.
- `parseInt()`와 `parseFloat()`는 문자열의 앞부분에서 각각 정수와 소수를 읽습니다.

```js
String(2026);          // '2026'
Number('100');         // 100
Number(undefined);     // NaN
Number(null);          // 0
parseInt('120.5px');    // 120
parseFloat('120.5px');  // 120.5
```

**Truthy와 Falsy**는 불리언으로 변환했을 때 참인지 거짓인지를 나타냅니다.

- 대표적인 Falsy 값: `false`, `0`, `-0`, `0n`, `''`, `null`, `undefined`, `NaN`
- 주의할 Truthy 값: `'0'`, `' '`, `[]`, `{}`

빈 문자열 `''`과 공백이 들어 있는 문자열 `' '`은 서로 다릅니다.

[↑ 목차로 돌아가기](#목차)

---

## 08. 기본 연산자

학습 파일: [8.operation1.js](client/chapter/core/8.operation1.js)

- 산술 연산자: `+`, `-`, `*`, `/`, `%`, `**`
- 증감 연산자: `++`, `--`
- `+`는 숫자의 덧셈뿐 아니라 문자열 연결에도 사용합니다.
- `%`로 나머지를 구해 홀수와 짝수를 판별할 수 있습니다.

```js
'10' + '30';   // '1030'
+'10' + +'30'; // 40
5 % 2;        // 1 → 홀수 판별에 활용
```

연산자가 여러 개 등장하면 우선순위를 확인하고, 괄호로 계산 의도를 분명하게 표현합니다.

[↑ 목차로 돌아가기](#목차)

---

## 09. 비교 연산자

학습 파일: [9.operation2.js](client/chapter/core/9.operation2.js)

- 비교 연산자: `>`, `<`, `>=`, `<=`
- `==`는 타입 변환이 일어날 수 있는 동등 비교, `===`는 타입 변환 없이 비교하는 엄격한 동등 비교입니다.
- `!=`와 `!==`는 각각 동등 비교와 엄격한 동등 비교의 반대 결과를 반환합니다.
- 문자열은 앞 문자부터 순서대로 비교합니다.

```js
10 == '10';  // true
10 === '10'; // false
10 !== '10'; // true
6 < 10;      // true
```

[↑ 목차로 돌아가기](#목차)

---

## 10. 조건문과 조건부 연산자

학습 파일: [조건문](client/chapter/core/10.condition-1.js)

- `if`는 조건이 참일 때 코드를 실행합니다.
- `else if`는 앞선 조건이 거짓일 때 다음 조건을 검사합니다.
- `else`는 앞선 조건이 모두 거짓일 때 실행합니다.
- 조건부 연산자 `조건 ? 값1 : 값2`는 조건에 따라 값을 선택합니다.

```js
const didWatchMovie = false;
const message = didWatchMovie ? '영화를 봤어요.' : '아직 보지 않았어요.';
```

[↑ 목차로 돌아가기](#목차)

---

## 11. 논리 연산자와 로그인 실습

학습 파일: [논리 연산자](client/chapter/core/11.condition-2.js)

| 연산자 | 동작 |
| --- | --- |
| `&&` | 왼쪽부터 평가해 첫 Falsy 값을 반환하며, 모두 Truthy이면 마지막 값을 반환 |
| `\|\|` | 왼쪽부터 평가해 첫 Truthy 값을 반환하며, 모두 Falsy이면 마지막 값을 반환 |
| `!` | 불리언으로 변환한 결과를 반대로 반환 |

`&&`와 `||`는 항상 불리언을 반환하는 것이 아니라, 평가한 피연산자의 값을 반환합니다. 결과가 결정되면 나머지 표현식은 평가하지 않습니다.

```js
10 && '';       // ''
10 || '';       // 10
true && [];     // []
false || '' || 2; // 2
!false;         // true
```

로그인 실습에서는 다음 내용을 함께 연습합니다.

- `prompt()`로 아이디와 비밀번호 입력받기
- `toLowerCase()`로 아이디의 대소문자를 구분하지 않고 비교하기
- 중첩 조건문으로 성공, 취소, 인증 실패 나누기
- `null`과 빈 문자열, 공백 문자열 구분하기
- `userName?.toLowerCase()`처럼 옵셔널 체이닝 사용하기
- `replace(/\s*/g, '')`로 공백 문자 제거하기
- 함수에서 `return`으로 실행을 일찍 종료하기

옵셔널 체이닝은 앞의 값이 `null` 또는 `undefined`이면 해당 체인의 평가를 중단하고 `undefined`를 반환합니다.

[↑ 목차로 돌아가기](#목차)

---

## 12. switch와 함수 활용

학습 파일: [switch와 요일 실습](client/chapter/core/12.condition-3.js)

- `switch`는 값을 각 `case`와 엄격한 동등 비교로 대조합니다.
- `break`로 분기를 끝내고, `default`로 일치하는 값이 없는 경우를 처리합니다.
- 여러 `case`가 같은 코드를 실행하도록 묶을 수 있습니다.
- 함수의 매개변수로 입력을 받고, `return`으로 결과를 돌려줍니다.

실습에서는 시간대별 행동을 `switch`와 `if`로 각각 표현합니다. 이후 `Math.random()`과 `Math.floor()`로 무작위 요일을 만들고, `includes()`와 조건부 연산자로 주말·평일을 판정합니다.

```js
function getRandom(n) {
  return Math.floor(Math.random() * n);
}

getRandom(7); // 0부터 6까지의 정수 중 하나
```

[↑ 목차로 돌아가기](#목차)

---

## 13. null 병합 연산자

학습 파일: [null 병합 연산자](client/chapter/core/13.condition-4.js)

`??`는 왼쪽 값이 `null` 또는 `undefined`일 때만 오른쪽 값을 사용합니다. `||`는 왼쪽 값이 Falsy이면 오른쪽 값을 사용한다는 차이가 있습니다.

```js
undefined ?? '기본값'; // '기본값'
null ?? '기본값';      // '기본값'
0 ?? 100;             // 0
0 || 100;             // 100
'' ?? '기본값';        // ''
'' || '기본값';        // '기본값'
```

`0`, `false`, `''`도 유효한 입력값이라면 기본값을 지정할 때 `??`를 활용할 수 있습니다.

[↑ 목차로 돌아가기](#목차)

---

## 14. while 반복문

학습 파일: [14.loop-1.js](client/chapter/core/14.loop-1.js)

- `while`은 조건이 참인 동안 반복하며, 실행 전에 조건을 검사합니다.
- 배열의 `length`를 기준으로 반복하면 항목 수가 바뀌어도 순회할 수 있습니다.
- 배열 인덱스는 `0`부터 시작하므로 마지막 항목의 인덱스는 `length - 1`입니다.
- 반복 변수를 변경해 종료 조건에 도달하도록 합니다.

```js
const subjects = ['HTML', 'CSS', 'JavaScript'];
let i = 0;

while (i < subjects.length) {
  console.log(subjects[i]);
  i++;
}

let remaining = subjects.length;
while (remaining) {
  console.log(subjects[--remaining]); // JavaScript → CSS → HTML
}
```

[↑ 목차로 돌아가기](#목차)

---

## 15. do while과 DOM 탐색

학습 파일: [15.loop-2.js](client/chapter/core/15.loop-2.js)

- `do...while`은 본문을 실행한 뒤 조건을 검사하므로 최소 한 번 실행됩니다.
- `break`를 만나면 조건이 참이어도 반복을 즉시 종료합니다.
- DOM 탐색 실습에서는 `document.querySelector()`로 요소를 찾고 형제 노드를 따라 이동하는 함수를 연습합니다.
- `nextSibling`과 `previousSibling`은 텍스트·주석 노드도 포함합니다. `nodeType === 1`로 요소 노드인지 구분합니다.
- 외부 스크립트에 `defer`를 지정하면 HTML 파싱이 끝난 뒤 실행되어 문서의 요소에 접근할 수 있습니다.

```js
let i = 0;
do {
  console.log(i);
  if (i === 3) break;
  i++;
} while (i < 5); // 0, 1, 2, 3
```

형제 노드 탐색 함수는 작성 중인 실습입니다. 선택자를 요소로 변환한 뒤 다시 조회하지 않도록 하고, 이전 형제 탐색에는 `previousSibling`을 사용합니다. 더 이상 형제가 없으면 `null`이므로 `nodeType`에 접근하기 전에 확인해야 합니다.

[↑ 목차로 돌아가기](#목차)

---

## 16. for 반복문

학습 파일: [16.loop-3.js](client/chapter/core/16.loop-3.js)

- `for (초기식; 조건식; 증감식)`으로 반복 흐름을 한곳에 작성합니다.
- `continue`는 현재 반복의 나머지를 건너뛰고, `break`는 반복문 전체를 종료합니다.
- `split(' ')`으로 문자열을 공백 기준으로 나눠 배열을 만듭니다.
- 실습에서는 SVG·jQuery를 건너뛰거나, jQuery를 만나기 전에 반복을 중단합니다.

```js
const subjects = 'HTML CSS SVG JavaScript jQuery React'.split(' ');

for (let i = 0; i < subjects.length; i++) {
  const value = subjects[i];
  if (value === 'SVG' || value === 'jQuery') continue;
  console.log(value);
}
```

`shift()`는 첫 항목을, `pop()`은 마지막 항목을 제거하고 반환합니다. 두 메서드는 원본 배열을 변경하므로, 원본을 보존하려면 `[...배열]`로 얕게 복사한 배열에 사용합니다.

```js
const copied = [...subjects];
while (copied.length) {
  console.log(copied.pop()); // 복사본에서 역순으로 꺼내기
}
console.log(subjects); // 원본 배열 유지
```

[↑ 목차로 돌아가기](#목차)

---

## 17. for in과 객체 속성

학습 파일: [17.loop-4.js](client/chapter/core/17.loop-4.js)

- `'속성명' in 객체`는 상속받은 속성까지 포함해 존재 여부를 확인합니다.
- `Object.hasOwn(객체, 키)`는 객체 자신의 속성인지 확인합니다.
- `for...in`은 상속받은 속성을 포함해 열거 가능한 문자열 키를 순회합니다.
- `객체[key]`로 현재 키에 해당하는 값을 가져옵니다.

```js
const language = { name: 'JavaScript', creator: 'Brendan Eich' };

for (const key in language) {
  if (Object.hasOwn(language, key)) {
    console.log(key, language[key]);
  }
}
```

객체의 `hasOwnProperty`가 다른 값으로 덮어써질 수 있으므로, 자신의 속성을 확인할 때는 `Object.hasOwn()` 또는 `Object.prototype.hasOwnProperty.call()`을 사용할 수 있습니다. 배열의 값을 순회할 때는 `for...of`를 활용합니다.

[↑ 목차로 돌아가기](#목차)

---

## 18. for of와 구조 분해 할당

학습 파일: [18.loop-5.js](client/chapter/core/18.loop-5.js)

- `for...of`는 배열·문자열처럼 이터러블(반복 가능한 값)의 값을 하나씩 가져옵니다.
- 일반 객체는 기본적으로 이터러블이 아니므로 `for...of`로 직접 순회할 수 없습니다.
- 유사 배열도 인덱스와 `length`만으로는 충분하지 않으며, 반복자 지원 여부에 따라 `for...of` 사용 가능 여부가 결정됩니다.

| 메서드 | 반환하는 배열 |
| --- | --- |
| `Object.keys(obj)` | 객체 자신의 열거 가능한 문자열 키 |
| `Object.values(obj)` | 해당 키의 값 |
| `Object.entries(obj)` | 해당 키와 값을 묶은 `[key, value]` 쌍 |

구조 분해 할당을 사용하면 각 쌍의 `0`번과 `1`번 항목을 변수에 바로 담을 수 있습니다.

```js
const obj = { nickName: 'tiger', age: 30 };
const entries = Object.entries(obj);
// [['nickName', 'tiger'], ['age', 30]]

for (const [key, value] of entries) {
  console.log(key, value);
}
```

위의 `[key, value]`는 반복마다 `const key = entry[0]`, `const value = entry[1]`로 꺼내는 것과 같은 역할입니다.

실습에서는 언어 목록에서 특정 항목을 `continue`로 건너뛰고, 점수 객체에서 80점 이상인 과목을 출력합니다. 중첩 객체는 `Object.entries()`와 중첩 반복문으로 탐색합니다. 객체 여부를 검사할 때는 `typeof null`도 `'object'`이므로 `value !== null` 조건을 함께 확인합니다.

```js
const scores = { html: 90, css: 75, javascript: 85, react: 60 };

for (const [subject, score] of Object.entries(scores)) {
  if (score >= 80) console.log(subject, score);
}
```

[↑ 목차로 돌아가기](#목차)

---

## 19. 함수 선언과 활용

학습 파일: [19.function-1.js](client/chapter/core/19.function-1.js)

- 함수 선언으로 재사용할 코드를 묶고, 함수 이름 뒤에 `()`를 붙여 호출합니다.
- **매개변수(parameter)**는 선언할 때 입력을 받는 변수이고, **인수(argument)**는 호출할 때 전달하는 값입니다.
- `return`은 결과를 반환하고 함수를 종료합니다. 반환값을 지정하지 않으면 `undefined`를 반환합니다.
- 매개변수 기본값은 인수를 생략하거나 `undefined`를 전달했을 때 적용됩니다. `null`, `0`, `''`에는 적용되지 않습니다.

```js
function calcPrice(priceA, priceB, priceC = 0) {
  return priceA + priceB + priceC;
}

const total = calcPrice(1000, 1300); // 2300
```

학습 파일에서는 `priceC = getRandomValue()`로 기본값에 함수 호출도 사용합니다. 기본값이 필요한 호출마다 평가되어 `calcPrice(1000, 1300)`의 결과는 2300 또는 2301이 됩니다.

다음 함수들을 만들며 입력 처리와 반환값을 연습합니다.

| 함수 | 실습 내용 |
| --- | --- |
| `rem(pxValue, base = 16)` | 문자열 입력을 `parseInt()`로 변환하고 기준 크기로 나눠 rem 문자열 반환 |
| `getCss(node, prop)` | 선택자 또는 요소를 받아 `getComputedStyle()`로 스타일 값 읽기 |
| `setCss(node, prop, value)` | 요소의 인라인 스타일 변경 |
| `css(node, prop, value)` | 스타일 조회·변경 함수를 하나로 묶기 |

`throw new Error()`로 잘못된 입력을 알리고, `console.assert(rem('30px') === '1.875rem')`로 예상 결과를 확인합니다. 현재 실습의 `!value` 검사는 `0`도 누락으로 처리하므로, 유효한 입력 범위에 따라 값이 생략되었는지와 Falsy인지를 구분해야 합니다.

파일 끝에는 클릭 이벤트로 글자 크기를 조절하는 추가 과제와 함수 캡슐화에 대한 메모가 있습니다.

[↑ 목차로 돌아가기](#목차)

---

## 20. 함수 표현식과 콜백

학습 파일: [20.function-2.js](client/chapter/core/20.function-2.js)

### 함수 선언문과 함수 표현식

- 함수 선언문은 `function calcTotal() { ... }`처럼 선언합니다.
- 함수 표현식은 함수를 값으로 만들어 `let calculateTotal = function() { ... };`처럼 변수에 저장합니다.
- 함수 선언문은 같은 스코프에서 선언 위치보다 앞에서도 호출할 수 있습니다. `let`에 저장한 함수 표현식은 초기화된 뒤에 호출해야 합니다.
- 익명 함수 표현식은 함수 자체의 이름이 없고, 기명 함수 표현식은 `function hello() { ... }`처럼 이름이 있습니다.
- 기명 함수 표현식의 이름은 함수 내부에서 자신을 참조할 때 사용합니다. 외부에서는 함수를 저장한 변수로 호출합니다.

```js
const namedFunctionExpression = function hello() {
  console.log('hello');
};

namedFunctionExpression();
// hello(); // 외부에서 이 이름으로 호출하면 ReferenceError
```

### arguments와 배열 변환

일반 함수의 `arguments`는 전달받은 인수들을 담는 유사 배열 객체입니다. 인덱스와 `length`로 접근하거나 `for...of`로 순회할 수 있지만, 배열 메서드를 바로 가지고 있지는 않습니다.

| 변환 방법 | 의미 |
| --- | --- |
| `Array.prototype.slice.call(arguments)` | 배열의 인스턴스 메서드 `slice`를 빌려 사용 |
| `Array.from(arguments)` | `Array`의 정적 메서드로 배열 생성 |
| `[...arguments]` | 전개 구문으로 인수들을 새 배열에 담기 |

`[1, 2, 3].slice()`처럼 인스턴스 메서드는 배열을 통해 호출하고, `Array.from()`처럼 정적 메서드는 생성자 자체를 통해 호출합니다.

### forEach와 reduce로 합계 구하기

- `forEach()`는 각 항목에 콜백을 실행하고, 메서드 자체는 `undefined`를 반환합니다. 외부의 `total`에 값을 더한 뒤 함수에서 `return total`로 반환할 수 있습니다.
- `reduce()`는 콜백의 반환값을 다음 순회의 누적값으로 전달하고, 최종 누적값을 반환합니다.
- `reduce()`의 초기값을 생략하면 첫 항목이 누적값이 됩니다. 빈 배열에도 합계 계산이 가능하도록 초기값 `0`을 지정합니다.

```js
const calculateTotal = function() {
  const arr = [...arguments];

  return arr.reduce(function(acc, current) {
    return acc + current;
  }, 0);
};

calculateTotal(10000, 23500, 38400, 19900, 18700, 29800, 9900); // 150200
calculateTotal(); // 0
```

원본의 현재 실행 코드는 `arguments.__proto__ = Array.prototype`으로 프로토타입을 바꿔 `forEach()`를 사용해 보는 실험입니다. 실제 배열로 변환되는 것은 아니므로, 배열 메서드가 필요할 때는 위의 배열 변환 방법을 사용합니다. 현재 `calculateTotal()`에는 실행되는 `return`이 없어 마지막 `console.log(result)`는 `undefined`를 출력합니다.

### 콜백 함수

콜백은 다른 함수에 인수로 전달되어 그 함수에서 호출되는 함수입니다. 실습의 `cb(condition, success, fail)`은 조건에 따라 성공 또는 실패 콜백을 실행합니다.

```js
const cb = function(condition, success, fail) {
  if (condition) success();
  else fail();
};

cb(
  true,
  function() { console.log('성공입니다.'); },
  function() { console.log('실패입니다.'); }
);
```

`movePage(url, success, fail)`에서는 URL 문자열에 `'https'`가 포함되었는지에 따라 서로 다른 콜백을 실행합니다. 이 예제는 메시지만 출력하며 실제 페이지 이동이나 3초 지연을 구현하지는 않습니다. `includes('https')` 역시 URL 형식 전체를 검증하는 검사는 아닙니다. 두 실습의 콜백은 즉시 실행되므로, 콜백이 항상 비동기적으로 실행되는 것은 아닙니다.

### 즉시 실행 함수(IIFE)

즉시 실행 함수는 함수 표현식을 만든 직후 호출하는 형태입니다. 함수 내부에 변수를 두어 외부 스코프와 분리하는 캡슐화를 연습합니다.

```js
(function() {
  const message = '함수 내부에서만 접근';
  console.log(message);
}());
```

파일 끝에는 IIFE의 기본 형태와 클로저에 대한 메모가 있습니다. 클로저는 함수가 자신이 만들어진 환경의 변수에 접근할 수 있는 성질이며, IIFE 자체와 같은 뜻은 아닙니다.

[↑ 목차로 돌아가기](#목차)

---

## 21. 화살표 함수와 this

학습 파일: [21.function-3.js](client/chapter/core/21.function-3.js)

### 화살표 함수 표현식

- `function` 대신 `=>`를 사용해 함수 표현식을 작성합니다.
- 본문이 하나의 표현식이면 중괄호와 `return`을 생략할 수 있습니다.
- 중괄호로 본문을 작성하면 결과를 반환할 때 `return`을 명시해야 합니다.
- 매개변수가 하나면 괄호를 생략할 수 있고, 없거나 여러 개면 괄호가 필요합니다.
- 화살표 함수는 자신의 `arguments`와 `this`를 만들지 않습니다. 해당 값을 참조하면 바깥 스코프에서 찾습니다.

```js
const add = (a, b) => a + b;
const double = value => value * 2;
const addWithBlock = (a, b) => {
  return a + b;
};
```

### 나머지 매개변수(rest)와 전개 구문(spread)

나머지 매개변수는 전달받은 인수들을 실제 배열로 모읍니다. 이름은 `rest`, `args` 등 자유롭게 지정할 수 있으며, 매개변수 목록의 마지막에만 작성합니다.

```js
const calcAllMoney = (...rest) => {
  return rest.reduce((acc, current) => acc + current, 0);
};

calcAllMoney(1000, 2000, 3000, 4000, 5000, 6000, 7000); // 28000
calcAllMoney(); // 0
```

| 구문 | 역할 | 예시 |
| --- | --- | --- |
| 나머지 매개변수 | 여러 인수를 배열로 모으기 | `(first, ...rest) => rest` |
| 전개 구문 | 배열 등의 항목을 펼치기 | `calcAllMoney(...values)` |

`(...rest)`는 모든 인수를 모으고, `(first, ...rest)`는 첫 인수를 `first`에 담은 뒤 나머지만 배열로 모읍니다.

### 일반 함수와 화살표 함수의 this

일반 함수의 `this`는 호출 방식에 따라 결정됩니다. `obj.sayHi()`처럼 메서드로 호출하면 `this`는 `obj`입니다. 일반 함수를 단독 호출하면 엄격 모드에서는 `undefined`, 비엄격 모드에서는 전역 객체가 됩니다.

화살표 함수는 호출 대상에 따라 `this`를 새로 바인딩하지 않고, 자신이 정의된 바깥 환경의 `this`를 사용합니다. 객체 안에 화살표 함수를 넣어도 그 객체가 자동으로 `this`가 되지는 않습니다.

```js
const obj = {
  name: 'tiger',
  sayHi: function() {
    console.log(this.name);
  },
  __sayHi() {
    console.log(this.name);
  },
};

obj.sayHi();   // 'tiger'
obj.__sayHi(); // 'tiger'
```

`__sayHi() { ... }`는 메서드 축약형(concise method)입니다. 일반적인 `function` 선언·표현식은 `new`로 생성자 호출을 할 수 있지만, 화살표 함수와 메서드 축약형은 생성자로 사용할 수 없습니다. 함수의 `.prototype` 속성은 생성자 사용과 관련되며, 객체의 상속 관계를 나타내는 내부 프로토타입과는 구분합니다.

### 메서드 안의 콜백에서 this 유지하기

메서드 안에서 화살표 콜백을 사용하면 메서드의 `this`를 그대로 참조합니다.

```js
const user = {
  total: 0,
  grades: [30, 50, 90],
  totalGrades() {
    this.grades.forEach(grade => this.total += grade);
  },
};

user.totalGrades();
console.log(user.total); // 170
```

원본의 실행 코드는 일반 함수 콜백을 사용하고 `forEach(function(grade) { ... }, this)`처럼 두 번째 인수(`thisArg`)를 전달해 콜백의 `this`를 지정합니다. 두 방식 모두 점수를 더할 수 있습니다. 현재 함수는 기존 `total`에 누적하므로 여러 번 호출하면 합계도 계속 증가합니다.

[↑ 목차로 돌아가기](#목차)

---

## 22. 재귀 함수와 실행 컨텍스트

학습 파일: [22.function-4.js](client/chapter/core/22.function-4.js)

### 재귀의 기본 구조

재귀는 함수가 자기 자신을 다시 호출하여 문제를 더 작은 문제로 나누는 방식입니다.

- **재귀 기반(base)**: 더 이상 자신을 호출하지 않고 결과를 반환하는 종료 조건입니다.
- **재귀 단계(step)**: 문제의 크기를 줄여 자신을 다시 호출하는 과정입니다.
- **재귀 깊이(depth)**: 중첩된 재귀 호출의 깊이입니다.

```js
function pow(x, n) {
  if (n === 1) return x;
  return x * pow(x, n - 1);
}

pow(2, 4); // 16
// 2 * pow(2, 3) → 2 * 2 * pow(2, 2) → 2 * 2 * 2 * pow(2, 1)
```

원본의 `pow()`는 지수가 1 이상인 정수일 때 종료 조건에 도달합니다. `0`이나 음수를 전달하면 이 종료 조건에 도달하지 못하므로 입력 범위와 종료 조건을 함께 고려해야 합니다.

### 팩토리얼과 피보나치

| 함수 | 재귀 관계 | 원본의 종료 조건 | 결과 예시 |
| --- | --- | --- | --- |
| `factorial(n)` | `n * factorial(n - 1)` | `n === 1`이면 `1` 반환 | `factorial(4)` → `24` |
| `fibonacci(n)` | `fibonacci(n - 1) + fibonacci(n - 2)` | `n <= 0`이면 `0`, `n <= 2`이면 `1` 반환 | `fibonacci(6)` → `8` |

팩토리얼은 양의 정수들을 곱하고, 피보나치는 앞의 두 항을 더합니다. 원본의 `factorial()`도 1 이상인 정수를 기준으로 작성되어 있어, 수학에서 `0! = 1`인 경우는 별도의 종료 조건이 필요합니다.

### 메모이제이션과 memoFibo

메모이제이션(memoization)은 한 번 계산한 결과를 저장해 두었다가 같은 입력이 들어오면 다시 계산하지 않고 꺼내 쓰는 방법입니다. 단순 재귀 피보나치에서 같은 항을 반복 계산하는 문제를 줄일 수 있습니다.

`memoFibo.cache = {}`는 함수 객체에 `cache`라는 속성을 추가합니다. 이 객체에 입력 `n`을 키로, 계산한 피보나치 수를 값으로 저장합니다.

원본 코드가 의도하는 흐름은 다음과 같습니다.

1. `n <= 0`, `n <= 2`이면 종료 조건의 값을 바로 반환합니다.
2. `cache`에 `n`의 결과가 있으면 저장된 값을 반환합니다.
3. 결과가 없으면 `memoFibo(n - 1)`과 `memoFibo(n - 2)`를 더합니다.
4. 계산한 값을 `cache[n]`에 저장하고 반환합니다.

학습 파일에 작성된 예제:

```js
const memoFibo = (n) => {
  if(n <= 0) return 0;
  if(n <= 2) return 1;

  if(memoFibo.cache[n]){
    return memoFibo.cache[n];
  }else{
    return memoFibo.cache[n] = memoFibo.cache(n-1) + memoFibo.cache(n-2)
  }

}

memoFibo.cache = {}
```

`if (memoFibo.cache[n])`는 저장된 값의 Truthy 여부를 검사합니다. 종료 조건 이후에 저장하려는 피보나치 수는 양수이므로 이 검사로 재사용 여부를 판단할 수 있습니다. 다른 계산에서 `0`도 캐시에 저장한다면 값의 Truthy 여부와 저장 여부를 구분해야 합니다.

`return memoFibo.cache[n] = ...`는 오른쪽의 계산 결과를 캐시에 저장하면서 그 값을 반환하는 표현입니다. 다만 현재 원본의 `memoFibo.cache(n-1)`은 캐시 객체를 함수로 호출하므로, 빈 캐시에서 `memoFibo(3)` 이상을 호출하면 `TypeError`가 발생합니다. 이 부분의 재귀 호출은 `memoFibo(n-1) + memoFibo(n-2)`로 작성해야 합니다.

이 호출 부분을 수정하면 `memoFibo(6)`은 `8`을 반환하고, 캐시에는 `{ 3: 2, 4: 3, 5: 5, 6: 8 }`이 저장됩니다. 다시 `memoFibo(6)`을 호출하면 저장된 `8`을 바로 반환합니다.

올바른 재귀 호출을 사용한 메모이제이션은 양의 정수 `n`을 처음 계산할 때 각 항을 한 번씩 계산하므로 시간 복잡도가 `O(n)`입니다. 캐시와 호출 스택에도 `O(n)` 공간을 사용합니다.

### 실행 컨텍스트와 호출 스택

실행 컨텍스트는 함수 실행에 필요한 변수, `this`, 실행 위치 등의 정보를 관리하는 내부 구조입니다. 함수가 호출되면 새 실행 컨텍스트가 만들어지고 호출 스택에 쌓입니다.

`pow(2, 4)`는 `pow(2, 3)`, `pow(2, 2)`, `pow(2, 1)`을 차례로 호출합니다. 앞선 함수는 다음 함수의 반환값을 기다립니다. 마지막 호출이 `2`를 반환하면 기다리던 함수들이 역순으로 계산을 이어가며 `4`, `8`, `16`을 반환하고 스택에서 빠집니다.

### 반복문과 재귀 비교

- 반복문은 같은 작업을 반복하면서 누적값을 갱신합니다. 단순한 누적 계산에서는 호출 스택을 추가로 쌓지 않아 메모리를 절약할 수 있습니다.
- 재귀는 중첩 호출의 깊이만큼 호출 스택 공간이 필요합니다. 너무 깊어지면 스택 한계를 초과할 수 있습니다.
- 재귀로 문제의 구조를 자연스럽게 표현할 수 있는지와 입력 크기를 함께 고려합니다.
- 단순 재귀 피보나치는 같은 항을 여러 번 계산하므로 입력이 커질수록 계산량이 빠르게 늘어납니다.

[↑ 목차로 돌아가기](#목차)

---

## 복습 질문

- `let`, `const`, `var`는 재할당과 스코프에서 어떤 차이가 있을까?
- `typeof null`의 결과는 무엇일까?
- `Boolean(' ')`와 `Boolean('')`의 결과는 왜 다를까?
- `&&`와 `||`가 반환하는 값은 항상 불리언일까?
- `prompt()`에서 취소한 경우와 빈 문자열을 입력한 경우는 어떻게 구분할까?
- `switch`에서 `break`를 생략하면 어떻게 될까?
- 기본값을 지정할 때 `||`와 `??`는 어떤 차이가 있을까?
- `while`과 `do...while`은 조건을 검사하는 시점이 어떻게 다를까?
- `continue`와 `break`는 반복 흐름을 어떻게 바꿀까?
- `pop()`을 사용하면서 원본 배열을 보존하려면 어떻게 해야 할까?
- `for...in`과 `for...of`는 각각 무엇을 순회할까?
- `in`과 `Object.hasOwn()`은 상속받은 속성을 어떻게 처리할까?
- `Object.entries()`와 `[key, value]` 구조 분해 할당을 함께 쓰면 무엇이 편리할까?
- 함수의 매개변수와 인수는 무엇이며, 기본값은 언제 적용될까?
- 반환값이 없는 함수를 `console.log()`로 출력하면 무엇이 나올까?
- 함수 선언문과 `let`에 저장한 함수 표현식은 호출 가능한 시점이 어떻게 다를까?
- `arguments`와 배열은 무엇이 다르며, 어떤 방법으로 배열로 변환할까?
- `forEach()`와 `reduce()`의 반환값은 어떻게 다를까?
- `reduce()`에 초기값 `0`을 지정하면 빈 배열은 어떻게 처리될까?
- 콜백을 전달하는 것과 직접 호출하는 것은 어떤 차이가 있을까?
- 즉시 실행 함수는 어떻게 작성하며, 내부 변수의 범위는 어디까지일까?
- 화살표 함수에서 중괄호를 사용할 때와 생략할 때 반환 방식은 어떻게 다를까?
- 나머지 매개변수와 전개 구문은 각각 값을 모을까, 펼칠까?
- 일반 함수와 화살표 함수의 `this`는 어떻게 결정될까?
- `forEach()`의 일반 함수 콜백에 `this`를 지정하려면 어떻게 해야 할까?
- 재귀 함수에 종료 조건이 없거나 도달할 수 없다면 어떻게 될까?
- 재귀 호출에서 기다리던 함수들은 어떤 순서로 실행을 이어갈까?
- `memoFibo(n)` 호출과 `memoFibo.cache[n]` 접근은 어떤 차이가 있을까?
- 메모이제이션은 계산 시간을 줄이는 대신 어떤 데이터를 저장할까?

[↑ 목차로 돌아가기](#목차)

---

## 실습 실행 방법

Node.js와 npm이 설치된 환경에서 프로젝트 폴더의 터미널에 입력합니다.

```bash
npm install
npm run dev
```

브라우저에서 [localhost:5500](http://localhost:5500)에 접속하고 개발자 도구(`F12`)의 **Console** 탭을 엽니다.
[client/index.html](client/index.html)의 스크립트 경로를 바꿔 원하는 예제를 실행합니다.

```html
<script src="./chapter/core/22.function-4.js" defer></script>
```

학습 파일은 한 번에 하나씩 연결합니다. 함수 선언만 있는 예제는 콘솔에서 직접 호출하고, 주석 처리된 예제는 필요한 부분을 해제하며 결과를 확인합니다.

현재 `client/index.html`에는 22번 원본 파일이 연결되어 있습니다. 화살표 함수 예제는 `21.function-3.js`로 경로를 바꿔 실행합니다. DOM을 사용하는 19번 실습은 `defer`를 유지하고, `client/index.html`의 `.first`, `.second` 요소를 대상으로 스타일 조회·변경 결과를 확인합니다.

[↑ 목차로 돌아가기](#목차)
