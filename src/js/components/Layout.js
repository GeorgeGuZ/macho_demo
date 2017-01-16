import React from "react"
import { connect } from "react-redux"

import MenuBar from "./MenuBar"
import Slider from "./Slider"
import Product from "./Product"
import Works from "./Works"
import Team from "./Team"
import Footer from "./Footer"

import { fetchGeneralInfo, downloadAppClicked, contactUsClicked } from "../actions/generalActions"

@connect((store) => {
  return {
	general: store.general
  };
})
export default class Layout extends React.Component {
	
	componentWillMount (){
		this.props.dispatch(fetchGeneralInfo());
	}
	
	onDownloadApp(){
		this.props.dispatch(downloadAppClicked());
		alert("You clicked download app " + this.props.general.downloadApp+ " time(s).");
	}
	
	onContactUs() {
		this.props.dispatch(contactUsClicked());
		alert("You clicked contact us " + this.props.general.contactUs+ " time(s).");
	}
	
	onMenuClicked (item) {
		var position; 
		switch (item){
			case "Products":
				$("html, body").animate({ scrollTop: $("#products").offset().top }, 500);
				return;
			case "Works":
				$("html, body").animate({ scrollTop: $("#works").offset().top }, 500);
				return;
			case "Team":
				$("html, body").animate({ scrollTop: $("#team").offset().top }, 500);
				return;
			case "About":
				$("html, body").animate({ scrollTop: $("#about-us").offset().top }, 500);
				return;
		}
	}

	render() {
		const { general } = this.props;
		return (
			<div className="container">
				<MenuBar menuItems={general.menuItems} onContactUs={this.onContactUs.bind(this)} onMenuClick={this.onMenuClicked.bind(this)}/>
				<Slider />
				<Product onDownloadApp={this.onDownloadApp.bind(this)}/>
				<Works />
				<Team onContactUs={this.onContactUs.bind(this)}/>
				<Footer menuItems={general.menuItems} onMenuClick={this.onMenuClicked.bind(this)}/>
			</div>
		)
	}
}
