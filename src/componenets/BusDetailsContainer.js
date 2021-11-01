import BusDetails from './BusDetails';
import { connect } from 'react-redux';
import { getBusAll } from '../actions';

function mapStateToProps(state) {
	return {
		busData: state.busAll.data,
	}
};

function mapDispatchToProps(dispatch) {
	return {
		getBusAll: () => dispatch(getBusAll()),	
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(BusDetails)