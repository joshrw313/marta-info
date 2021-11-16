import { useParams } from "react-router";
import axios from 'axios';
import { useQuery } from "react-query";

const RailStation = (props) => {
	const { station } = useParams();
	let Station = station.toUpperCase();

	Station = Station.replace('  ', ' ');
	Station = Station.replace('.','');

	switch (Station) {
		case 'BROOKHAVEN OGLETHORPE':
			Station = 'BROOKHAVEN'
			break
		case 'GWCC CNN CENTER':
			Station = 'OMNI DOME'
			break
		case 'INMAN PARK REYNOLDSTOWN':
			Station = 'INMAN PARK'
			break
		case 'LAKEWOOD FT MCPHERSON':
			Station = 'LAKEWOOD'
			break
		case 'LINDBERGH CENTER':
			Station = 'LINDBERGH'
			break
		default:
			 Station = Station.toUpperCase()
	}

	const findThisStationTrains = (data) => {
		const allTrains = Object.keys(data);
		const thisStationTrains =  allTrains.filter(train => data[train].STATION === `${Station} STATION`);
		return thisStationTrains;
	};

	const fetchRailDetails = async (station) => {
		const response = await axios.get(`/api/train/all`);
		console.log(response.data);
		return response.data
	}

	const queryOptions = { refetchInterval: 60000 }

	const {data, isLoading, error} = useQuery(station, fetchRailDetails, queryOptions);

	if (isLoading) return <span>...Loading</span>
	if (error) return <span>error fetching data</span>

	const thisStationTrains = findThisStationTrains(data);

	return (  
		<div className="container-fluid">
			<div className="container-sm" style={ {textAlign: "center", marginTop: "5rem"} }>
				<h1 style={{backgroundColor: "#57504d", color: "white"}}>{station}</h1>
				  { thisStationTrains.map(train => {
					const thisTrain = data[train];
					return (
						<div key= {train} className="container-sm" style={{backgroundColor: "#181716", color:"white", marginTop: "2rem"}}>
						<div className="row"><h3><span style={ {color: thisTrain.LINE.toLowerCase()} }>{thisTrain.DIRECTION}</span> {thisTrain.DESTINATION} {thisTrain.WAITING_TIME}</h3></div>
						</div>
					)
				}) }
			</div>
		</div>
	);
}
 
export default RailStation;