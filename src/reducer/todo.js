/**
 * Created by Administrator on 2017/2/9 0009.
 */
// 传入旧的state和action，做出相应的响应，是响应的抽象
// 单个待办项响应
const todo = (state,action) =>{
  switch(action.type){
    case "ADD_TODO":
      //返回单个object;
      // alert(action.text);
      return{
        id:action.id,
        text:action.text,
        completed:false
      };
    case "TOGGLE_TODO":
      if(state.id !== action.id){
          return state
        }
    // assign：将后两个对象合并放在第一个对象中返回，即旧的state和complete取反进行返回
    //   return object.assign({},state,{completed: !state.completed})
      return {
        ...state,
        completed: !state.completed
      };
    default:
      return state
  }
};
//全部待办项（待办项列表）的响应，list传进来的每一个项，传入的state是显示背后的数据，不是单独的object,state是一个数组，
// 里面放了多个的todo
const todos = (state = [],action) =>{
  switch(action.type){
    case "ADD_TODO":

      return[
        ...state,                    //传入原有的多个todo的state；
         todo(undefined,action)     //返回单个object对象,和已有数组组成新的状态返回,相当于返回一个新的lists状态；
      ];                            //被添加属性存在action中，与原有state无关，所以参数可以为undefined
     // console.log(state.concat([todo(undefined,action)]));
     //  return state.concat([todo(undefined,action)]);

    case "TOGGLE_TODO":
      return state.map(t=>todo(t,action))              //要修改状态，需要知道原有state;
    default:
      return state
  }
};
// console.log(todos);

export default todos

