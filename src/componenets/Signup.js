const Signup = () => {
	return (  
		<div className="container-fluid d-flex p-2 align-items-center" >
			<div className="container-sm">
				<h1>Create an Account</h1>
				<form action="http://localhost:8080/api/auth/signup" method="post" >
				<div className="md-3">
					<label htmlFor="username" className="form-label">Username</label>
					<input type="username" className="form-control" id="username" name="username" />
				</div>
				<div className="md-3">
					<label htmlFor="email" className="form-label">Email Address</label>
					<input type="email" className="form-control" id="email" name="email" />
				</div>
				<div className="md-3">
					<label htmlFor="password" className="form-label">Password</label>
					<input type="password" className="form-control" id="password" name="password" />
				</div>
				<br />
				<button type="submit" style={{backgroundColor: "#57574d", color: "white"}} className="btn btn-light">Submit</button>
				</form>
			</div>	
		</div>
	);
}
 
export default Signup;