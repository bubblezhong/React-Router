/**
 * Created by Administrator on 2017/2/9 0009.
 */
//纯显示组件,与数据流无关；FilterLink是一个逻辑组件
import FilterLink from "../container/FilterLink";
import React from 'react';
const Footer = () =>(
  <p>
    show:
    {" "}
    <FilterLink filter="all">
    All
  </FilterLink>
    {", "}
    <FilterLink filter="active">
      Active
    </FilterLink>
    {", "}
    <FilterLink filter="completed">
      completed
    </FilterLink>
  </p>
);
export default Footer;


