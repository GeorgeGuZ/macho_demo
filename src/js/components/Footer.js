import React from "react"

export default class Footer extends React.Component{

	render (){
		var footerMenu = this.props.menuItems.map((value, i) => {
				return <li className="macho-footer-li" key={"footer-"+i} onClick={this.props.onMenuClick.bind(this, value)}><a className="macho-footer-a">{value}</a></li>;
			});
		return (
			<div className="row macho-footer">
				<div className="macho-footer-wrapper row">
					<span className="macho-footer-title">MACHO</span>
					<hr/>
					<div className="col-md-6">
						<ul className="macho-footer-ul">
						{footerMenu}
						</ul>
					</div>
					<div className="col-md-6">
						<ul className="pull-right">
							<li><a href="https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Fwww.machobear.ca%2F&amp;src=sdkpreparse" target="_blank"><img src="images/facebook-button.svg" className="macho-social-icon"/></a></li>
							<li><a href="https://twitter.com/share" target="_blank"><img src="images/twitter-button.svg" className="macho-social-icon"/></a></li>
							<li><a href="https://plus.google.com/share?url=www.machobear.ca" target="_blank"><img src="images/google-button.svg" className="macho-social-icon"/></a></li>
						</ul>
					</div>
				</div>
			</div>
		)
	}
}
