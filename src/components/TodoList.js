/**
 * Created by Administrator on 2017/2/10 0010.
 */
import Todo from "./Todo";
import React from 'react';
//与逻辑无关，纯显示
const TodoList = ({todos,onTodoClick}) => (
  //从父组件中寻找相应属性
  <ul>
  {
    todos.map(todo =>

    <Todo key={todo.id}
          {...todo }                    //将整个todo对象里面的属性都传入；es6语法糖；
          onClick={() => onTodoClick(todo.id)}
    />
  // 调用onTodoClick后，去container中的visibleTodoList文件中dispatch；分发一个toggleTodo函数；
  //    return{
  //      type:"TOGGLE_TODO",
  //      id
  //      }
      )}
  </ul>

);
export default TodoList;
//组件中的todos和onTodoClick是由visibleTodoList中connect( )传入的

