/**
 * Created by Administrator on 2017/2/10 0010.
 */
//为什么没有return( );相当于render( )函数；不是花括号
//一个Todo就是一个待办项，一个无序列表  ；三个参数由TodoList中的Todo标签中的props中传入
import React from 'react';
const Todo = ({onClick,completed,text}) =>(
  <li
     onClick={onClick}
     style={{textDecoration:completed? "line-through" : "none"}}>
     {text}
  </li>
);
export default Todo;
