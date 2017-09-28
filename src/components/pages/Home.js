import React from 'react'
import {connect} from 'react-redux'

class Home extends React.Component{
	render(){
		return(
			<div>Home</div>)
	}
}

let mapStateToProps =(state,ownProps)=>{
	return {
		visibileState:state.visibilityFilter
	}
}


export default connect(mapStateToProps)(Home)