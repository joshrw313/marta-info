import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
const GoogleMapBus = (props) => {

	const positionsArray = props.positionsArray;

	const containerStyle = {
		width: '400px',
		height: '400px'
	};

	return (  
		<LoadScript googleMapsApiKey="AIzaSyBAtGYZEH7X_Ezlolefmx45V40l5eermV0">
			<GoogleMap mapContainerStyle={containerStyle} center={positionsArray[positionsArray.length()]} zoom={15}>
				{ positionsArray.map(position => {
					<Marker key={positionsArray.indexOf(position)} position={position} />	
				}) }
			</GoogleMap>
		</LoadScript>
	);

}


export default GoogleMapBus;