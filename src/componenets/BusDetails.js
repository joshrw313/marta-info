import { useParams } from "react-router";
import GoogleMapBus from "./GoogleMapBus";
import { Fetch } from "react-request";

const BusDetails = (props) => {
	const { bus } = useParams();
	const url = `api/bus/all/${bus}`;

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
			<Fetch url={url}>
				{({ fetching, failed, data }) => {
					if (fetching) {
						return <div className="container-fluid">Loading Data...</div>
					}

					if (failed) {
						return <div className="container-fluid">request failed</div>
					}

					if (data) {
						let position = null 
						position = {lat: Number(data.LATITUDE), lng: Number(data.LONGITUDE)}; 
						console.log(position);
						return (
							<div className="container-fluid">
								<div className="container-sm" style={ {marginTop: "2rem", color: "white", backgroundColor: "#181716"} } >
									<div className="row">
										<div className="col">
											<h3>{data.VEHICLE}</h3><h3>{data.DIRECTION}</h3> <h3>{data.TIMEPOINT}</h3> <h3>{findScheduleAdherence(data.ADHERENCE)}</h3>
										</div>
										<div className="col">
											{ position && <GoogleMapBus position={position} center={position} /> }
										</div>
									</div>
								</div>
							</div>
							)
						}
					}
				}
			</Fetch>
	);
}
 
export default BusDetails;