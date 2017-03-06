/**
 * Created by Administrator on 2017/2/9 0009.
 */
//组件分为两种，container表现逻辑，与数据流相关；component决定如何显示，与样式相关；
import AddTodo from "../container/AddTodo";
import VisibleTodoList from "../container/visibleTodoList";
import Footer from "./Footer";
import React from 'react';
//相当于写react的render()方法；没有return( );
const App = ({params})=> (

    <div>
      <AddTodo/>
      <VisibleTodoList filter={params.filter || 'all'}  />
      <Footer/>
    </div>
);
export default App;
