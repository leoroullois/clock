import React from "react";
import { connect } from "react-redux";
import "../css/App.css";
import { decrementAction, incrementAction } from "../redux/Length/action";
import { sessionAction } from "../redux/Session/action";

class Presentational extends React.Component {
	constructor(props) {
		super(props);
		this.handleIncrement = this.handleIncrement.bind(this);
		this.handleDecrement = this.handleDecrement.bind(this);
	}

	handleIncrement() {
		console.log("length props :", this.props);
		console.log("name :", this.props.name);
		this.props.incrementLength(this.props.name, this.props.session);
		// this.props.session.sessionMinutes=(this.props.name==="break" ? this.props.length.breakDuration+1 : this.props.length.sessionDuration+1);
		if (this.props.name === "session") {
			this.props.session.sessionMinutes = this.props.length.sessionDuration + 1;
		}
	}
	handleDecrement() {
		console.log("length props :", this.props);
		console.log("name :", this.props.name);
		this.props.decrementLength(this.props.name, this.props.session);
		if (this.props.name === "session") {
			this.props.session.sessionMinutes = this.props.length.sessionDuration - 1;
		}
	}
	render() {
		return (
			<section id={this.props.name} className='length'>
				<div className='label' id={this.props.name + "-label"}>
					{this.props.name} Length
				</div>
				<div className={"container"}>
					<ion-icon
						class={"decrement"}
						id={this.props.name + "-decrement"}
						name='arrow-down-outline'
						onClick={this.handleDecrement}
					></ion-icon>

					<p id={this.props.name + "-length"}>
						{this.props.name === "break"
							? this.props.length.breakDuration
							: this.props.length.sessionDuration}
					</p>

					<ion-icon
						class={"increment"}
						id={this.props.name + "-increment"}
						name='arrow-up-outline'
						onClick={this.handleIncrement}
					></ion-icon>
				</div>
			</section>
		);
	}
}
const mapStateToPprops = (state) => {
	return {
		// controls:state.controls,
		length: state.length,
		session: state.session,
		controls: state.controls,
	};
};
const mapDispatchToProps = (dispatch) => {
	return {
		incrementLength: (name, session) => {
			dispatch(incrementAction(name, session));
		},
		decrementLength: (name, session) => {
			dispatch(decrementAction(name, session));
		},
		timerLength: () => {
			dispatch(sessionAction());
		},
	};
};
const Length = connect(mapStateToPprops, mapDispatchToProps)(Presentational);
export default Length;
