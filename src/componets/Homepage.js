import React, { useEffect, useState } from "react";
import "./Homepage.css";

const axios = require("axios").default;

function Homepage() {
	const [list, setList] = useState([]);
	const listNode = React.createRef();

	useEffect(() => {
		axios.get("http://api.tvmaze.com/schedule/full").then((responce) => {
			setList(responce.data);
			console.log(responce.data);
		});
	}, []);

	return (
		<div className="homepage">
			<form>
				<input type="submit" value="SUBMIT" />
			</form>
			<ul className="list" ref={listNode}>
				{list.length === 0 ? (
					<p>no match</p>
				) : (
					list.map((listItem) => (
						<li key={listItem.id}>{listItem.name}</li>
					))
				)}
			</ul>
		</div>
	);
}

export default Homepage;
