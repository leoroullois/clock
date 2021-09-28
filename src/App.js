import "./css/App.css";
import Length from "./components/Length";
import Session from "./components/Session";
import Controls from "./components/Controls";
import { Provider } from "react-redux";
import {store} from "./redux/store";
function App() {
	return (
		<Provider store={store} >
      <div className='App'>
			<h2 style={{ textAlign: "center" }}>25+5 Clock</h2>
			<div className='length-container'>
				<Length name='break'/>
				<Length name='session'/>
			</div>
      <Session />
      <Controls />
		</div>
    </Provider>
	);
}

export default App;
