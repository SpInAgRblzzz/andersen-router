import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import FavoriteButton from "./FavoriteButton";
import reactRenderHTML from "react-render-html";
import "./ShowPage.css";

const axios = require("axios").default;

function ShowPage() {
	const { id } = useParams();
	const [content, setContent] = useState(null);

	useEffect(() => {
		axios.get(`http://api.tvmaze.com/shows/${id}`).then((response) => {
			setContent(response.data);
		});
	}, []);

	return content ? (
		<div className="show-page-content">
			<div className="left-column">
				<img src={content.image.medium} alt={`${content.name} show`} />
				<FavoriteButton id={id} />
			</div>
			<div className="left-column">
				<h3>{content.name}</h3>
				{reactRenderHTML(content.summary)}
			</div>
		</div>
	) : (
		<h1>W8</h1>
	);
}

export default ShowPage;
