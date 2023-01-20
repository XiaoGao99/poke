import React, { useState } from "react";
import axios from "axios";
const Top = (props) => {
	const { poke, setPoke, err, setErr } = props;
	const [val, setVal] = useState("");
	const [warn, setWarn] = useState(false);
	const [load, setLoad] = useState(false);
	const [queryErr, setQueryErr] = useState(false);
	const handleSearch = (e) => {
		e.preventDefault();
		setLoad(true);
		if (val.length === 0) {
			setWarn(true);
			setLoad(false);
			return;
		}
		setWarn(false);
		axios
			.get("https://pokeapi.co/api/v2/pokemon/" + val)
			.then((res) => {
				console.log(res);
				setPoke(res.data);
				setErr(false);
				setLoad(false);
				setQueryErr(false);
			})
			.catch((err) => {
				console.log(err);
				setErr(true);
				setPoke({});
				setLoad(false);
				setQueryErr(true);
			});
	};
	return (
		<div className="mb-5">
			<h3 className="text-primary">Seach A Pokemon Below!</h3>
			<nav className="navbar">
				<div className="container-fluid">
					<form
						className="d-flex"
						role="search"
						style={{ margin: "auto" }}
						onSubmit={(e) => handleSearch(e)}
					>
						<input
							className="form-control"
							type="text"
							placeholder="Enter a Pokemon's name"
							aria-label="Search"
							value={val}
							id="pokemon"
							style={{ marginRight: "5px" }}
							onChange={(e) => setVal(e.target.value)}
						/>

						<button type="submit" className="btn btn-outline-success">
							<i class="fa-solid fa-magnifying-glass"></i>
						</button>
					</form>
				</div>
			</nav>
			<div style={{ margin: "auto" }}>
				<p className="text-secondary">
					*Input must be all lower case English letters!
				</p>
			</div>
			{warn ? (
				<div style={{ margin: "auto" }}>
					<p className="text-danger">Pokemon name is required!</p>
				</div>
			) : (
				<p></p>
			)}
			{load ? <p style={{ margin: "auto" }}>Loading......</p> : <p></p>}
			{queryErr ? (
				<p style={{ margin: "auto" }} className="text-danger">
					Cannot fetch your query, please check your input!
				</p>
			) : (
				<p></p>
			)}
		</div>
	);
};

export default Top;
