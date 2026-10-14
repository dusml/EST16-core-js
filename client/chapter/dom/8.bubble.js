/* ---------------------------- */
/* Event bubbling & capturing   */
/* ---------------------------- */


const section = getNode('section')
const article = getNode('article')
const p = getNode('p')

/* 버블링 ----------------------------------------------------------------- */




section.addEventListener('click',(e)=>{
  console.log(e.target, e.currentTarget, this);


  console.log('%c section clicked','color:dodgerblue');
})

article.addEventListener('click',(e)=>{
  e.stopPropagation();
  console.log('%c article clicked','color:orange');
})

p.addEventListener('click',(e)=>{
  e.stopPropagation();
  console.log('%c p clicked','color:hotpink');
})

// article.addEventListener('click',()=>{
//   console.log('article clicked');
// })

// p.addEventListener('click',()=>{
//   console.log('p clicked');
// })


section.addEventListener('mouseenter', (e) => {
  e.currentTarget.style.background = 'tomato';
});

section.addEventListener('mouseleave', (e) => {
  e.currentTarget.style.background = '';
});


/* 캡처링 ----------------------------------------------------------------- */