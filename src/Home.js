import React from "react";
import "./Home.css"
// import {Link} from "react-router-dom";


function Home(){
	return(
		<div className="home">
			{/* can we make this a carosel */}
			<img 
			className="home__image"
			src="https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/NWViNTVmMjkt/NWViNTVmMjkt-N2FhNWE4ZjYt-w3000._CB433824727_.jpg"
			alt="" />
		</div>
		);
}

export default Home