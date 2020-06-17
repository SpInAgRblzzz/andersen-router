import React, { useState } from "react";
import { connect } from "react-redux";
import setList from "../redux/setList";
import { Icon, Input, Button } from "semantic-ui-react";

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
					setList(responce.data.map(({ show }) => show));
				}
			);
		} else {
			setList([]);
		}
	}

	return (
		<form onSubmit={handleSubmit}>
			<Input
				icon={<Icon name="search" inverted circular link />}
				placeholder="Search..."
				onChange={handleTextInput}
				value={nameSearch}
			/>
			<Button inverted color="green" onClick={handleSubmit}>
				Search
			</Button>
		</form>
	);
}

export default connect(null, { setList })(HomepageForm);
