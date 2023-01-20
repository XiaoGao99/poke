import logo from "./logo.svg";
import "./App.css";
import Top from "./Component/Top";
import Bot from "./Component/Bot";
import { useState } from "react";
function App() {
	const [poke, setPoke] = useState({});
	const [err, setErr] = useState(true);

	function isEmpty(obj) {
		return Object.keys(obj).length === 0;
	}
	return (
		<div
			className="App"
			style={{ marginTop: "5%", height: "100%", width: "100%" }}
		>
			<div style={{ margin: "auto"}}>
				<h1 style={{ margin: "auto", display: "inline" }}>
					Pokemon Dictionary
				</h1>
				<img
					src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
					alt="pikachu"
				/>
			</div>
			<div style={{ height: "80%", width: "100%" }}>
				<Top
					style={{ height: "50%" }}
					poke={poke}
					setPoke={setPoke}
					err={err}
					setErr={setErr}
				></Top>
				{!isEmpty(poke) ? (
					<Bot
						style={{ height: "50%" }}
						poke={poke}
						setPoke={setPoke}
						err={err}
						setErr={setErr}
					></Bot>
				) : (
					<div></div>
				)}
				{err ? (
					<p className="text-warning mt-5">Found 0 result</p>
				) : (
					<p className="text-warning mt-5">Found 1 result</p>
				)}
			</div>
		</div>
	);
}

export default App;
