import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const axios = require("axios").default;

function ShowPage() {
	const { id } = useParams();
	const [content, setContent] = useState(null);
	useEffect(() => {
		axios.get(`http://api.tvmaze.com/shows/${id}`).then((response) => {
			console.log("response", response.data);
			setContent(response.data);
		});
	}, []);
	return content ? (
		<div>
			<img
				src={content.image.medium}
				alt={`${content.name} show image`}
			/>
		</div>
	) : (
		<h1>W8</h1>
	);
}

export default ShowPage;