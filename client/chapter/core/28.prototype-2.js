/* ----------------------------- */
/* Classes                       */
/* ----------------------------- */

// 앞서 함수로 정의한 내용들을 class문법을 사용해 재정의 합니다.


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




/* ----------------------------- */
/* Classes                       */
/* ----------------------------- */

// 앞서 함수로 정의한 내용들을 class문법을 사용해 재정의 합니다.



/* class Animal {

  legs = 4;
  stomach = [];
  tail = true;
  
  static defaultOptions = {
    version: '0.1.1',
    company: '8b-studio',
    ceo: '심선범'
  }

    // private field
  #nickName = 'unknown';

  constructor(name){
    this.name = name
    console.log( this.#nickName );
  }

  get eat(){
    return this.stomach;
  }

  set eat(food){
    this.stomach.push(food);
  }

}


const animal = new Animal('몽실이');


class Tiger extends Animal{

  pattern = '호랑이 무늬';

  constructor(name,pattern = '호랑이 무늬'){
    super(name);

    this.pattern = pattern;
    
  }

  hunt(target){
    this.prey = target;
    return `${target}에게 조용히 접근한다.`
  }

  static bark(sound){
    return sound;
  }

}


const tiger = new Tiger('호돌이'); */