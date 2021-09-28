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
let timer;
class Presentational extends React.Component {
	constructor(props) {
		super(props);
		this.handlePlay = this.handlePlay.bind(this);
		this.handlePause = this.handlePause.bind(this);
		this.handleReset = this.handleReset.bind(this);
		this.tick = this.tick.bind(this);
		this.setTimer = this.setTimer.bind(this);
		// this.myTimer = this.myTimer.bind(this);
	}
	tick() {
		if (this.props.session.seconds === 0) {
			const inBreak =this.props.length.inBreak;
			document.querySelector("#beep").play();
			if (inBreak) {
				this.stopTimer();
				this.props.session.seconds = this.props.length.sessionDuration;
				this.props.length.inBreak= !inBreak;
				this.setTimer();
			} else {
				this.stopTimer();
				this.props.session.seconds = this.props.length.breakDuration;
				this.props.length.inBreak= !inBreak;
				this.setTimer();
			}
		} else {
			this.props.session.seconds -= 1;
		}
		this.props.playClock();
	}

	setTimer() {
		timer = setInterval(this.tick, 1000);
	}
	stopTimer() {
		clearInterval(timer);
	}

	handlePlay() {
		console.log("PLAY :", this.props);
		console.table(this.props);
		// ? Indique que le timer est en route
		this.props.session.running = true;

		// ? Démarre le timer
		this.setTimer();
		this.props.playClock();
	}
	handlePause() {
		console.log("PAUSE :", this.props);
		console.table(this.props);
		// ? Indique que le timer s'arrête
		this.props.session.running = false;

		// ? Arrête le timer
		this.stopTimer();
		this.props.pauseClock();
	}
	handleReset() {
		console.log("RESET :", this.props);
		console.table(this.props);

		// ? Gère l'audio
		const audioBip = document.querySelector("#beep");
		audioBip.pause();
		audioBip.currentTime=0;
		
		// ? Indique que le timer est arrêté
		this.props.session.running = false;

		// ? Remets les valeurs par défaut
		this.props.length.sessionDuration = 25 * 60;
		this.props.length.breakDuration = 5 * 60;
		this.props.session.seconds = 25 * 60;

		// ? Arrête le timer
		this.stopTimer();
		this.props.resetClock();
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
