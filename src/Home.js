import React from "react";
import "./Home.css"
import Product from "./Product"
// import {Link} from "react-router-dom";


function Home(){
	return(
		<div className="home">
		{/* can we make this a carosel */}
			<img 
			className="home__image"
			src="https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/NWViNTVmMjkt/NWViNTVmMjkt-N2FhNWE4ZjYt-w3000._CB433824727_.jpg"
			alt="" />

			<div className="home__row">
				<Product
				id="1230973"
				title="Noam Chomsky - Internationalism or Extinction"
				image="https://m.media-amazon.com/images/I/511aJcMzPyL._AC_SL520_.jpg"
				price={21.75} 
				rating={4}/>
				<Product
				id="1230973"
				title="Noam Chomsky - Internationalism or Extinction"
				image="https://m.media-amazon.com/images/I/511aJcMzPyL._AC_SL520_.jpg"
				price={21.75} 
				rating={4}/>
			</div>

			<div className="home__row">
				<Product
				id="1230973"
				title="Noam Chomsky - Internationalism or Extinction"
				image="https://m.media-amazon.com/images/I/511aJcMzPyL._AC_SL520_.jpg"
				price={21.75} 
				rating={4}/>
				<Product
				id="1230973"
				title="Noam Chomsky - Internationalism or Extinction"
				image="https://m.media-amazon.com/images/I/511aJcMzPyL._AC_SL520_.jpg"
				price={21.75} 
				rating={4}/>
				<Product
				id="1230973"
				title="Noam Chomsky - Internationalism or Extinction"
				image="https://m.media-amazon.com/images/I/511aJcMzPyL._AC_SL520_.jpg"
				price={21.75} 
				rating={4}/>
			</div>

			<div className="home__row">
				<Product
				id="1230973"
				title="Noam Chomsky - Internationalism or Extinction"
				image="https://m.media-amazon.com/images/I/511aJcMzPyL._AC_SL520_.jpg"
				price={21.75} 
				rating={4}/>
			</div>			


		</div>
		);
}

export default Home;