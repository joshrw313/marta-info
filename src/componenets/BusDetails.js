import { useParams } from "react-router";
import { useEffect } from "react";

const BusDetails = (props) => {
	const { route, bus } = useParams();

	console.log(bus);

	useEffect(() => {
		const timer = setTimeout(
			() => {
				props.getBusAll();
			},
			60000	
		);
		return () => clearTimeout(timer);
	});

	
	let thisBus = [];

	const findThisBus = () => {
		const allBusses = Object.keys(props.busData);
		thisBus = allBusses.filter(Bus => props.busData[Bus].VEHICLE === `${bus}`);
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


	if (props.busData) findThisBus();

	return (  
		<div className="container-fluid">
			<div className="container-sm" style={ {marginTop: "2rem", color: "white", backgroundColor: "#181716"} } >
			<div><h3>{props.busData[thisBus[0]].DIRECTION}</h3> <h3>{props.busData[thisBus[0]].TIMEPOINT}</h3> <h3>{findScheduleAdherence(props.busData[thisBus[0]].ADHERENCE)}</h3></div>
			</div>
		</div>
	);
}
 
export default BusDetails;