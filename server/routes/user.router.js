const express = require('express');
const { rejectUnauthenticated } = require('../modules/authentication-middleware');
const encryptLib = require('../modules/encryption');
const pool = require('../modules/pool');
const userStrategy = require('../strategies/user.strategy');

const router = express.Router();

// Handles Ajax request for user information if user is authenticated
router.get('/', rejectUnauthenticated, (req, res) => {
  // Send back user object from the session (previously queried from the database)
  res.send(req.user);
});

//GET user with specific id
router.get('/single/:id', (req,res) => {
  const userID = req.params.id;
  const queryText = `SELECT * FROM "user" WHERE "user"."id" = $1;`;
  pool.query(queryText, [userID])
  .then((response) => {
    res.send(response.rows);
  })
  .catch((err) =>{
    console.log('error with getting user id',err);
    res.sendStatus(500);
  })
})

//GET all producers from user table with a role id of 2
router.get('/producer', (req,res) => {
  const queryText = `SELECT * FROM "user" WHERE "role_id" = '2';`;
  pool.query(queryText)
  .then((response) => {
    res.send([...response.rows]);
  })
  .catch((err) =>{
    console.log(err);
    res.sendStatus(500);
  })
})
//GET all graphic designers from user table with a role id of 3
router.get('/graphic', (req,res) => {
  const queryText = `SELECT * FROM "user" WHERE "role_id" = '3';`;
  pool.query(queryText)
  .then((response) => {
    res.send(response.rows);
  })
  .catch((err) =>{
    console.log(err);
    res.sendStatus(500);
  })
})
//GET all videographers from user table with a role id of 4
router.get('/video', (req,res) => {
  const queryText = `SELECT * FROM "user" WHERE "role_id" = '4';`;
  pool.query(queryText)
  .then((response) => {
    res.send(response.rows);
  })
  .catch((err) =>{
    console.log(err);
    res.sendStatus(500);
  })
})

// Handles POST request with new user data
// The only thing different from this and every other post we've seen
// is that the password gets encrypted before being inserted
router.post('/register', (req, res, next) => {  
  const username = req.body.username;
  const password = encryptLib.encryptPassword(req.body.password);
  const street_address = req.body.street_address;
  const city = req.body.city;
  const state = req.body.state;
  const zipcode = req.body.zipcode;
  const role_id = req.body.role_id;
  const lat = req.body.lat;
  const long = req.body.long;
  // expected data structure
  // {
  //   username: UNIQUE NOT NULL,
  //   password:  NOT NULL,
  //   street_address:  NOT NULL,
  //   city: NOT NULL,
  //   state: NOT NULL,
  //   zipcode:  NOT NULL,
  //   role_id: INT REFERENCES "user_roles" NOT NULL,   
  //   lat:  does not show up on registration Form. Google map api should take care of this,
  //   long: does not show up on registration Form. Google map api should take care of this,
  // }
  const queryText = 'INSERT INTO "user" (username, password, street_address, city, state, zipcode, role_id, lat, long) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING id';
  pool.query(queryText, [username, password, street_address, city, state, zipcode, role_id, lat, long])
    .then(() => res.sendStatus(201))
    .catch(() => res.sendStatus(500));
});

// Handles login form authenticate/login POST
// userStrategy.authenticate('local') is middleware that we run on this route
// this middleware will run our POST if successful
// this middleware will send a 404 if not successful
router.post('/login', userStrategy.authenticate('local'), (req, res) => {
  res.sendStatus(200);
});

// clear all server session information about this user
router.post('/logout', (req, res) => {
  // Use passport's built-in method to log out the user
  req.logout();
  res.sendStatus(200);
});

module.exports = router;