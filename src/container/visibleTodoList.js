/**
 * Created by Administrator on 2017/2/9 0009.
 */
//纯粹的container组件都是由connect( )来生成的
import { connect } from "react-redux";
import { toggleTodo } from "../actions/index";
import TodoList from "../components/TodoList";
import React from 'react';
const getVisibleTodos = (todos,filter) => {
  switch (filter){
    case "all":
      return todos;
    case "completed":
      return todos.filter(t =>{return t.completed});
    case "active":
      return todos.filter(t =>!t.completed);
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}
//state如何转为props
const mapStateToProps = (state,ownProps) =>{
  // console.log(getVisibleTodos(state.todos,state.visibilityFilter));
  return{
    todos:getVisibleTodos(state.todos,ownProps.filter)     //状态树state包含todos对象todo组成的数组和visibilityFilter字符串
  }
}
const mapDispatchToProps = (dispatch) =>{     //传入分发器，对用户直接行为进行分发，分发到定义的actions中
  return{
    onTodoClick :(id) =>{
      dispatch(toggleTodo(id))
    }
  }
};
//toggleTodo( )位于actions的index文件中
// export const toggleTodo = (id) =>{
//   return{
//     type:"TOGGLE_TODO",
//     id
//   }
// }
//react组件的props有两类，一类是由他的state来转换的（点击按钮，状态会发生变化导致属性变化），
// 另一类直接由dispatch来引起的变化；mapStateToProps：状态变化如何影响props;mapDispatchToProps:行为被分发
//时dispatch如何影响属性props的变化；
const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
export default VisibleTodoList;
//mapStateTOProps和mapDispatchToProps两个方法使在connect的
// 作用下成为VisibleTodoList的props;TodoList是VisibleTodoList的子组件；
// 子组件可以访问父组件的props
//TodoList是一个纯显示，与逻辑无关，故位于component文件夹下
