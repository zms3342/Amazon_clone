import React, {useState} from "react";
import "../css/Login.css";
import {Link, useHistory} from "react-router-dom";
import {auth} from "../firebase"


function Login(){

	const history =useHistory() 

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const register = event => {
		event.preventDefault();
		auth.createUserWithEmailAndPassword(email,password)
		.then((auth) => {
			//created account
			history.push('/');
		})
		.catch((event) => alert(event.message));


	};

	const login = event => {
		event.preventDefault(); //prevents refresh
		auth.signInWithEmailAndPassword(email,password)
		.then((auth) => {
			history.push('/');

		})
		.catch(event=> alert(event.message))
	};
return(
	<div className="login"> 
		<Link to="/">
			<img 
			className ="login__img"
			src= "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
			alt = "" />
		</Link>

		<div className="login__container"> 
			<h1>Sign-In</h1>
			<form>
				<h5> Email </h5>
				<input value={email} onChange={event => setEmail(event.target.value)} type="email" />
				<h5> Password </h5>
				<input value={password} onChange={event => setPassword(event.target.value)} type="password" />
				<button onClick={login} type="submit" className="login__loginButton"> Sign in </button>
			</form>
			<p> By signing-in you agree to Amazons Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice. </p>
			<button onClick={register} className="login__createAccount"> Create Your Amazon Account </button>
		</div>

	</div>
	)
}

export default Login; 

