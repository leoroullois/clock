import React from "react";
import "../css/App.css";
class Controller extends React.Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(e) {
		console.log(e);
	}
	render() {
		return (
			<section id={this.props.name} className="length">
				<div className="label" id={this.props.name + "-label"}>{this.props.name} Length</div>
				<div className={"container"}>
					<ion-icon
                        class={"decrement"}
						id={this.props.name + "-decrement"}
						name='arrow-down-outline'
						onClick={this.handleClick}
					></ion-icon>

					<p id={this.props.name + "-length"}>{this.props.length}</p>

					<ion-icon
                        class={"increment"}
						id={this.props.name + "-increment"}
						name='arrow-up-outline'
						onClick={this.handleClick}
					></ion-icon>
				</div>
			</section>
		);
	}
}
export default Controller;
