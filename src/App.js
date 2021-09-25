import "./css/App.css";
import Controller from "./components/Controller";
import Timer from "./components/Timer";
function App() {
	return (
		<div className='App'>
			<h2 style={{ textAlign: "center" }}>25+5 Clock</h2>
			<div className='length-container'>
				<Controller name='break' length={5} />
				<Controller name='session' length={25} />
			</div>
      <Timer />
			<p>
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus sed eos
				ipsum, molestias illo totam labore ad reiciendis sequi ex quo animi
				dolor ducimus quidem atque aspernatur laboriosam, perspiciatis eveniet.
			</p>
		</div>
	);
}

export default App;
