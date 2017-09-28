import React from 'react'
import {Link,IndexLink} from 'react-router'

class HeaderMenu extends React.Component{
	render(){
		return(
			<div>
				<IndexLink to='/'>主页</IndexLink>
				<Link to='/about'>关于</Link>
				<Link to='/layout'>布局</Link>
				<Link to='main/layout/1'>布局111</Link>
			</div>)
	}
}

export default HeaderMenu