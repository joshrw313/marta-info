import { useParams } from "react-router";
import GoogleMapBus from "./GoogleMapBus";
import axios from "axios";

import {
	useQuery
} from "react-query";

const BusDetails = (props) => {
	const { bus } = useParams();

	const fetchBusDetails = async (bus) => {
		const response = await axios.get(`/api/bus/all/`);
		return response.data
	}

	const queryOptions = { refetchInterval: 10000 }

	const {data, isLoading, error} = useQuery(bus, fetchBusDetails, queryOptions);

	const findScheduleAdherence = (adherence) => {
		if (parseInt(adherence) === 0) {
			return "On Schedule";
		} else if (adherence > 0) {
			return `${adherence}min Ahead of Schedule`;
		} else {
			return `${0 - adherence}min Behind Schedule`;
		}
	}

	if (isLoading) return <span>...Loading</span>
	if (error) return <span>error fetching data</span>
	
	let allBusses = Object.keys(data);
	const thisBus = allBusses.filter(Bus => data[Bus].VEHICLE === bus);
	console.log(thisBus);
	
	let position = null
	let positionsArray = []; 
	position = {lat: Number(data[thisBus].LATITUDE), lng: Number(data[thisBus].LONGITUDE)}; 
	console.log(position);
	if (!positionsArray.length || positionsArray[positionsArray.length] !== position) positionsArray.push(position);
	console.log(positionsArray);

	return (
	<div className="container-fluid">
		<div className="container-sm" style={ {marginTop: "2rem", color: "white", backgroundColor: "#181716"} } >
			<div className="row">
				<div className="col">
					<h3>{data[thisBus].VEHICLE}</h3><h3>{data[thisBus].DIRECTION}</h3> <h3>{data[thisBus].TIMEPOINT}</h3> <h3>{findScheduleAdherence(data[thisBus].ADHERENCE)}</h3>
				</div>
				<div className="col">
					{ positionsArray && <GoogleMapBus positionsArray={positionsArray} /> }
				</div>
			</div>
		</div>
	</div>
	)
}
 
export default BusDetails;