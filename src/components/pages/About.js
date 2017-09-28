import React from 'react';
import {connect} from 'react-redux';
class About extends React.Component{
	render(){
		return(
			<div>About page11111111</div>)
	}
}

let mapStateToProps = (state,ownProps)=>{
	return{
		visibleState:state.visibilityFilter
	}
}
export default connect(mapStateToProps)(About)