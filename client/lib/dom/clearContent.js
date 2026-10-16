import { isString } from "../utils/type.js";
import { getNode } from "./getNode.js";





export default function clearContent(node){

  if(isString(node)) node = getNode(node);

  if(node.nodeName === 'INPUT' || node.nodeName === 'TEXTAREA'){
    node.value = ''
    return;
  }

  node.textContent = '';

}


//디폴트는 무조던 한번만 할구 있다. 뭐든 하나 내보낼꼐! 여러개 하고 싶으면 객체로 만들어서 하면 된다. 어쩃든 하나만 