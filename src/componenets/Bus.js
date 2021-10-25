import { useHistory } from "react-router-dom";
import { busRoutes } from "../busses";

const Bus = () => {
	const history = useHistory();
	return (
	busRoutes.map(busRoute => {
		const words = busRoute.split(' ');
		const routeId = words[0];
		return (  
			<div key={busRoute} className="container-fluid">
				<div className="container-sm">
					<div className="row" style={ {paddingTop: "1rem"} }>
						<button className="btn-light" style={{backgroundColor: "#393433", color: "white"}}onClick={() => history.push(`/bus/${routeId}`)}>{busRoute}</button>	
					</div>
				</div>
			</div>
		);
		}
	)
	)
}
 
export default Bus;