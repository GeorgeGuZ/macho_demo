import React from "react"

export default class Slider extends React.Component {
	render (){
		return (
			<div>
				<div id="myCarousel" className="carousel slide fy-main-content" data-ride="carousel">
					<ol className="carousel-indicators">
						<li data-target="#myCarousel" data-slide-to="0" className=""></li>
						<li data-target="#myCarousel" data-slide-to="1" className=""></li>
						<li data-target="#myCarousel" data-slide-to="2" className="active"></li>
					</ol>
					<div className="carousel-inner" role="listbox">
						<div className="item">
							<img className="first-slide"
								 src="images/slider_1.png"
								 alt="First slide"/>
						</div>
						<div className="item">
							<img className="second-slide"
								 src="images/slider_2.png"
								 alt="Second slide"/>
						</div>
						<div className="item active">
							<img className="third-slide"
								 src="images/slider_3.png"
								 alt="Third slide"/>
						</div>
					</div>
					<a className="left carousel-control" href="http://getbootstrap.com/examples/carousel/#myCarousel" role="button"
					   data-slide="prev">
						<i className="fa fa-chevron-left fy-chevron-left" aria-hidden="true"></i>
						<span className="sr-only">Previous</span>
					</a>
					<a className="right carousel-control" href="http://getbootstrap.com/examples/carousel/#myCarousel" role="button"
					   data-slide="next">
						<i className="fa fa-chevron-right fy-chevron-right" aria-hidden="true"></i>
						<span className="sr-only">Next</span>
					</a>
				</div>
			</div>
		)
	}
}