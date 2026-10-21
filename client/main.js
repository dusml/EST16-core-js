

import { changeColor, clearContent, delayP, getNode, insertAfter, insertLast, renderEmptyCard, renderSpinner, renderUserCard, tiger } from "./lib/index.js";

const END_POINT = 'https://6ad6f6fff71f154ac4878721.mockapi.io/users';

// const response = await tiger.get('https://jsonplaceholder.typicode.com/users');

// console.log(response.data);

const userCardInner = getNode('.user-card-inner');

async function renderUserList() {

  renderSpinner(userCardInner)

  try {

    const response = await tiger.get(END_POINT);
    const data = response.data;


    gsap.to('.loadingSpinner', {
      opacity: 0,
      onComplete() {
        this._targets[0].remove();
      }
    });

    
    await delayP(1000)

    //data를 가지소 유저의 목록을 article로 화면에 (.userCardInner) 렌더링
    data.forEach(user => {
      renderUserCard(userCardInner,user)
      changeColor('.user-card')


      // const tamplate = `
      // <article class="user-card" data-index="user-1">
      //       <h3 class="user-name">${user.name}</h3>
      //       <div class="user-resouce-info">
      //         <div>
      //           <a class="user-email" href="mailto:{user.email}">${user.email}</a>
      //         </div>
      //         <div>
      //           <a class="user-website" href="http://tiger.com" target="_blank" rel="noopener noreferer">${user.website}</a>
      //         </div>
      //       </div>
      //       <button class="delete">삭제</button>
      //     </article>
      // `
      // insertLast(userCardInner,tamplate)
    });
    
    gsap.from('.user-card', {
    x: -100,
    opacity: 0,
    stagger: {
      each: 0.1,
      from:'random'
    }
  });
  } catch (error) {
    renderEmptyCard(userCardInner);
    //

  }
}
renderUserList()

function handleDeleteCard(e){
  const button = e.target.closest('button')

  if(!button) return;

  const article = button.parentElement;
  const index = article.dataset.index.slice(5);

  // console.log(index);
  tiger.delete(`${END_POINT}/${index}`)
  .then(()=>{
    alert('삭제가 완료됬습니다.')

    clearContent(userCardInner);
    renderUserList();
  })
}

userCardInner.addEventListener('click',handleDeleteCard);


const createButton = getNode('.create');
const cancelButton = getNode('.cancel');
const doneButton = getNode('.done');
const nameField = getNode('#nameField');


function handleCreate(){

  gsap.to('.pop',{autoAlpha:1})

}

function handleCancel(e){
  e.stopPropagation();
  gsap.to('.pop',{autoAlpha:0})

}

function handleDone(e){
  e.preventDefault();
  const username = getNode('#nameField').value;
  const email = getNode('#emailField').value;
  const website = getNode('#siteField').value;

  tiger.post(END_POINT,{username, email, website})
  .then(()=>{
    gsap.to('.pop', { autoAlpha: 0 });

      clearContent(userCardInner);
      renderUserList();
      getNode('#nameField').value = '';
      getNode('#emailField').value = '';
      getNode('#siteField').value = '';
  })
}


createButton.addEventListener('click', handleCreate);
cancelButton.addEventListener('click', handleCancel);
doneButton.addEventListener('click', handleDone);