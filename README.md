# JavaScript 기초 학습 노트

EST 16기 수업에서 배운 JavaScript의 핵심 개념과 실습 코드를 정리하는 공간입니다.
변수와 자료형부터 연산자, 조건문, 반복문, 함수, 객체, 상속, 클로저와 숫자·문자열 메서드까지 직접 실행해 보며 동작 원리를 익힙니다.

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
| 23 | [객체 속성과 구조 분해 할당](#23-객체-속성과-구조-분해-할당) | 프로퍼티, 단축 구문, 구조 분해, 타입 확인 |
| 24 | [객체 참조와 복사](#24-객체-참조와-복사) | 참조, 얕은 복사, 병합, 깊은 복사 |
| 25 | [가비지 컬렉션](#25-가비지-컬렉션) | 도달 가능성, 참조, 메모리 관리 |
| 26 | [객체 메서드와 this](#26-객체-메서드와-this) | 호출 방식, 메서드 축약형, 화살표 함수 |
| 27 | [프로토타입 상속과 생성자 함수](#27-프로토타입-상속과-생성자-함수) | 프로토타입 체인, 접근자, new, call·apply·bind |
| 28 | [클래스와 상속](#28-클래스와-상속) | class, constructor, extends, super, 비공개 필드, static |
| 29 | [클로저와 커링](#29-클로저와-커링) | 렉시컬 환경, 독립적인 카운터, 함수 반환 |
| 30 | [클로저로 상태 관리하기](#30-클로저로-상태-관리하기) | 이벤트 핸들러, IIFE, 상태 읽기·쓰기 |
| 31 | [옵셔널 체이닝과 브라우저 타이머](#31-옵셔널-체이닝과-브라우저-타이머) | `?.`, `setTimeout`, `setInterval`, 애니메이션 |
| 32 | [원시값 메서드와 래퍼 객체](#32-원시값-메서드와-래퍼-객체) | 원시값, 자동 래핑, `split` |
| 33 | [숫자 표현과 Math](#33-숫자-표현과-math) | 숫자 구분자, 지수 표기, 어림수, 난수, 진법 |
| 34 | [문자열 메서드](#34-문자열-메서드) | 불변성, 추출, 검색, 공백 제거, 반복 |

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
| 객체 속성 접근, 단축 프로퍼티, 구조 분해와 별칭 | [객체 속성과 구조 분해 할당](#23-객체-속성과-구조-분해-할당) |
| `typeOf`, `isObject` 등 타입 확인 유틸 함수 | [타입 확인 유틸 함수](#타입-확인-유틸-함수) |
| 객체 참조, 얕은 복사와 깊은 복사, 병합 순서 | [객체 참조와 복사](#24-객체-참조와-복사) |
| 도달할 수 없는 객체와 자동 메모리 관리 | [가비지 컬렉션](#25-가비지-컬렉션) |
| 객체 메서드에서 일반 함수와 화살표 함수의 차이 | [객체 메서드와 this](#26-객체-메서드와-this) |
| 상속된 속성 탐색, getter·setter, 생성자와 this 지정 | [프로토타입 상속과 생성자 함수](#27-프로토타입-상속과-생성자-함수) |
| 클래스 필드, 부모 생성자 호출, 비공개 필드와 정적 메서드 | [클래스와 상속](#28-클래스와-상속) |
| 함수가 외부 변수를 기억하기, 독립적인 카운터와 커링 | [클로저와 커링](#29-클로저와-커링) |
| 클릭 상태 유지하기, 상태를 읽고 변경하는 함수 | [클로저로 상태 관리하기](#30-클로저로-상태-관리하기) |
| 없는 속성과 메서드에 접근하기, 타이머와 애니메이션 | [옵셔널 체이닝과 브라우저 타이머](#31-옵셔널-체이닝과-브라우저-타이머) |
| 원시값에서 메서드를 사용할 수 있는 이유 | [원시값 메서드와 래퍼 객체](#32-원시값-메서드와-래퍼-객체) |
| 반올림·내림·절삭, 범위 내 난수와 진법 변환 | [숫자 표현과 Math](#33-숫자-표현과-math) |
| 문자열 자르기, 포함 여부 확인, 공백 제거와 반복 | [문자열 메서드](#34-문자열-메서드) |

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

## 23. 객체 속성과 구조 분해 할당

학습 파일: [23.object-1.js](client/chapter/core/23.object-1.js)

### 프로퍼티 접근과 단축 구문

- 객체는 키와 값의 쌍인 프로퍼티로 데이터를 묶습니다.
- `obj.name`은 점 표기법, `obj[key]`는 대괄호 표기법입니다. 변수로 키를 지정하거나 하이픈·공백이 있는 이름에 접근할 때는 대괄호를 사용합니다.
- `[표현식]`으로 프로퍼티 이름을 계산할 수 있습니다. 원본의 `['z-index']`처럼 문자열도 표현식으로 사용할 수 있습니다.
- 변수 이름과 프로퍼티 이름이 같으면 `name: name`을 `name`으로 줄일 수 있습니다.
- 예약어도 객체의 프로퍼티 이름으로 사용할 수 있습니다.

원본에서는 다음 변수들을 단축 프로퍼티로 묶습니다.

```js
let name = '선범';
let email = 'seonbeom2@euid.dev';
let authorization = 'Lv. 99';
let isLogin = true;

const student = {
  name,
  email,
  authorization,
  isLogin,
}
```

`Object.keys()`, `Object.values()`, `Object.entries()`는 객체 자신의 열거 가능한 문자열 키를 기준으로 배열을 반환합니다. 원본의 `getKeys()`는 `Object.hasOwn()`으로 자신의 속성만 추립니다. `getValues()`와 `getEntries()`는 이 검사가 없어 상속받은 열거 가능한 속성도 포함할 수 있습니다.

`removeProperty()`는 이름과 달리 프로퍼티를 삭제하지 않고 `obj[key] = null`로 값을 비웁니다. 프로퍼티 자체를 없애는 `delete obj[key]`와 구분합니다.

추가된 주석 예제에서는 `getKeys(obj, excludes)`가 `Object.hasOwn()`과 `excludes.includes(key)`로 자신의 속성 중 제외 목록에 없는 키만 모읍니다. `getValues()`와 `getEntries()`에도 자신의 속성만 모으는 대안이 주석으로 추가되어 있습니다.

### 배열과 객체 구조 분해 할당

배열은 순서대로 값을 꺼냅니다. 항목을 건너뛰려면 해당 자리를 비워 둡니다.

```js
const arr = [10,100,1000, 10_000, 100_000]
const [a1,a2,a3] = arr;
```

위에서 `a1`, `a2`, `a3`는 각각 `10`, `100`, `1000`입니다. 배열 구조 분해는 이터러블에 사용할 수 있으며, 인덱스와 `length`만 있는 유사 배열이면 항상 가능한 것은 아닙니다.

객체는 순서 대신 프로퍼티 이름으로 값을 찾습니다. `키:별칭`으로 변수 이름을 바꿀 수 있고, 값이 `undefined`일 때 사용할 기본값을 지정할 수 있습니다.

```js
const salaries = {
  이소망 : 330,
  박소연: 550,
  이유정: 130,
  김효경: 60
}

const { 이소망, 박소연:카페알바생, 이유경, 김효경, 신재훈 = 30 } = salaries;
```

`이소망`은 `330`, `카페알바생`은 `550`, `신재훈`은 `30`입니다. 원본의 `이유경`은 객체의 키 `이유정`과 이름이 달라 `undefined`가 됩니다. 별칭을 사용한 `박소연` 값은 `카페알바생`이라는 변수에 담깁니다.

`createUserObject()`는 인수 객체에서 필요한 프로퍼티를 구조 분해한 뒤, 단축 프로퍼티로 새 객체를 만들어 반환합니다.

DOM 실습은 `document.querySelectorAll('span')`의 결과를 `[first, second, third]`로 구조 분해하고, 두 번째 요소를 클릭하면 일반 함수 핸들러의 `this.style.color`를 `'orange'`로 변경합니다. 현재 HTML에는 `span`이 없으므로 이 파일을 실행하려면 최소 두 개의 `span` 요소를 준비해야 합니다. 그렇지 않으면 `second.addEventListener()`에서 오류가 발생합니다.

### 타입 확인 유틸 함수

관련 파일: [type.js](client/lib/utils/type.js)

```js
const typeOf = d => Object.prototype.toString.call(d).slice(8,-1).toLowerCase()

const isObject = d => typeOf(d) === 'object';
const isArray = d => typeOf(d) === 'array';
```

`Object.prototype.toString`을 빌려 호출한 결과에서 타입 이름을 꺼냅니다. 예를 들어 `'[object Array]'`에서 `'array'`를 얻습니다. `typeof`가 배열과 `null`을 모두 `'object'`로 나타내는 것과 달리 구분할 수 있습니다.

원본에는 문자열, 숫자, 불리언, BigInt, `null`, `undefined`, 함수, `Math`를 확인하는 함수도 있습니다. `isObject()`는 이 유틸의 기준에서 타입 이름이 `'object'`인지 확인하며, 배열 등 모든 객체를 포괄하는 검사는 아닙니다. `23.object-1.js`의 `removeProperty()`를 호출하려면 이 유틸 파일을 먼저 연결합니다.

[↑ 목차로 돌아가기](#목차)

---

## 24. 객체 참조와 복사

학습 파일: [24.object-2.js](client/chapter/core/24.object-2.js)

### 값 복사와 객체 참조

원시값을 다른 변수에 할당하면 값이 복사됩니다. 객체를 할당하면 같은 객체를 가리키는 참조가 복사됩니다.

```js
let message = '문자 값은 프리미티브 데이터 타입으로 값이 복사됩니다.';
let messenger = {
  name: 'kakao talk',
  manufacture: 'kakao'
};

let text = message;
let conversationTool = messenger;
```

원본의 `message === text`와 `messenger === conversationTool`은 모두 `true`입니다. 다만 객체 비교는 내용이 같은지를 비교하는 것이 아니라 같은 객체를 참조하는지 비교합니다. `conversationTool`을 통해 속성을 변경하면 `messenger`에서도 그 변경이 보입니다.

### 얕은 복사와 객체 병합

```js
const copyObject = Object.assign({},messenger)
const spreadObject = {...messenger}
```

두 방식은 새 객체에 속성을 옮기는 얕은 복사입니다. 최상위 객체는 분리되지만 중첩된 객체의 참조는 공유합니다. `Object.assign()`은 첫 번째 인수인 대상 객체를 변경하므로 새 객체에 복사하려면 `{}`를 대상으로 전달합니다.

원본의 `Object.assign({},cssMapA, cssMapB)`는 두 스타일 객체를 병합합니다. 키가 겹치면 뒤의 값이 덮어쓰므로 `color`는 `cssMapB`의 `'#3f9e97'`가 됩니다.

파일 앞의 수동 복사 부분은 주석에 `for...in`이라고 적혀 있지만 실제 코드는 `for(const key of messenger)`입니다. 일반 객체인 `messenger`는 이터러블이 아니므로 여기에서 `TypeError`가 발생하고, 뒤의 복사 예제도 실행되지 않습니다. 키 순회에는 `for...in` 또는 `Object.keys()` 등을 사용해야 합니다.

### 중첩 객체 복사

원본에서는 `containerStyles`와 중첩된 `'max-width'` 객체를 각각 전개하여 복사합니다.

```js
let copiedContainerStyles = {
  ...containerStyles,
  ['max-width']: {
    ...containerStyles['max-width']
  }
};
```

이 예제의 중첩 수준에서는 `'max-width'`도 분리됩니다. 더 깊은 객체가 있다면 그 수준도 별도로 복사해야 합니다.

`cloneDeep()`은 `Object.entries()`로 키와 값을 꺼내고, 값이 `null`이 아닌 객체이면 재귀적으로 복사한 뒤 `Object.fromEntries()`로 객체를 만듭니다. 현재의 일반 중첩 객체 예제에는 사용할 수 있지만, 배열도 일반 객체로 바뀌며 순환 참조나 `Date` 같은 특수 객체를 처리하는 범용 함수는 아닙니다. 파일 끝에는 Lodash의 `_.cloneDeep()`을 활용하는 방법도 메모되어 있습니다.

[↑ 목차로 돌아가기](#목차)

---

## 25. 가비지 컬렉션

학습 파일: [25.object-3.js](client/chapter/core/25.object-3.js)

JavaScript 엔진은 가비지 컬렉터(Garbage Collector)를 통해 메모리를 자동으로 관리합니다. 핵심 기준은 **도달 가능성(reachability)**입니다. 실행 중인 코드나 전역 변수 등에서 참조를 따라 접근할 수 있는 값은 도달 가능한 값입니다.

```js
const memoizedObject = {
  name: '메모리에 기억된 객체',
};
```

원본의 객체는 `memoizedObject`가 참조하고 있는 동안 도달 가능합니다. 더 이상 접근할 수 있는 참조가 없어진 객체는 가비지 컬렉션의 대상이 됩니다. 참조가 끊겼다고 즉시 메모리가 회수되는 것은 아니며, 회수 시점은 엔진이 관리합니다.

`const`로 선언한 변수에는 `null`을 재할당할 수 없습니다. 또한 객체의 속성을 삭제하거나 비우는 것과 객체 자체에 대한 모든 참조가 사라지는 것은 다릅니다. 다른 변수가 같은 객체를 참조하고 있다면 그 경로로 여전히 접근할 수 있습니다.

[↑ 목차로 돌아가기](#목차)

---

## 26. 객체 메서드와 this

학습 파일: [26.object-4.js](client/chapter/core/26.object-4.js)

메서드는 객체의 프로퍼티에 저장된 함수입니다. 일반 함수 메서드의 `this`는 함수가 정의된 객체로 고정되는 것이 아니라 호출 방식에 따라 실행 중에 결정됩니다.

원본의 내비게이션 예제:

```js
const navigationMenu = {
  name: '글로벌 내비게이션',
  items: [
    { id: 'link-g', text: 'Google', link: 'https://google.com' },
    { id: 'link-n', text: 'Naver', link: 'https://naver.com' },
  ],
  getItem(index) {
    return this.items[index];
  },
  addItem(newItem) {
    this.items.push(newItem);
  },
};
```

- `getItem(index) { ... }`는 메서드 축약형입니다. `navigationMenu.getItem(0)`으로 호출하면 `this`는 `navigationMenu`이고 Google 항목을 반환합니다.
- 메서드를 다른 변수에 담아 단독 호출하면 원래 객체와의 연결이 유지되지 않으므로 `this`가 달라질 수 있습니다.
- `addItem`도 메서드 축약형으로 변경되었습니다. `navigationMenu.addItem(newItem)`으로 호출하면 `this.items`에 새 항목을 추가합니다.

화살표 함수는 바깥 스코프의 `this`를 사용하므로, 호출 대상 객체의 속성을 사용하는 메서드는 일반 함수나 메서드 축약형으로 작성합니다.

주문 실습에서는 직접 항목에 접근하는 방식, `forEach()`, `reduce()`로 `price * count`의 합계를 구합니다. `shopOrder.totalPrice()`는 `reduce(..., 0)`의 결과를 `this.total`에 저장합니다. 현재 메뉴의 합계는 `36_000`이며, 호출할 때마다 합계를 새로 계산하므로 중복 누적되지 않습니다.

[↑ 목차로 돌아가기](#목차)

---

## 27. 프로토타입 상속과 생성자 함수

학습 파일: [27.prototype-1.js](client/chapter/core/27.prototype-1.js)

### 프로토타입 체인과 접근자

객체에서 속성을 찾을 때 자신의 속성에 없으면 프로토타입을 따라 탐색합니다. 원본에서는 백두산호랑이 → tiger → animal 순서로 연결합니다.

```js
const animal = {
  legs:4,
  tail:true,
  get eat(){
    return this.stomach //리턴이 없으면 에러가 난다.
  },
  set eat(food){ //매개변수를 작성 안하면 오류가 난다.
    this.stomach = []; //빈 배열이 있어야 한다.
    this.stomach.push(food)
  }
}

/* Object.defineProperty(animal, 'sleep', {
  get() {
    return true;
  },

  enumerable: false
}); */

const tiger = {
  pattern : '호랑이 무늬',
  hunt(target){
    this.prey = target;
    this.eat = this.prey;
    return `${target}에게 조용히 접근 후 먹는다.`
  },
  __proto__:animal
}

const 백두산호랑이 = {
  name: '백돌이',
  color: 'white',
  __proto__: tiger,
};

// 백두산호랑이 __proto__: tiger
```

- 백두산호랑이는 자신의 name과 color뿐 아니라 tiger의 hunt, animal의 legs와 tail에도 접근할 수 있습니다.
- 객체 리터럴의 __proto__: animal은 새 객체의 프로토타입을 animal로 지정합니다. 객체의 내부 프로토타입과 생성자 함수의 .prototype 속성은 구분합니다.
- get eat()은 속성을 읽을 때, set eat(food)는 값을 할당할 때 실행되는 접근자입니다. getter는 인수를 받지 않고 setter는 하나의 인수를 받습니다.
- 백두산호랑이.hunt('토끼')처럼 호출하면 상속된 메서드와 접근자에서도 this는 호출 대상인 백두산호랑이입니다. prey와 stomach가 그 객체에 저장됩니다.
- 현재 setter는 할당할 때마다 stomach를 새 배열로 만들므로 이전 먹이는 남지 않습니다. stomach가 아직 없으면 getter는 undefined를 반환합니다.

### 생성자 함수와 new

원본의 Animal()은 this에 legs, tail, getEat, setEat을 설정합니다. new Animal()은 새 객체를 만들고 그 객체를 this로 하여 생성자 함수를 실행합니다.

```js
function Tiger(name) {
  Animal.call(this)

  this.name = name;
  this.pattern = '호랑이무늬';

  this.hunt = function (target) {
    this.prey = target;
    return `${target}에게 조용히 접근합니다.`;
  };
}

const _animal = new Animal();

// Tiger.prototype = _animal

const _tiger = new Tiger('호돌이')

Tiger.brak = function(sound){
  return sound;
}
```

Animal.call(this)는 Tiger가 생성 중인 객체에 Animal의 초기화 코드를 실행합니다. 이것만으로 Tiger.prototype과 Animal.prototype이 연결되는 것은 아닙니다. 원본의 Tiger.prototype = _animal은 주석 상태이므로 실행되지 않습니다.

이 예제의 getEat, setEat, hunt는 생성할 때마다 각 인스턴스에 저장됩니다. 반면 Tiger.brak은 생성자 함수 자체에 붙인 함수이므로 Tiger.brak('어흥')으로 호출합니다. 원본의 이름은 bark가 아닌 brak입니다.

### call, apply, bind

| 메서드 | 실행 시점 | 인수 전달 방식 |
| --- | --- | --- |
| call(thisArg, a, b) | 즉시 실행 | 인수를 하나씩 전달 |
| apply(thisArg, [a, b]) | 즉시 실행 | 배열 또는 유사 배열로 전달 |
| bind(thisArg, a, b) | 나중에 호출할 새 함수 반환 | this와 인수를 미리 지정 |

```js
function sum(a,b){
  return a + b;
}

//const a = sum.call('hello',1,2);
//const a = sum.apply('hello',[1,2]);
const a = sum.bind('hello',1,5);
```

현재 실행되는 bind는 합계를 즉시 계산하지 않습니다. a는 함수이며, a()를 호출하면 미리 지정한 1과 5를 더해 6을 반환합니다. call과 apply 예제는 주석 상태입니다.

[↑ 목차로 돌아가기](#목차)

---

## 28. 클래스와 상속

학습 파일: [28.prototype-2.js](client/chapter/core/28.prototype-2.js)

class는 프로토타입을 기반으로 객체 생성과 상속을 표현하는 문법입니다. 원본에서는 앞의 생성자 함수 예제를 Animal과 Tiger 클래스로 다시 작성합니다.

```js
class Animal {

  legs = 4; //클래스 필드
  stomach = [];
  tail = true;

  // private field
  #nickName = 'unknown';
  //콘솔에서는 보여주는데, 개발을 할때는 들어 갈구 없다.

  constructor(name) {
    this.name = name;
    console.log(this.#nickName);
  }

  get eat(){
    return this.stomach;
  }

  set eat(food){
    this.stomach.push(food)
  }

}

const animal = new Animal('몽실이')

class Tiger extends Animal{
  //상속이 되어야 하는데...
  constructor(name, pattern = '호랑이 무늬'){
    super(name);

    this.pattern = pattern;
  }

  hunt(target) {
    this.prey = target;
    return `${target}에게 조용히 접근한다.`;
  }

  static bark(sound){  //static이라고 정의하면 생성자만 사용가능
    return sound
  }
}

const tiger = new Tiger('호돌이');
```

### 클래스 필드와 생성자

- legs, stomach, tail은 인스턴스마다 초기화되는 클래스 필드입니다. stomach 배열도 각 인스턴스가 별도로 가집니다.
- constructor(name)는 new로 객체를 생성할 때 실행되며 this.name을 설정합니다. 원본은 생성할 때마다 비공개 필드의 값인 'unknown'도 출력합니다.
- #nickName은 비공개 필드입니다. 클래스 외부에서 animal.#nickName처럼 직접 접근할 수 없고, 자식 클래스에서도 부모의 비공개 필드를 직접 사용할 수 없습니다.
- getter와 setter는 프로퍼티처럼 읽고 할당합니다. 이 클래스의 setter는 기존 stomach에 push하므로 27번 예제와 달리 먹이를 누적합니다.

### extends와 super

Tiger extends Animal은 Animal을 상속합니다. Tiger 생성자의 super(name)는 부모 생성자를 호출하며, 자식 생성자에서는 this를 사용하기 전에 호출해야 합니다.

new Tiger('호돌이')는 부모가 설정한 필드와 name을 가지며 pattern의 기본값은 '호랑이 무늬'입니다. tiger.hunt('토끼')는 prey를 설정하고 '토끼에게 조용히 접근한다.'를 반환합니다. 클래스 본문의 일반 메서드와 접근자는 프로토타입에 정의되어 인스턴스들이 공유합니다.

### 인스턴스 메서드와 정적 메서드

hunt는 tiger.hunt(...)처럼 인스턴스로 호출합니다. static bark는 Tiger.bark('어흥')처럼 클래스 자체로 호출하며 '어흥'을 반환합니다. tiger.bark(...)는 인스턴스 메서드가 아니므로 호출할 수 없습니다.

[↑ 목차로 돌아가기](#목차)

---

## 29. 클로저와 커링

학습 파일: [29.closure-1.js](client/chapter/core/29.closure-1.js)

클로저는 함수와 그 함수가 만들어진 렉시컬 환경의 연결입니다. 반환된 내부 함수는 외부 함수의 실행이 끝난 뒤에도 외부 변수를 참조할 수 있습니다.

- `const result = sum`은 함수를 호출하지 않고 함수 자체를 저장합니다.
- `first()`가 반환하는 `second`는 외부의 `x`, `y`를 참조해 `30`을 반환합니다.
- `counter()`가 반환하는 함수는 호출할 때마다 자신이 참조하는 `count`를 증가시킵니다. `c1`, `c2`, `c3`는 각각 독립적인 상태를 가집니다.
- `_multi = (x) => (y) => x * y`는 인수를 단계별로 받는 커링 예제입니다.

```js
c1(); // 1
c1(); // 2
c2(); // 1
_multi(2)(5); // 10
```

현재 일반 함수 버전인 `multi()`의 내부 함수에는 `return`이 없으므로 `double(5)`와 `triple(5)`는 `undefined`를 반환합니다. 곱셈 결과를 반환하려면 `return x * y`가 필요합니다.

[↑ 목차로 돌아가기](#목차)

---

## 30. 클로저로 상태 관리하기

학습 파일: [30.closure-2.js](client/chapter/core/30.closure-2.js)

- `earth()`가 반환한 함수를 `UFO`에 저장합니다. `UFO()`는 외부 변수의 값인 `[true, 10]`을 반환합니다.
- 즉시 실행 함수가 반환한 `handleClick`은 내부의 `isClicked`를 유지합니다. 버튼을 클릭할 때마다 배경색을 주황색과 기본값으로 전환합니다.
- 클릭할 때마다 상태 변수를 새로 초기화하지 않고, 핸들러가 생성될 때 만든 변수를 계속 사용합니다.
- `state(init)`는 같은 `value`를 참조하는 읽기 함수와 쓰기 함수를 배열로 반환합니다.

```js
const [read, write] = state('hello');
read(); // 'hello'
write('JavaScript');
read(); // 'JavaScript'
```

원본의 `setValue()`는 인수 없이 호출되므로 내부 값이 `undefined`로 바뀝니다. 새 값을 저장하려면 인수를 전달합니다. 버튼 실습은 HTML의 `button` 요소가 필요하므로 `defer`를 유지합니다.

[↑ 목차로 돌아가기](#목차)

---

## 31. 옵셔널 체이닝과 브라우저 타이머

학습 파일: [31.optional.js](client/chapter/core/31.optional.js)

### 옵셔널 체이닝

- `portableFan.photos?.animate`는 `photos`가 없으면 `undefined`를 반환합니다. 실제 객체의 속성 이름은 `photo`입니다.
- `portableFan.getFullName?.()`은 메서드가 `null` 또는 `undefined`가 아닐 때 호출합니다.
- 동적 키에는 `obj?.[key]`를 사용할 수 있습니다.
- `?.`는 `null`과 `undefined`를 검사합니다. 존재하는 값이 호출 가능한 함수가 아니라면 `?.()`도 오류를 발생시킵니다.

### 타이머와 애니메이션

| API | 실습 내용 |
| --- | --- |
| `setTimeout()` | 5초 뒤 `.btn` 버튼을 HTML에 추가 |
| `setInterval()` | 1초 간격으로 콘솔 메시지 출력 |
| `clearInterval()` | 주석 예제에서 반복 타이머 중단 |
| `requestAnimationFrame()` | 다음 화면 갱신에 맞춰 버튼 이동·회전 |
| `cancelAnimationFrame()` | 카운트가 300에 도달하면 다음 프레임 요청 취소 |

타이머의 지연 시간은 콜백의 정확한 실행 시각을 보장하지 않습니다. 실행 중인 JavaScript가 오래 걸리면 콜백도 기다립니다.

동적으로 생성되는 `.btn`은 생성 이후 다시 조회해야 합니다. 생성 전에 저장한 `button` 변수는 자동으로 갱신되지 않습니다. 현재 애니메이션은 HTML에 이미 있는 첫 번째 `button`을 대상으로 하며, 콘솔 출력용 인터벌은 별도로 계속 실행됩니다.

[↑ 목차로 돌아가기](#목차)

---

## 32. 원시값 메서드와 래퍼 객체

학습 파일: [32.primitive.js](client/chapter/core/32.primitive.js)

문자열 같은 원시값은 객체가 아니지만 메서드와 프로퍼티를 사용할 수 있습니다. JavaScript가 접근 과정에서 래퍼 객체의 기능을 사용할 수 있도록 처리하기 때문입니다.

```js
const message = '원시 값은 객체가 아닙니다.';
message.split(' '); // ['원시', '값은', '객체가', '아닙니다.']
```

`String`, `Number`, `Boolean` 등의 래퍼 기능을 통해 메서드에 접근할 수 있습니다. `null`과 `undefined`는 이러한 래핑을 제공하지 않으므로 직접 프로퍼티나 메서드에 접근하면 오류가 발생합니다.

[↑ 목차로 돌아가기](#목차)

---

## 33. 숫자 표현과 Math

학습 파일: [33.number.js](client/chapter/core/33.number.js)

- `100_000_000`처럼 숫자 구분자 `_`로 가독성을 높일 수 있습니다.
- `1e8`은 `100_000_000`, `1.45e6`은 `1_450_000`, `1e-6`은 `0.000001`입니다.
- `Math.floor()`는 내림, `Math.round()`는 반올림, `Math.ceil()`은 올림, `Math.trunc()`는 소수 부분 제거입니다. 음수에서는 내림과 절삭의 결과가 다를 수 있습니다.
- `Math.random()`은 0 이상 1 미만의 난수, `Math.max()`는 최댓값, `Math.pow()`는 거듭제곱을 구합니다.

```js
Math.floor(-1.5); // -2
Math.trunc(-1.5); // -1
Math.pow(2, 3); // 8

const getRandomMinMax = (min, max) =>
  Math.floor(Math.random() * (max - min) + min);
getRandomMinMax(2, 10); // 2 이상 10 미만의 정수
```

난수 함수는 `min`, `max`가 정수이고 `min < max`인 범위를 기준으로 합니다. 진법 학습에는 `0x`(16진수), `0o`(8진수), `0b`(2진수), `parseInt(string, base)`, `number.toString(base)`가 소개되어 있습니다.

`Math.min()` 활용과 `colorChip`의 RGB 값을 16진수로 바꾸고 되돌리는 부분은 아직 구현할 실습으로 남아 있습니다.

[↑ 목차로 돌아가기](#목차)

---

## 34. 문자열 메서드

학습 파일: [34.string.js](client/chapter/core/34.string.js)

문자열은 불변이므로 특정 인덱스의 문자를 직접 바꾸지 않고 새 문자열을 만듭니다. 원본의 `'P' + message.slice(1)`도 원래 `message`를 변경하지 않습니다.

| 프로퍼티·메서드 | 용도 | `'Less is more.'` 기준 예시 |
| --- | --- | --- |
| `length` | 문자열 길이 | `12` |
| `charAt(5)` | 인덱스의 문자 추출 | `'i'` |
| `slice(2, -1)` | 범위 추출, 음수 인덱스 지원 | `'ss is more'` |
| `substring(2, 5)` | 시작부터 끝 인덱스 직전까지 추출 | `'ss '` |
| `includes('is')` | 포함 여부 | `true` |
| `startsWith('Less')` | 시작 문자열 확인 | `true` |
| `endsWith('Less')` | 끝 문자열 확인 | `false` |
| `trim()` | 앞뒤 공백 제거 | 원본에 앞뒤 공백이 없어 동일한 문자열 반환 |
| `repeat(3)` | 지정 횟수 반복 | 원본 문자열을 세 번 이어 붙임 |

`trim()`은 문자열 사이의 공백을 제거하지 않습니다. `indexOf`, `lastIndexOf`, 앞뒤 공백 제거, 대소문자 변환과 `toCamelCase`·`toPascalCase` 유틸 함수는 현재 변수만 선언된 실습 항목입니다.

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
- 점 표기법과 대괄호 표기법은 어떤 상황에서 사용할까?
- 배열과 객체의 구조 분해 할당은 각각 무엇을 기준으로 값을 찾을까?
- 객체 구조 분해에서 별칭과 기본값은 어떤 역할을 할까?
- 객체의 값을 `null`로 바꾸는 것과 `delete`는 어떻게 다를까?
- 객체 참조를 복사하는 것과 얕은 복사는 어떻게 다를까?
- 얕게 복사한 객체의 중첩 객체를 수정하면 원본에도 영향을 줄까?
- 여러 객체를 병합할 때 같은 키의 값은 어느 객체를 따를까?
- 객체가 가비지 컬렉션의 대상이 되는 기준은 무엇일까?
- `navigationMenu`의 `addItem`을 화살표 함수에서 메서드 축약형으로 바꾸면 `this`는 어떻게 달라질까?
- 상속받은 메서드를 호출할 때 `this`는 어떤 객체를 가리킬까?
- getter와 setter는 각각 언제 실행될까?
- `Animal.call(this)`로 초기화하는 것과 프로토타입을 연결하는 것은 어떻게 다를까?
- `call`, `apply`, `bind`는 실행 시점과 인수 전달 방식이 어떻게 다를까?
- 자식 클래스의 생성자에서 `super()`는 언제 호출해야 할까?
- 비공개 필드와 정적 메서드는 어디에서 접근할 수 있을까?
- 외부 함수가 끝난 뒤에도 내부 함수가 외부 변수를 사용할 수 있는 이유는 무엇일까?
- `counter()`를 여러 번 호출해서 만든 함수들은 상태를 공유할까?
- 클로저 기반 클릭 핸들러는 상태를 어디에 저장할까?
- `state()`의 읽기 함수와 쓰기 함수는 어떤 변수를 함께 참조할까?
- 옵셔널 체이닝은 어떤 값에서 평가를 중단할까?
- 동적 요소를 만들기 전에 조회한 변수는 생성 이후 자동으로 바뀔까?
- 타이머와 애니메이션 반복을 중단하려면 어떤 API를 사용할까?
- 원시값인 문자열에서 메서드를 사용할 수 있는 이유는 무엇일까?
- 음수에 `Math.floor()`와 `Math.trunc()`를 적용하면 어떻게 다를까?
- `getRandomMinMax(2, 10)`의 결과에 10이 포함될까?
- 문자열 추출 메서드는 원본 문자열을 변경할까?

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
<script src="./lib/utils/type.js" defer></script>
<script src="./chapter/core/34.string.js" defer></script>
```

학습 파일은 한 번에 하나씩 연결합니다. 함수 선언만 있는 예제는 콘솔에서 직접 호출하고, 주석 처리된 예제는 필요한 부분을 해제하며 결과를 확인합니다.

현재 `client/index.html`에는 타입 확인 유틸 파일과 34번 문자열 파일이 순서대로 연결되어 있습니다. 다른 수업을 실행하려면 두 번째 스크립트 경로를 원하는 학습 파일로 바꿉니다. 23번의 `removeProperty()`처럼 타입 확인 함수를 사용하는 예제는 유틸 파일을 먼저 연결해야 합니다. DOM을 사용하는 실습은 `defer`를 유지합니다. 19번은 `.first`, `.second`, 23번은 최소 두 개의 `span`, 30·31번은 `button` 요소가 필요합니다.

[↑ 목차로 돌아가기](#목차)
