import { useHistory } from "react-router-dom";

const Landing = () => {

	const history = useHistory();

	return (  
		<div className="container-fluid">
			<div className="container-sm">
			<h1>Welcome to Marta Real Time</h1>
			<h3>Your source for public transit information in real time for Atlanta, GA</h3>
			<p>
				Please note that this is not affiliated with MARTA or itsmarta.com and is offered by a third party
				with information provided by itsmarta.com. This site was created as a class project and learning exercise.
			</p>
			<br/>
			<hr/>
			<br/>
			<div className="row">
			<button className="btn-light" style={ {backgroundColor: "#393433", color: "white"} } onClick = {() => history.push('signin')}>Signin</button>
			</div>
			<br/>
			<div className="row">
			<button className="btn-light" style={ {backgroundColor: "#57504d"} }onClick = {() => history.push('signup')}>Create an Account</button>
			</div>
			<br/>
			</div>
		</div>
	);
}
 
export default Landing;