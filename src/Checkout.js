import React from "react";
import {useStateValue} from "./StateProvider";
import "./Checkout.css"


function Checkout(){
	const [{basket}] = useStateValue();
	return(
		<div className='checkout'>
			<img 
			className="checkout__ad"
			src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
			alt="" 
			/>
			{basket?.length === 0 ? (
				<div>
					<h2> Your Cart is Empty </h2>
					<p> You have no items in your cart. Click "add to cart" to add items. </p>
				</div>
			) : (
				<div>
					<h2 className="checkout__title"> Your Shopping Cart </h2>
				{/* checkout product comp */}
				</div>
			)}
		</div>
	);
}

export default Checkout;