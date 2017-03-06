/**
 * Created by Administrator on 2017/2/9 0009.
 */
const visibilityFilter = (state="all",action) =>{
  switch(action.type){
    case "SET_VISIBILITY_FILTER":
      //返回一个string，（不是对象或者数组）??由状态树决定，console.log(data.state),返回两部分，
      //一部分是：todos是一个对象数组，由对象todo组成,todo中包含了completed,text,id等属性；
      //了一部分是：visibilityFilter,是一个string
      // return action.visibilityFilter视频写法
      return action.filter
    default:
      return state
  }
}
export default visibilityFilter
