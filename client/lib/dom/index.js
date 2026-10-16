

// re-export 다시 내보내기

export * from './attr.js'
export * from './css.js'
export * from './insert.js'
export * from './getNode.js'
export {default as clearContent } from './clearContent.js'

// export * from './clearContent.js'
//기본 내보내기는 안됨 그래서 위에처럼 사용해 주어야 한다. {defaults as clearContent } 디폴트에서 값을 가져와야 한다.
// 프레임워크는 답정너 방식으로 안하면 빼애애액하고 애러를 내기 때문에 프레임워크가 너 꼭 디폴트로 엑스포트해라