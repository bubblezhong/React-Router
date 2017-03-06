import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import "babel-polyfill";
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import todoApp from './reducer';
import {Router,Route,browserHistory} from "react-router"


// Render the main component into the dom
//Store 就是保存数据的地方，你可以把它看成一个容器。整个应用只能有一个 Store。
//Redux 提供createStore这个函数，用来生成 Store。
// createStore函数接受另一个函数作为参数，返回新生成的 Store 对象。
let store = createStore(todoApp);
// console.log(store.getState());
ReactDOM.render(
  <Provider store={store}>
  <Router history={browserHistory}>
    <Route path="/(:filter)"  component={App} />
  </Router>

  </Provider> ,
  document.getElementById('app'));
