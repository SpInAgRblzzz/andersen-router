import React, { useEffect } from "react";
import { connect } from "react-redux";
import setList from "../redux/setList";
import "./Homepage.css";
import HomepageForm from "./HomepageForm";
import HomepageListItem from "./ListItem";
import { List } from "semantic-ui-react";

const axios = require("axios").default;

function Homepage({ list, setList }) {
	const listNode = React.createRef();

	useEffect(() => {
		if (list.length === 0) {
			axios
				.get(`http://api.tvmaze.com/search/shows?q=a`)
				.then((responce) => {
					setList(responce.data.map((item) => item.show));
				});
		}
	}, [list]);

	return (
		<div className="homepage">
			<HomepageForm />

			<List
				divided
				verticalAlign="middle"
				className="list"
				ref={listNode}>
				{list.length === 0 ? (
					<p>no match</p>
				) : (
					list.map((listItem) => (
						<HomepageListItem
							key={listItem.id}
							id={listItem.id}
							showName={listItem.name}
						/>
					))
				)}
			</List>
		</div>
	);
}

export default connect((state) => ({ list: state.list }), { setList })(
	Homepage
);
