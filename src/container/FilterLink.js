/**
 * Created by Administrator on 2017/2/10 0010.
 */
import { Link } from "react-router";

import React from 'react';
const FilterLink = ({ filter, children }) => (
  <Link
    to={filter === 'all' ? '/' : filter}
    activeStyle={{
      textDecoration: 'none',
      color: 'black'
    }}
  >
    {children}
  </Link>
);
export default FilterLink ;