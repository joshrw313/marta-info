import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
const GoogleMapBus = (props) => {

	const containerStyle = {
		width: '400px',
		height: '400px'
	};

	return (  
		<LoadScript googleMapsApiKey="AIzaSyBAtGYZEH7X_Ezlolefmx45V40l5eermV0">
			<GoogleMap mapContainerStyle={containerStyle} center={props.center} zoom={15}>
			<Marker position={props.position} />	
			</GoogleMap>
		</LoadScript>
	);

}


export default GoogleMapBus;