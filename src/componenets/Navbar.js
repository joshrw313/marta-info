import {Link} from 'react-router-dom';

const Navbar = () => {
	return (  
		<nav className="navbar navbar-expand-lg" style={{color: "white", backgroundColor: "#181716"}}>
        <div className="divider-horizontal"></div>
      <Link className="navbar-brand" to="/home">Marta Real Time</Link>
        <Link className="nav-link" to="/rail">Rail</Link>
        <Link className="nav-link" to="/bus">Bus</Link>
        <div className="divider-horizontal"></div>
        <div className="divider-horizontal"></div>
        <div className="divider-horizontal"></div>
        <div className="divider-horizontal"></div>
        <div className="divider-horizontal"></div>
        <div className="divider-horizontal"></div>
        <div className="divider-horizontal"></div>
        <div className="divider-horizontal"></div>
        <div className="divider-horizontal"></div>
        <form action="http://localhost:8080/api/auth/logout">
        <button className="btn-light" style={{backgroundColor: "#393433", color: "white"}} type="submit">logout</button>
        </form>
        <div className="divider-horizontal"></div>
    </nav>
	);
}
 
export default Navbar;