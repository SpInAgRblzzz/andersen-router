import React from "react";

function HomepageListItem({ id, showName }) {
	return (
		<li>
			{showName} <button>add to favorite</button>
		</li>
	);
}

export default HomepageListItem;
