import RailStation from './railStation';
import { connect } from 'react-redux';
import { getRail } from '../actions';

function mapStateToProps(state) {
	return {
		railData: state.rail.data,
	}
};

function mapDispatchToProps(dispatch) {
	return {
		getRail: () => dispatch(getRail()),	
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(RailStation);