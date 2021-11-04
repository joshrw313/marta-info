import BusInfo from "./BusInfoContainer";

const BusPage = () => {
	return ( 
		<div className="container-fluid">
			<div className="container-sm" style={ {marginTop: "2rem", color: "white", backgroundColor: "#181716"} } >
				<div className="row">
					<div className="col">
						<BusInfo />
					</div>
					<div className="col">
					</div>
				</div>
			</div>
		</div>
	 );
}
 
export default BusPage;