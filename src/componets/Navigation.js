import React from "react";
import { Link } from "react-router-dom";
import { Button } from "semantic-ui-react";
import { useLocation } from "react-router-dom";

function Navigation() {
	const { pathname } = useLocation();

	return (
		<nav>
			<Link to="/">
				<Button
					inverted
					color={pathname === "/" ? "green" : "facebook"}>
					Home
				</Button>
			</Link>
			<Link to="/favorite">
				<Button
					inverted
					color={pathname === "/favorite" ? "green" : "facebook"}>
					Favorite
				</Button>
			</Link>
		</nav>
	);
}

export default Navigation;
