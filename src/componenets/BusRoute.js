import { useParams } from "react-router";
import { useEffect } from "react";
import { Link } from 'react-router-dom';
import axios from "axios";

import {
	useQuery
} from "react-query";

const BusRoute = (props) => {
	const { route } = useParams();


	const fetchBusDetails = async (route) => {
		const response = await axios.get(`/api/bus/all`);
		console.log(response.data);
		return response.data
	}

	const queryOptions = { refetchInterval: 10000 }

	const {data, isLoading, error} = useQuery(route, fetchBusDetails, queryOptions);

	const findScheduleAdherence = (adherence) => {
		if (parseInt(adherence) === 0) {
			return "On Schedule";
		} else if (adherence > 0) {
			return `${adherence}min Ahead of Schedule`;
		} else {
			return `${0 - adherence}min Behind Schedule`;
		}
	}

	const findThisRouteBusses = (data) => {
		const allBusses = Object.keys(data);
		const thisRouteBusses =  allBusses.filter(bus => data[bus].ROUTE === `${route}`);
		return thisRouteBusses;
	};

	if (isLoading) return <span>...Loading</span>
	if (error) return <span>error fetching data</span>

	const thisRouteBusses = findThisRouteBusses(data);

	return (  
		<div className="container-fluid" style={{textAlign: "center", marginTop: "5rem"}}>
			<div className="container-sm">
				<h1 style={{color: "white", backgroundColor: "#57504d"}}>Route {route} </h1>
				  { thisRouteBusses.map(bus => {
					const thisBus = data[bus];
					const thisBusDetails = `/bus/${route}/${thisBus.VEHICLE}`;	

					return (
						<div key={bus} className="container-sm" style={ {marginTop: "2rem", color: "white", backgroundColor: "#181716"} } >
						<div><h3><Link to={thisBusDetails}>{thisBus.VEHICLE}</Link></h3><h3>{thisBus.DIRECTION}</h3> <h3>{thisBus.TIMEPOINT}</h3> <h3>{findScheduleAdherence(thisBus.ADHERENCE)}</h3></div>
						</div>
						
					)
				}) }
			</div>
		</div>
	);
}
 
export default BusRoute;