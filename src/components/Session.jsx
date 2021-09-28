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
	render() {
		return (
			<div style={style} className='timer'>
				<p
					style={{ fontSize: "1.5em", margin: 0, lineHeight: "2em" }}
					id='timer-label'
				>
					Session
				</p>
				<div style={{ fontSize: "2.5em", fontWeight: "bold" }} id='time-left'>
					{this.props.session.inBreak
						? this.props.session.breakMinutes < 10
							? "0" + this.props.session.breakMinutes
							: this.props.session.breakMinutes
						: this.props.session.sessionMinutes < 10
						? "0" + this.props.session.sessionMinutes
						: this.props.session.sessionMinutes}
					:
					{this.props.session.inBreak
						? this.props.session.breakSeconds < 10
							? "0" + this.props.session.breakSeconds
							: this.props.session.breakSeconds
						: this.props.session.sessionSeconds < 10
						? "0" + this.props.session.sessionSeconds
						: this.props.session.sessionSeconds}
				</div>
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
