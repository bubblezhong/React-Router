/**
 * Created by Administrator on 2017/2/9 0009.
 */
import {connect} from "react-redux";
import React from 'react';
import { addTodo } from "../actions";
//把dispatch和显示混杂在了一起，显示和逻辑混杂，不好
let AddTodo;
//相当于render( )方法
AddTodo = ({dispatch}) => {
  let input;
  return (
   <div>
     <form onSubmit={e =>{
       e.preventDefault();
       if (!input.value.trim()){return}
       dispatch(addTodo(input.value));
       input.value = ""
     }}>
       <input ref={node =>{input = node}}/>
       <button type="submit">Add Todo</button>
     </form>
   </div>
  )
};
  AddTodo = connect()(AddTodo);
  export default AddTodo;
//mapDispatchToProps是可选的，如果不传这个参数redux会简单把dispatch作
// 为属性注入给组件，当做store.dispatch使用，可以手动调用。

