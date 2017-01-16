import React from "react"
import {downloadAppClicked} from "../actions/generalActions"

export default class Product extends React.Component{

	render (){
		return (
			<div className="row macho-product-intro-container" id="products">
				<div className="col-md-6">
					<div className="macho-product-intro-wrapper">
						<p className="macho-title">The Macho App</p>
						<p className="macho-product-content">
							Another journey chamber way yet females man. 
							Way extensive and dejection get delivered deficient sincerity gentleman age. 
							Too end instrument possession contrasted motionless. 
							Calling offence six joy feeling. 
						</p>
						<p className="macho-product-content">
							Coming merits and was talent enough far. 
							Sir joy northward sportsmen education. 
							Discovery incommode earnestly no he commanded if. 
							Put still any about manor heard. 
						</p>
						<div className="text-center macho-download-app-button" onClick={this.props.onDownloadApp}>Download the app</div>
					</div>
				</div>
				<div className="col-md-6">
					<img src="images/iPhone_6.png" className="macho-full"/>
				</div>
			</div>
		)
	}

}