const Signin = () => {
	return (  
		<div className="container-fluid d-flex p-2 align-items-center">
			<div className="container-sm">
				<form action="http://dcproject0821.xyz:8080/api/auth/signin" method="post">
				<div className="md-3">
					<label for="username" className="form-label">Username</label>
					<input type="username" class="form-control" id="username" name="username" />
				</div>
				<div className="md-3">
					<label for="password" className="form-label">Password</label>
					<input type="password" class="form-control" id="password" name="password" />
				</div>
				<br />
				<button type="submit" style={{backgroundColor: "#57574d", color: "white"}} className="btn btn-light" >Signin</button>
				</form>
			</div>	
		</div>
	);
}
 
export default Signin;