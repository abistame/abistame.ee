require('dotenv').config()
const express = require('express');
const path = require('path');
const cluster = require('cluster');
const numCPUs = require('os').cpus().length;
const bodyParser = require('body-parser');
const getConnection = require('./db')
const isDev = process.env.NODE_ENV !== 'production';
const PORT = process.env.PORT || 5000;
const sendAuthMessage = require('./lib/sms');
const jwt = require('express-jwt');
const jwks = require('jwks-rsa');

const jwtCheck = jwt({
	secret: jwks.expressJwtSecret({
		cache: true,
		rateLimit: true,
		jwksRequestsPerMinute: 5,
		jwksUri: 'https://communityhelp1.eu.auth0.com/.well-known/jwks.json'
	}),
	audience: 'http://abistame.ee/',
	issuer: 'https://communityhelp1.eu.auth0.com/',
	algorithms: ['RS256']
});

let db;
// Multi-process to utilize all CPU cores.
if (!isDev && cluster.isMaster) {
	console.error(`Node cluster master ${process.pid} is running`);

	// Fork workers.
	for (let i = 0; i < numCPUs; i++) {
		cluster.fork();
	}

	cluster.on('exit', (worker, code, signal) => {
		console.error(`Node cluster worker ${worker.process.pid} exited: code ${code}, signal ${signal}`);
	});

} else {
	const app = express();
	app.use(bodyParser.json())
	app.use(
		bodyParser.urlencoded({
			extended: true,
		}))
	// Priority serve any static files.
	app.use(express.static(path.resolve(__dirname, '../react-ui/out')));

	app.post('/api/newuserpost', async function (req, res) {
		const {
			phoneNumber,
			need,
			location,
			logcation_tag
		} = req.body;

		try {
			const challenge=Math.random().toString(6);
			const request = await db.query(
				'INSERT INTO posts(phonenumber, need, location, location_tag, confirm_code, created) VALUES ($1, $2, $3, $4, $5, now())',
				[phoneNumber, need, need, location, logcation_tag, challenge])

			const authMessage = await sendAuthMessage(phoneNumber, challenge);

			if (request && authMessage) {
				res.status(201).json({ success: true, requestCreatedId: request.insertId });
			} else {
				res.status(400).json({ success: false })
			}

		} catch (error) {
			console.log(error)
			res.status(500).json({ success: false })
		}
	});
	
	app.get('/heartbeat', (err, res) => {
		console.info('Hearbeat request!');
		res.status(200);
		res.json({ working: true });
		res.end();
	});
	
	app.post('/api/neworgpost', async function (req, res) {
		const {
			enterprise_id,
			need,
			location,
			radius
		} = req.body;

		try {
			const challenge=Math.random().toString(6);
			const request = await db.query(
				'INSERT INTO posts(enterprise_key, need, location, radius, created) VALUES ($1, $2, $3, $4, now())',
				[enterprise_id, need, location, location_tag, radius])

			const authMessage = await sendAuthMessage(phoneNumber, challenge);

			if (request && authMessage) {
				res.status(201).json({ success: true, requestCreatedId: request.insertId });
			} else {
				res.status(400).json({ success: false })
			}

		} catch (error) {
			console.log(error)
			res.status(500).json({ success: false })
		}
	});

	app.post('/api/checkhelper', async function (req, res) {
		const {
			phoneNumber
		} = req.body;

		try {
			
			const challenge=Math.random().toString(6);
			//Here it should check from DB for users existence, and if new return code challenge or registration path. If challenge. Send SMS.

		} catch (error) {
			console.log(error)
			res.status(500).json({ success: false })
		}
	});

	app.post('/api/registerhelper', async function (req, res) {
		const {
			phoneNumber,
			name,
			location,
			radius
		} = req.body;

		try {
			
		} catch (error) {
			console.log(error)
			res.status(500).json({ success: false })
		}
	});
		
	app.get('/api/getposts', async function (req, res) {
		const {
			helperId
		} = req.body;

		try {

		} catch (error) {
			console.log(error)
			res.status(500).json({ success: false })
		}
	});

    app.get('/api/getorgposts', async function (req, res) {
		const {
			EnterpriseId
		} = req.body;

		try {

		} catch (error) {
			console.log(error)
			res.status(500).json({ success: false })
		}
	});
	
	app.get('/api/getorgusers', async function (req, res) {
		const {
			EnterpriseId
		} = req.body;

		try {

		} catch (error) {
			console.log(error)
			res.status(500).json({ success: false })
		}
	});
		
	// All remaining requests return the React app, so it can handle routing.
	app.get('*', function (request, response) {
		response.sendFile(path.resolve(__dirname, '../react-ui/out', 'index.html'));
	});

        //code
	const listen = app.listen(PORT, async function () {
			db = await getConnection();
			console.error(`Node ${isDev ? 'dev server' : 'cluster worker ' + process.pid}: listening on port ${PORT}`);
		});
	
	module.exports = listen
}
