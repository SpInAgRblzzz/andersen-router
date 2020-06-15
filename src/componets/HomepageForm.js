import React, { useState } from "react";
import { connect } from "react-redux";
import setList from "../redux/setList";

const axios = require("axios").default;

function HomepageForm({ setList }) {
	const [nameSearch, setNameSearch] = useState("");

	function handleTextInput(e) {
		setNameSearch(e.target.value);
	}

	function handleSubmit(e) {
		e.preventDefault();
		if (nameSearch.trim()) {
			axios(`http://api.tvmaze.com/search/shows?q=${nameSearch}`).then(
				(responce) => {
					console.log(responce);
					setList(responce.data.map(({ show }) => show));
				}
			);
		}
	}

	return (
		<form onSubmit={handleSubmit}>
			<label>
				Search by name:
				<input
					type="text"
					name="name"
					value={nameSearch}
					onChange={handleTextInput}
				/>
			</label>
			<input type="submit" value="SUBMIT" />
		</form>
	);
}

export default connect(null, { setList })(HomepageForm);
