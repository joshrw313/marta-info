import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
const GoogleMapBus = (position, center) => {

	const containerStyle = {
		width: '400px',
		height: '400px'
	};

	return (  
		<LoadScript googleMapsApiKey="AIzaSyBAtGYZEH7X_Ezlolefmx45V40l5eermV0">
			<GoogleMap mapContainerStyle={containerStyle} center={center} zoom={2}>
			<Marker position={position} />	
			</GoogleMap>
		</LoadScript>
	);

}


export default GoogleMapBus;