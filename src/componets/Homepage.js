import React, { useEffect, useState } from "react";
import "./Homepage.css";

const axios = require("axios").default;

function Homepage() {
	const [list, setList] = useState([]);
	const listNode = React.createRef();

	useEffect(() => {
		axios.get("http://api.tvmaze.com/schedule/full").then((responce) => {
			setList(responce.data);
		});
	}, []);

	return (
		<div className="homepage">
			<fieldset>
				<input type="submit" value="SUBMIT" />
			</fieldset>
			<ul className="list" ref={listNode}>
				{list.length === 0 ? (
					<p>no match</p>
				) : (
					list
						.slice(0, 10)
						.map((listItem) => (
							<li key={listItem.id}>{listItem.name}</li>
						))
				)}
			</ul>
		</div>
	);
}

export default Homepage;
