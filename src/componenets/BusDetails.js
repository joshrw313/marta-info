import { useParams } from "react-router";
import { useEffect } from "react";

const BusDetails = (props) => {
	const { bus } = useParams();

	useEffect(() => {
		const timer = setTimeout(
			() => {
				props.getBusAll();
			},
			60000	
		);
		return () => clearTimeout(timer);
	});


	const findThisBus = () => {
		const allBusses = Object.keys(props.busData);
		return allBusses.filter(bus => props.busData[bus].VEHICLE === `${bus}`);
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

	let thisBus = {};

	if (props.busData) thisBus = findThisBus();

	return (  
		<div className="container-fluid">
			<div key={bus} className="container-sm" style={ {marginTop: "2rem", color: "white", backgroundColor: "#181716"} } >
			<div><h3>{thisBus.DIRECTION}</h3> <h3>{thisBus.TIMEPOINT}</h3> <h3>{findScheduleAdherence(thisBus.ADHERENCE)}</h3></div>
			</div>
		</div>
	);
}
 
export default BusDetails;