import React from "react";
import "./Header.css"
import {Link} from "react-router-dom";
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

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
			<div className="header__search">
				<input type="text" className="header__searchInput"/>
				<SearchIcon className="header__searchIcon"/>
			</div>

			{/* Links, sign in , orders, your prime*/}
			<div className="header__nav">
				<Link className="header__link" to="/login">
					<div className="header__option">
						<span className="header__optionLineOne">Hello Zafar,</span>
						<span className="header__optionLineTwo">Sign in</span>
					</div>
				</Link>

				<Link className="header__link" to="/">
					<div className="header__option">
						<span className="header__optionLineOne"> Returns</span>
						<span className="header__optionLineTwo">& Orders</span>
					</div>
				</Link>

				<Link className="header__link" to="/">
					<div className="header__option">
						<span className="header__optionLineOne">Your</span>
						<span className="header__optionLineTwo">Prime</span>
					</div>
				</Link>
			
				<Link className="header__link" to="/checkout">
					<div className="header__optionCart">
						<ShoppingCartIcon className="header__basketIcon" />
						<span className="header__optionLineTwo header__cartCount">0</span>
					</div>
				</Link>
			</div>
			{/*Basket icon + number of items */}
		</nav>
	);
}

export default Header