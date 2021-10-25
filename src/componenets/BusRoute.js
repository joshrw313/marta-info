import { useParams } from "react-router";
import { useEffect } from "react";

const BusRoute = (props) => {
	const { route } = useParams();
	let thisRouteBusses = [];
	useEffect(() => {
		const timer = setTimeout(
			() => {
				props.getBusAll();
			},
			60000	
		);
		return () => clearTimeout(timer);
	});

	const findThisRouteBusses = () => {
		const allBusses = Object.keys(props.busData);
		thisRouteBusses =  allBusses.filter(bus => props.busData[bus].ROUTE === `${route}`);
	};

	const findScheduleAdherence = (adherence) => {
		if (parseInt(adherence) === 0) {
			return "On Schedule";
		} else if (adherence > 0) {
			return `${adherence}min Ahead of Schedule`;
		} else {
			return `${0 - adherence}min Behind Schedule`;
		}
	}

	if (props.busData) findThisRouteBusses();

	return (  
		<div className="container-fluid" style={{textAlign: "center", marginTop: "5rem"}}>
			<div className="container-sm">
				<h1 style={{color: "white", backgroundColor: "#57504d"}}>Route {route} </h1>
				  { thisRouteBusses.map(bus => {
					const thisBus = props.busData[bus];
					
					return (
						<div key={bus} className="container-sm" style={ {marginTop: "2rem", color: "white", backgroundColor: "#181716"} } >
						<div><h3>{thisBus.DIRECTION}</h3> <h3>{thisBus.TIMEPOINT}</h3> <h3>{findScheduleAdherence(thisBus.ADHERENCE)}</h3></div>
						</div>
						
					)
				}) }
			</div>
		</div>
	);
}
 
export default BusRoute;