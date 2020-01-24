
const express = require('express');
require('dotenv').config();

const app = express();
const bodyParser = require('body-parser');
const sessionMiddleware = require('./modules/session-middleware');

const passport = require('./strategies/user.strategy');

//AWS
const UploaderS3Router = require('react-dropzone-s3-uploader/s3router');

// Route includes
const userRouter = require('./routes/user.router')
const profileRouter = require('./routes/profile.router');
const messagesRouter = require('./routes/messages.router');

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Passport Session Configuration //
app.use(sessionMiddleware);

// start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

/* Routes */
app.use('/api/user', userRouter);
app.use('/api/profiles', profileRouter);
app.use('/api/messages', messagesRouter)


// AWS
app.use('/s3', UploaderS3Router({
  bucket: 'trackmeet-solo',                           
  region: 'us-east-2',                           
  headers: {'Access-Control-Allow-Origin': '*'},  
  ACL: 'public-read',                                 
}));

// Serve static files
app.use(express.static('build'));

// App Set //
const PORT = process.env.PORT || 5000;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});