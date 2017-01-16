import React from "react"

export default class Team extends React.Component {

	render (){
		return (
			<div className="row macho-team-section" id="team">
				<div className="macho-full text-center macho-section-title">
					Our Team
				</div>
				<img className="macho-full" src="images/our_team.png" />
				<div className="col-md-6 text-center about-us-container macho-no-padding" id="about-us">
					<div className="macho-full macho-about-us-container">
						<div className="macho-about-us-wrapper">
							<p className="macho-title">About Us</p> <br/>							
							<p>
								Living valley had silent eat merits esteem bed. 
								In last an or went wise as left. 
								Visited civilly am demesne so colonel he calling.
							</p>
							<div className="macho-contact-us-button" onClick={this.props.onContactUs}>CONTACT US</div>						
						</div>
					</div>
				</div>
				<div className="col-md-6 text-center macho-no-padding">
					<iframe 
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21161.427785462904!2d-122.08748393642624!3d37.4262407500836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fba027820e5d9%3A0x60a90600ff6e7e6e!2s1600+Amphitheatre+Pkwy%2C+Mountain+View%2C+CA+94043%2C+USA!5e0!3m2!1sen!2sca!4v1484254639890" 
						frameBorder="0"
						className="macho-full macho-no-border"
						height="400px">
					</iframe>
				</div>
			</div>
		)
	}
}