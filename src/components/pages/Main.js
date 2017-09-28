import React from 'react';
import {Link} from 'react-router';
import HeaderMenu from '../common/HeaderMenu'

class Main extends React.Component{
	render(){
		return(
			<div>
				<HeaderMenu />
				<div className='main-contain'>
					{this.props.children}
				</div>
			</div>)
	}
}

export default Main