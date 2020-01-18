const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// This will GET all data for user 
router.get('/:id', (req, res) => {
    const queryText = `SELECT * FROM "user"
                      JOIN "user_roles" ON "user"."role_id" = "user_roles"."id"
                      JOIN "portfolio" ON "user"."id" = "portfolio"."user_id"
                      JOIN "profile" ON "user"."id" = "profile"."user_id"
                      JOIN "project" ON "user"."id" = "project"."artist_id"
                      WHERE "user"."id" = $1;`;
    pool.query(queryText, [req.params.id])
        .then((response) =>{
          res.send(response.rows[0]);
        })
        .catch((err) => {
          console.log(err);
          res.sendStatus(500);
        })
  })

// this will UPDATE user samples of work(mp3, image, mp4) media files stored with Amazon S3
router.put('/portfolio/:id', (req, res) => {
  const newProfileData = req.body;
  const profileID = req.params.id;
  const queryText = `UPDATE "portfolio" SET "media_path" = $1 WHERE "user_id" = $2;`;

  pool.query(queryText, [newProfileData.media_path, profileID])
    .then((response) =>{
      res.sendStatus(200);
    })
    .catch((err) =>{
      console.log('Error with PUT (portfolio: ', err);
      res.sendStatus(500);
    });
});

// this will UPDATE user bio and profile image
router.put('/profile/:id', (req, res) => {
  const newProfileData = req.body;
  const profileID = req.params.id;
  const queryText = `UPDATE "profile" SET "bio" = $1, "profile_img" = $2
                      WHERE "user_id" = $3;`;

  pool.query(queryText, [newProfileData.bio, newProfileData.profile_img, profileID])
    .then((response) =>{
      res.sendStatus(200);
    })
    .catch((err) =>{
      console.log('Error with PUT (portfolio: ', err);
      res.sendStatus(500);
    });
});

// this will UPDATE the list of professionals the user is working with
router.put('/project/:id', (req, res) => {
  const newProfileData = req.body;
  const profileID = req.params.id;
  const queryText = `UPDATE "project" SET "artist_id" = $1, "producer_id" = $2, 
                      "graphic_id" = $3, "videographer_id" = $4
                      WHERE "id" = $5;`;

  pool.query(queryText, [
    newProfileData.artist_id, 
    newProfileData.producer_id, 
    newProfileData.graphic_id, 
    newProfileData.videographer_id, 
    profileID])

    .then((response) =>{
      res.sendStatus(200);
    })
    .catch((err) =>{
      console.log('Error with PUT (portfolio: ', err);
      res.sendStatus(500);
    });
});
router.post('/', (req, res) => {

});

module.exports = router;