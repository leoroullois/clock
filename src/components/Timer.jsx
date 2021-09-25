import React from "react";
class Timer extends React.Component {
	render() {
		return (
			<div className='timer'>
				<p id='timer-label'>Session</p>
				<div id='time-left'>25:00</div>
			</div>
		);
	}
}
export default Timer;