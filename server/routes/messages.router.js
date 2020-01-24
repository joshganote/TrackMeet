const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.post('/message/:id', (req, res) => {
    const newMessage = req.body;
    const queryText = `INSERT INTO "communication" ( from_user_id, to_user_id, message, contact_message )
    VALUES ( $1, $2, $3, $4 )`;
  
    pool.query(queryText, [newMessage.from_user_id, newMessage.to_user_id, newMessage.message, newMessage.contact_message])
    .then((response) => {
      console.log('added message', response)
      res.sendStatus(201);
    })
    .catch((err) => {
      console.log('error posting message', err);
      res.sendStatus(500);
    })
  });
  
  router.get('/sent-messages/:id', (req,res) => {
    const messageToSend = req.params.id;
    const queryText = `SELECT * FROM "user"
                        JOIN "communication" ON "user"."id" = "communication"."from_user_id"
                        WHERE "user"."id"= $1`;
    pool.query(queryText, [messageToSend])
    .then((response) => {
      res.send(response.rows);
    })
    .catch((err) =>{
      console.log('error with getting user id',err);
      res.sendStatus(500);
    })
  })
  router.get('/incoming-messages/:id', (req,res) => {
    const messageToGet = req.params.id;
    const queryText = `SELECT * FROM "user"
                        JOIN "communication" ON "user"."id" = "communication"."to_user_id"
                        WHERE "user"."id"= $1`;
    pool.query(queryText, [messageToGet])
    .then((response) => {
      res.send(response.rows);
    })
    .catch((err) =>{
      console.log('error with getting user id',err);
      res.sendStatus(500);
    })
  })
module.exports = router;