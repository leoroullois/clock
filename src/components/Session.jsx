import React from "react";
import { connect } from "react-redux";
import { sessionAction } from "../redux/Session/action";
const style = {
	display: "flex",
	margin: "30px auto",
	flexDirection: "column",
	justifyContent: "center",
	height: "120px",
	width: "200px",
	borderRadius: "6px",
	border: "1px solid black",
	textAlign: "center",
};

class Presentational extends React.Component {
	componentDidMount() {
		if (this.props.controls.playing === true) {
			this.props.session.running = true;
		} else {
			this.props.session.running = false;
		}
	}
	render() {
		const seconds = this.props.session.seconds;
		return (
			<div style={style} className='timer'>
				<p
					style={{ fontSize: "1.5em", margin: 0, lineHeight: "2em" }}
					id='timer-label'
				>
					{this.props.length.inBreak ? "Break" : "Session"}
				</p>
				<div style={{ fontSize: "2.5em", fontWeight: "bold" }} id='time-left'>
					{Math.floor(seconds / 60) < 10
						? "0" + Math.floor(seconds / 60)
						: Math.floor(seconds / 60)}
					:{seconds % 60 < 10 ? "0" + (seconds % 60) : seconds % 60}
				</div>
				<audio
					preload='auto'
					id='beep'
					src='https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav'
				></audio>
			</div>
		);
	}
}
const mapStateToPprops = (state) => {
	return {
		length: state.length,
		session: state.session,
		controls: state.controls,
	};
};
const mapDispatchToPops = (dispatch) => {
	return {
		updateSession: () => {
			dispatch(sessionAction());
		},
	};
};
const Session = connect(mapStateToPprops, mapDispatchToPops)(Presentational);

export default Session;
