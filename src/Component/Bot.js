import React from "react";

const Bot = (props) => {
	const { poke, setPoke, err, setErr } = props;
	return (
		<div
			className="d-flex border border-success p-3"
			style={{ margin: "auto", width: "50%" }}
		>
			<div style={{ width: "50%" }}>
				<img
					src={poke.sprites.front_default}
					alt={poke.name}
					style={{ margin: "auto" }}
				/>
			</div>
			<div style={{ widht: "50%" }}>
				<div>Name: {poke.name}</div>
				<hr />
				<div>Id: {poke.id}</div>
				<hr />
				{poke.types.map((type) => {
					return <div>Type: {type.type.name}</div>;
				})}
			</div>
		</div>
	);
};

export default Bot;
