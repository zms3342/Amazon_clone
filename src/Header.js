import React from "react";
import "./Header.css"
import {Link} from "react-router-dom";

function Header() {
	return(
		<nav className="header">
			{/*Logo on left */}
			<Link to="/">
			<img 
			className="header__logo" 
			src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
			alt=""/>
			</Link>

			{/*Search in the middle*/}
			<input type="text" className="header__searchInput"/>


			{/*3 Links, sign in , orders, your prime*/}
			{/*Basket icon + number of items */}
		</nav>
	);
}

export default Header