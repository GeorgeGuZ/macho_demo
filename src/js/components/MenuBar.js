import React from "react"

export default class MenuBar extends React.Component {
	
	render(){
		var menuItems = this.props.menuItems.map((value, i, array) => {
			if (array.length==i+1)
				return <li key={"top-menu-"+i}><a className="macho-main-menu-a macho-main-menu-contact" onClick={this.props.onContactUs}>{value}</a></li>
			else 
				return <li key={"top-menu-"+i}><a className="macho-main-menu-a" onClick={this.props.onMenuClick.bind(this, value)}>{value}</a></li>
		});
		//var rect = document.getElementsById("products")[0].getBoundingClientRect();
		//	console.log(rect.top, rect.right, rect.bottom, rect.left);
		return (
			<div className="navbar navbar-static-top">
				<div>
					<a className="navbar-brand macho-main-title" href="http://www.machobear.ca/" target="_blank">MACHO</a>
					<button className="navbar-toggle" data-toggle="collapse" data-target=".navHeaderCollapse">
						<span className="icon-bar"></span>
						<span className="icon-bar"></span>
						<span className="icon-bar"></span>
					</button>
					<div className="collapse navbar-collapse navHeaderCollapse">
						<ul className="nav navbar-nav navbar-right">
							{menuItems}
						</ul>
					</div>
				</div>
			</div>
		)
	}
}