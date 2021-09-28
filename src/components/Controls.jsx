import React from "react";
import { playAction, pauseAction, resetAction } from "../redux/Controls/action";
import { connect } from "react-redux";
// Style CSS
const style = {
	display: "flex",
	margin: "0 auto",
	fontSize: "3rem",
	cursor: "pointer",
};

class Presentational extends React.Component {
	constructor(props) {
		super(props);
		this.handlePlay = this.handlePlay.bind(this);
		this.handlePause = this.handlePause.bind(this);
		this.handleReset = this.handleReset.bind(this);
		this.myTimer = this.myTimer.bind(this);
	}
	myTimer(inBreak) {
		this.props.session.timers.push(
			setInterval((x = inBreak) => {
				if (x) {
					// ? Si le timer est écoulé
					if (this.props.session.breakSeconds === 0 && this.props.session.breakMinutes===0) {
						this.props.session.inBreak=false;
						this.props.session.breakMinutes=this.props.length.breakDuration;
						this.props.session.sessionSeconds=0;
						this.props.session.breakSeconds=0;
					} else {
						// ? Si les secondes = 0 alors minutes--;
						if (this.props.session.breakSeconds === 0) {
							this.props.session.breakMinutes--;
						}
						// ? Décrémente les secondes correctement
						this.props.session.breakSeconds =
							this.props.session.breakSeconds === 0
								? 59
								: this.props.session.breakSeconds - 1;
					}
				} else {
					// ? Si le timer est écoulé
					if (this.props.session.sessionSeconds===0 && this.props.session.sessionMinutes===0) {
						this.props.session.inBreak=true;
						this.props.session.sessionMinutes=this.props.length.sessionDuration;
						this.props.session.sessionSeconds=0;
						this.props.session.breakSeconds=0;
					} else {
						// ? Si les secondes = 0 alors minutes--;
						if (this.props.session.sessionSeconds === 0) {
							this.props.session.sessionMinutes--;
						}
						// ? Décrémente les secondes correctement
						this.props.session.sessionSeconds =
							this.props.session.sessionSeconds === 0
								? 59
								: this.props.session.sessionSeconds - 1;
					}
				}
				this.props.playClock();
			}, 1000)
		);
	}
	handlePlay() {
		console.log("controls props :", this.props);
		// ? Indique que le timer est en route
		this.props.session.running = true;

		// ? Démarre le timer
		this.myTimer(this.props.session.inBreak);
		this.props.playClock();
	}
	handlePause() {
		console.log("controls props :", this.props);
		// ? Indique que le timer s'arrête
		this.props.session.running = false;

		// ? Arrête le timer
		const myArr = this.props.session.timers;
		for (let k = 0; k < myArr.length; k++) {
			clearInterval(this.props.session.timers[k]);
		}
		this.props.pauseClock();
	}
	handleReset() {
		console.log("controls props :");
		console.table(this.props);

		// ? Indique que le timer est arrêté
		this.props.session.running = false;

		// ? Remets les valeurs par défaut
		this.props.length.sessionDuration = 25;
		this.props.length.breakDuration = 5;
		this.props.session.sessionMinutes = 25;
		this.props.session.sessionSeconds = 0;
		this.props.session.breakMinutes = 25;
		this.props.session.breakSeconds = 5;

		// ? Arrête le timer
		const myArr = this.props.session.timers;
		for (let k = 0; k < myArr.length; k++) {
			clearInterval(this.props.session.timers[k]);
		}
		this.props.resetClock();
		console.table(this.props);
	}
	render() {
		const start = (
			<ion-icon onClick={this.handlePlay} name='play-circle-outline'></ion-icon>
		);
		const pause = (
			<ion-icon
				onClick={this.handlePause}
				name='pause-circle-outline'
			></ion-icon>
		);
		return (
			<section id='controls' style={style}>
				<div id='start_stop'>{this.props.session.running ? pause : start}</div>
				<div id='reset'>
					<ion-icon
						onClick={this.handleReset}
						name='refresh-circle-outline'
					></ion-icon>
				</div>
			</section>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		length: state.length,
		session: state.session,
		controls: state.controls,
		// length:state.length,
	};
};
const mapDispatchToPops = (dispatch) => {
	return {
		playClock: () => {
			dispatch(playAction());
		},
		pauseClock: () => {
			dispatch(pauseAction());
		},
		resetClock: () => {
			dispatch(resetAction());
		},
	};
};
const Controls = connect(mapStateToProps, mapDispatchToPops)(Presentational);
export default Controls;
