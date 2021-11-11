import { useParams } from "react-router";
import { useEffect, } from "react";
import GoogleMapBus from "./GoogleMapBus";
import { store } from "../store";
import { getBusAll } from "../actions";

const BusDetails = (props) => {
	const { bus } = useParams();
	let state = store.getState();
	let busData = state.busAll.data;
	let thisBus = [];

	const findThisBus = () => {
		const allBusses = Object.keys(busData);
		return allBusses.filter(Bus => busData[Bus].VEHICLE === `${bus}`)
	};

	if (busData) {
	thisBus = findThisBus();
	};

	useEffect(() => {
		const timer = setTimeout(
			() => {
				store.dispatch(getBusAll());
				state = store.getState();
				busData = state.busAll.data;
				setTimeout(() => thisBus = findThisBus(), 5000);
			},
			30000	
		);
		return () => clearTimeout(timer);
	});

	const findScheduleAdherence = (adherence) => {
		if (parseInt(adherence) === 0) {
			return "On Schedule";
		} else if (adherence > 0) {
			return `${adherence}min Ahead of Schedule`;
		} else {
			return `${0 - adherence}min Behind Schedule`;
		}
	}


		return (
			thisBus.map(Bus => {
				let position = null 
				position = {lat: Number(busData[Bus].LATITUDE), lng: Number(busData[Bus].LONGITUDE)}; 
				console.log(position);
				return (
					<div key={1} className="container-fluid">
						<div className="container-sm" style={ {marginTop: "2rem", color: "white", backgroundColor: "#181716"} } >
							<div className="row">
								<div className="col">
									<h3>{busData[Bus].VEHICLE}</h3><h3>{busData[Bus].DIRECTION}</h3> <h3>{busData[Bus].TIMEPOINT}</h3> <h3>{findScheduleAdherence(busData[Bus].ADHERENCE)}</h3>
								</div>
								<div className="col">
									{ position && <GoogleMapBus position={position} center={position} /> }
								</div>
							</div>
						</div>
					</div>
				)
			})
	);
}
 
export default BusDetails;