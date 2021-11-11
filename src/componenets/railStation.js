import { useParams } from "react-router";
import { useEffect } from "react";
import { store } from "../store";
import { getRail } from "../actions";

const RailStation = (props) => {
	const { station } = useParams();
	let Station = station.toUpperCase();

	let state = store.getState();
	let railData = state.rail.data;


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


	let thisStationTrains = [];

	const findThisStationTrains = () => {
		const allTrains = Object.keys(railData);
		//allTrains.forEach(train => console.log(props.railData[train].STATION));
		thisStationTrains =  allTrains.filter(train => railData[train].STATION === `${Station} STATION`);
	};

	useEffect(() => {
		const timer = setTimeout(
			async () => {
				store.dispatch(getRail());
				await setTimeout(() => state = store.getState(), 5000);
				railData = state.rail.data;
				if (railData) findThisStationTrains();
			},
			60000	
		);
		return () => clearTimeout(timer);
	});


	if (railData) findThisStationTrains();


	return (  
		<div className="container-fluid">
			<div className="container-sm" style={ {textAlign: "center", marginTop: "5rem"} }>
				<h1 style={{backgroundColor: "#57504d", color: "white"}}>{station}</h1>
				  { thisStationTrains.map(train => {
					const thisTrain = railData[train];
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