
// XHR XMLHttpRequest의 약자 생성자 함수 이다.

// [readyState] 진행상황 (을 숫자로 알려준다.)
// 0 : uninitialized
// 1 : loading
// 2 : loaded
// 3 : interactive
// 4 : complete  성공/ 실패 실패를 해도 결과가 뜬다.


// const xhr = new XMLHttpRequest();

// console.log(xhr);

//xhr.open('GET','https://jsonplaceholder.typicode.com/users');
//방식을 입력을 하고, 데이터를 박을 주소 그러나 코그는 시간을 기다여 주지 않아 xhr이 제공하는 이벤트를 실행시켜준다. 

// console.log(xhr.readyState);

/* 
1번
setTimeout(() => {
  console.log(xhr.response);
}, 1000);
*/

/* xhr.addEventListener('readystatechange',() =>{
  //console.log(xhr.response); 이렇게만 하면 3,번과 4번에서 의 값이 2번 반환된다. 그래서 조건문을 사용!

  if(xhr.readyState === 4){
    if(xhr.status >=200 && xhr.status < 400){
      // console.log(xhr.response);
    }else{
      console.log({message:'알수 없는 오류가 발생했습니다.'});
      
    }
  }
})

xhr.send();
 */


/* 
함수로
function xhrFun(method,url){
  const xhr = new XMLHttpRequest();

  xhr.open(method, url);

  xhr.addEventListener('readystatechange',() =>{

  if(xhr.readyState === 4){
    if(xhr.status >=200 && xhr.status < 400){
      console.log(xhr.response);
    }else{
      console.log({message:'알수 없는 오류가 발생했습니다.'});
      }
    }
  })

  xhr.send();
}

xhrFun('GET','https://jsonplaceholder.typicode.com/users') */


/* 
함수 2
function xhrFun(method,url,body,success){
  const xhr = new XMLHttpRequest();

  xhr.open(method, url);

  xhr.setRequestHeader('content-type','application/json');

  xhr.addEventListener('readystatechange',() =>{

  if(xhr.readyState === 4){
    if(xhr.status >=200 && xhr.status < 400){
      console.log(xhr.response);
    }else{
      console.log({message:'알수 없는 오류가 발생했습니다.'});
      }
    }
  })

  xhr.send(JSON.stringify(body));
}

xhrFun('GET','https://jsonplaceholder.typicode.com/users',()=>{})
// xhrFun('POST','https://jsonplaceholder.typicode.com/users',{name:'tiger'}); */


// 강사님..
// [readyState] 진행상황 
// 0 : uninitialized
// 1 : loading
// 2 : loaded
// 3 : interactive
// 4 : complete  성공 / 실패



function xhr({
  method = 'GET', 
  url = '', 
  success = null, 
  fail = null,
  body = null,
  headers = {
    'Content-Type':'application/json',
    'Access-Control-Allow-Origin':'*',
  }
} = {}){


  // const {method = 'GET', url = '', success, fail} = obj

  const xhr = new XMLHttpRequest();

  xhr.open(method,url);

  if(!(method === 'DELETE')) {
    Object.entries(headers).forEach(([k,v])=>{
      xhr.setRequestHeader(k,v);
    })
  }

  xhr.addEventListener('readystatechange',()=>{
    
    if(xhr.readyState === 4){

      if(xhr.status >= 200 && xhr.status < 400){
        success(xhr.response)
      }else{
        fail({message:'알 수 없는 오류가 발생했습니다.'})
      }
    }
  })

  xhr.send(JSON.stringify(body));

}



// xhr({
//   url:'https://jsonplaceholder.typicode.com/users',
//   success:() => {},
//   fail: () => {},

// })
// xhr('GET','https://jsonplaceholder.typicode.com/user',(data)=>console.log(data),(err)=> console.log(err))
// xhr('POST','https://jsonplaceholder.typicode.com/users',{name:'tiger'})





xhr.get = (url,success,fail) => {
  xhr({url,success,fail})
}


xhr.post = (url,success,fail,body) => {
  xhr({
    method:'POST',
    url,
    success,
    fail,
    body
  })
}



xhr.put = (url,success,fail,body) => {
  xhr({
    method:'PUT',
    url,
    success,
    fail,
    body
  })
}



xhr.delete = (url,success,fail) => {
  xhr({
    method:'DELETE',
    url,
    success,
    fail,
  })
}



xhr.post('https://jsonplaceholder.typicode.com/users',
  (res)=>{
    // console.log( res );
  },
  ()=>{

  },
  {name:'tiger'}
)


// console.dir(xhr);