

function earth(){
  let water = true;
  let gravity = 10;

  function tiger(){
    return [water, gravity];
  }

  return tiger;
}

const UFO = earth();

let isClicked = false;

// 이해는 했어! 근데 어디다 씀??
const button = document.querySelector('button');

/* function handleClick(){

  if (!isClicked) {
    document.body.style.background = 'orange';
  } else {
    document.body.style.background = '';
  }
    


  isClicked = !isClicked



}

button.addEventListener('click',handleClick) */


/* function handleClick() {
  let isClicked = false;

  return () => {
    if (!isClicked) {
      document.body.style.background = 'orange';
    } else {
      document.body.style.background = '';
    }

    isClicked = !isClicked;
  };
}

button.addEventListener('click', handleClick()); */



const handleClick = (()=> {
  let isClicked = false;

  return () => {
    if (!isClicked) {
      document.body.style.background = 'orange';
    } else {
      document.body.style.background = '';
    }

    isClicked = !isClicked;
  };
}) ()

button.addEventListener('click', handleClick);
















function state(init){
  let value = init;

  function read(){
    return value
  }

  function write(newValue){
    value = newValue;
  }

  return [read, write];
}

// const value = state()[0];
// const setValue = state()[1];
//구조분해
const [value,setValue] = state('hello');

value() // 값을 읽기
setValue() //값 쓰기