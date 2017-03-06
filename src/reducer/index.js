/**
 * Created by Administrator on 2017/2/9 0009.
 */
//代表整个系统响应reducer,合并写在各处的reducer,各处reducer必须被export
import todos from "./todo";
import visibilityFilter from "./visibilityFilter";
import { combineReducers } from "redux";
// var state=[],
//      action=[];
const todoApp = combineReducers({
  todos,
  visibilityFilter
//相当于todos: todos(state.todos, action)，
// 相当于 visibilityFilter: visibilityFilter(state.visibilityFilter, action)
});
// export default function todoApp(state = {}, action) {
//   return {
//     visibilityFilter: visibilityFilter(state.visibilityFilter, action),
//     todos: todos(state.todos, action)
//   }
// }
export default todoApp
