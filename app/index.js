import React from "react";
import {render} from "react-dom";
import {Router,Route,hashHistory,IndexRedirect,Redirect,IndexRoute} from 'react-router';
import {Provider} from 'react-redux'
import {combineReducers,createStore} from 'redux'

import Main from '../src/components/pages/Main';
import Home from '../src/components/pages/Home';
import Layout from "../src/components/pages/Layout";
import About from "../src/components/pages/About";


// 方法1
/*const app = document.getElementById('app');
render((<Router history={hashHistory}>
			<Route path='/' component={Main}>
				<Route path='/layout' component={Layout} />
				<Route path='/about' component={About} />
			</Route>
	</Router>), app);
*/
//方法2
 
 function visibilityFilter(state ='SHOW_ALL',action){
 	switch(action.type){
 		case "SET_VISIBILITY_FILTER":
 			return action.filter;
 		default:
 			return state;
 	}
 }
 
const reducer = combineReducers({visibilityFilter})
 const store =createStore(reducer)


const routes =(
		<Route path='/'>
			<IndexRedirect to='/main' />
			{/*<IndexRoute component={Layout}/>*/}
			<Route path='/main' component={Main}>
				<Redirect from="layout/:id" to="/layout" />
				<Route path='/layout' component={Layout} />
				<Route path='/about' component={About} />
			</Route>
		</Route>
		)

class App extends React.Component{
	render(){
		return(
			<Provider store={store}>
				<Router routes={routes} history={hashHistory} />
			</Provider>)
	}
}

render(<App></App>,document.getElementById('app'))



if (module.hot) {
	module.hot.accept();
}