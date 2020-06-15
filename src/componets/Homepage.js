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
		axios.get("http://api.tvmaze.com/schedule/full").then((responce) => {
			setList(responce.data);
		});
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
