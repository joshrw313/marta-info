import { useHistory } from "react-router-dom";
import Cookies from 'js-cookie';

const Home = () => {
	const history = useHistory();
	const cookies = Cookies.get();
	console.log(cookies);

	return ( 
		<div className="container-fluid">
			<div className="container-sm" style={{marginTop: "5rem"}}>
			<div className="row">
			<button className="btn-light" style={{backgroundColor: "#393433", color: "white"}} onClick = {() => history.push('bus')}><h3>Real Time Bus Information</h3></button>
			</div>
			<br/>
			<div className="row">
			<button className="btn-light" style={{backgroundColor: "#393433", color: "white"}} onClick = {() => history.push('rail')}><h3>Real Time Rail Information</h3></button>
			</div>
			</div>
			<br/>
		</div>
	 );
}
 
export default Home;