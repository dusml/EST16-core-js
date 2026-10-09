/* ----------------------------- */
/* Prototype and inheritance     */
/* ----------------------------- */

// 프로토타입 상속(prototypal inheritance)을 사용하여 객체를 확장합니다.

// 여러가지 동물들을 키우는 게임 : 고양이,강아지,호랑이,사자,늑대,여우

/* const animal = {
  legs:4,
  tail:true,
  getEat(){
    return this.stomach
  },
  setEat(food){
    this.stomach = []; //빈 배열이 있어야 한다.
    this.stomach.push(food)
  }
}
 */

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

// 생성자 함수 


function Animal() {
  this.legs = 4;
  this.tail = true;

  this.getEat = function () {
    return this.stomach ?? [];
  };

  this.setEat = function (food) {
    this.stomach = [];
    this.stomach.push(food);
  };
}

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

console.log(_animal,_tiger);


// function instance method

/*
1. f.call 함수를 대신 실행 시켜준다. this costom 가능 인자 , , , ,
2. f.apply 함수를 대신 실행 시켜준다. this costom 가능 배열로 들어가 줘야 한다. 인자 []
3. f.bind 묶어 두기만 하는 것 함수를 실행하지 않는다.
*/

function sum(a,b){
  return a + b;
}

//const a = sum.call('hello',1,2);
//const a = sum.apply('hello',[1,2]);
const a = sum.bind('hello',1,5);

//셋 다 this argument를 전달






