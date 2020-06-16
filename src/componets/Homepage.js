import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import setList from "../redux/setList";
import "./Homepage.css";
import HomepageForm from "./HomepageForm";
import HomepageListItem from "./HomepageListItem";

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
	}, []);

	return (
		<div className="homepage">
			<HomepageForm />

			<ul className="list" ref={listNode}>
				{list.length === 0 ? (
					<p>no match</p>
				) : (
					list.map((listItem) => (
						<HomepageListItem
							key={listItem.id}
							externals={listItem.externals}
							showName={listItem.name}
						/>
					))
				)}
			</ul>
		</div>
	);
}

export default connect((state) => ({ list: state.list }), { setList })(
	Homepage
);
