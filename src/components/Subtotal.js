import React from "react";
import "../css/Subtotal.css"
import {useStateValue} from "./StateProvider";
import CurrencyFormat from "react-currency-format";
import {getBasketTotal} from "../reducer"

function Subtotal({price}){

	const [{basket}] = useStateValue();

	return (
		<div className = "subtotal">
			<CurrencyFormat
				renderText ={(value)=>(
					<>
						<p>
							Subtotal ({basket.length} items):
							<strong> {value} </strong>
						</p>
						<small className="subtotal__gift">
							<input type="checkbox" /> This order contains a gift
						</small>
					</>
					)}

				decimalScale={2}
				value={getBasketTotal(basket)}
				displayType={"text"}
				thousandSeperator={true}
				prefix={"$"}
				/>
			
		
			<button className="subtotal__button"> Proceed to Checkout </button>
		</div>

)}
export default Subtotal;
