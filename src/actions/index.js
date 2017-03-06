/**
 * Created by Administrator on 2017/2/9 0009.
 */
//用户点击时分发一个action作用在store上；store指派一个reducer;反应在ui组件上
let nextTodoId = 0;
export const addTodo = (text) => {

  return{
    type:"ADD_TODO",
    id:nextTodoId++,
    text:text
  }
}
export const setVisibility = (filter) =>{
  return{
    type:"SET_VISIBILITY_FILTER",
    filter:filter
  }
}
export const toggleTodo = (id) =>{
  return{
    type:"TOGGLE_TODO",
    id:id
  }
}

