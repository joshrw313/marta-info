import { useHistory } from 'react-router-dom';
import { stations } from '../stations';

const Train = () => {
	const history = useHistory();
	return (
	stations.map(station => {
		let Station = station.replace('/','');
		if (Station === 'GWCCCNN Center') Station = 'GWCC CNN Center'

		return (  
			<div key={station} className="container-fluid">
				<div className="container-sm">
					<div className="row" style={ {paddingTop: "1rem"} }>
						<button className="btn-light" style={{backgroundColor: "#393433", color: "white"}}onClick={() => history.push(`/rail/${Station}`)}>{station}</button>	
					</div>
				</div>
			</div>
		);
		}
	)
	)
}
 
export default Train;