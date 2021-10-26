const express = require("express");
const cookieParser = require('cookie-parser');
const cors = require("cors");
const fetchData = require ("./requests/fetchData");
const db = require("./models");
const bcrypt = require("bcryptjs");
const sessions = require("express-session");
const verifySignUp = require("./middleware/verifySignUp");

const User = db.user;

db.sequelize.sync({force: true}).then(() => {
  console.log('Drop and Resync Db');
});

const corsOptions = {
  origin: "http://localhost:3000"
};

const app = express();

const SequelizeStore = require("connect-session-sequelize")(sessions.Store);

const oneDay = 1000 * 60 * 60 * 24;
const myStore = new SequelizeStore({
	db: db.sequelize,
});
app.use(sessions({
    secret: "234khwaelf9pf8oaiwrl3qh5rlfEKWET32Qjj",
    store: myStore,
    saveUninitialized:true,
    cookie: { maxAge: oneDay },
    resave: false 
}));

myStore.sync();

const path= require('path');

app.use(express.static(path.join(__dirname, 'build')));

app.use(cookieParser());

app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 8080;

function invalidForm (message, redirect) {
	return `
	<div>
	<h3>${message}</h3>
	<a href="/${redirect}">return to ${redirect}</a>
	</div>
	`
};

app.get('/api/bus/all', async (req,res) => {
	const options = {
		hostname: 'developer.itsmarta.com',
		path: '/BRDRestService/BRDRestService.svc/GetAllBus',
	}

	fetchData(options,res);

});

app.get('/api/bus/:route', async (req,res) => {
	const route = req.params.route
	const options = {
		hostname: 'developer.itsmarta.com',
		path: `/BRDRestService/BRDRestService.svc/GetBusByRoute/${route}`,
	}

	fetchData(options,res);

});

app.get('/api/train/all', async (req,res) => {
	const options = {
		hostname: 'developer.itsmarta.com',
		path: `/RealtimeTrain/RestServiceNextTrain/GetRealtimeArrivals`,
	}

	fetchData(options,res);

});

app.post('/api/auth/signup', verifySignUp, (req,res) => {
	User.create({
		username: req.body["username"],
		email: req.body.email,
		password: bcrypt.hashSync(req.body.password, 8)
	}).then(async (user) => {
		//res.status(200).send({"username": `${user.username}`, "message": "user registered"});
		res.status(200).redirect('/signin');
	})
	.catch(err => {
		let message = err.message;
		let redirect = "signup";
		res.status(500).send(invalidForm(message, redirect));
	});
});


app.post('/api/auth/signin', (req,res) => {
	User.findOne({
		where:{
			username: req.body.username
		}
	}).then(async (user) => {
		if (!user) {
			const message = "invalid username";
			const redirect = "signin"
			res.send(invalidForm(message,redirect));
		}

		const passwordIsValid = bcrypt.compareSync(
			req.body.password,
			user.password
		);
		if (!passwordIsValid) {
			const message = "invalid password";
			const redirect = "signin"
			res.send(invalidForm(message,redirect));
		}

		const session = req.session;
		session.userid = req.body.username;
		console.log(req.session);
		res.cookie('username', `${req.body.username}`);
		//res.send({"username": `${user.username}`, "message": 'Login Sucessful'})
		res.status(200).redirect('/home');
	})
});

app.get('/api/auth/logout', (req,res) => {
	req.session.destroy();
	res.status(200).redirect('/');
});

app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/build/index.html'));
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});