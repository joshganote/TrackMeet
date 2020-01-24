const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// This will GET all data for user 
router.get('/:id', (req, res) => {
  const profileID = req.params.id;
  const queryText = `SELECT * FROM "user"
                      JOIN "user_roles" ON "user"."role_id" = "user_roles"."id"
                      JOIN "portfolio" ON "user"."id" = "portfolio"."user_id"
                      JOIN "profile" ON "user"."id" = "profile"."user_id"
                      JOIN "project" ON "user"."id" = "project"."artist_id"
                      WHERE "user"."id" = $1;`;
  pool.query(queryText, [profileID])
    .then((response) => {
      res.send(response.rows[0]);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
    })
})

// Allows user to add a profile image
router.put('/profile-pic', (req, res) => {
  const queryString = `UPDATE "user" SET "profile_img" = $1 WHERE "id" = $2;`;

  pool.query(queryString, [req.body.profile_img, req.user.id])
    .then((response) => {
      console.log(response)
      res.sendStatus(200)
    })
    .catch((err) => {
      console.log('HERE IS THE ERROR: ', err)
      res.sendStatus(500);
    })
});
// Allows user to add a bio
router.put('/bio', (req, res) => {
    const queryString = `UPDATE "user" SET "bio" = $1 WHERE "id" = $2;`;

    pool.query(queryString, [req.body.bio, req.user.id])
      .then((respone) => {
        res.sendStatus(200)
      })
      .catch((err) => {
        console.log('HERE IS THE ERROR: ', err)
        res.sendStatus(500);
      })
});

// router.post('/profile-pic', (req, res) => {
//   const newProfileImage = req.body;
//   console.log(req.body);
//   const queryString = `INSERT INTO "user" ( profile_img ) VALUES ( $1 )`;
//   pool.query(queryString, [newProfileImage.profile_img, req.user.id])
//     .then((result) => {
//       console.log('added profile pic', newProfileImage);
//       res.sendStatus(201);
//     })
//     .catch((error) => {
//       console.log('error posting profile pic', error);
//       res.sendStatus(500);
//     }) 
// });

// this will UPDATE user samples of work(mp3, image, mp4) media files stored with Amazon S3
router.put('/portfolio/:id', (req, res) => {
  const newProfileData = req.body;
  const profileID = req.params.id;
  const queryText = `UPDATE "portfolio" SET "media_path" = $1 WHERE "user_id" = $2;`;

  pool.query(queryText, [newProfileData.media_path, profileID])
    .then((response) => {
      res.sendStatus(200);
    })
    .catch((err) => {
      console.log('Error with PUT (portfolio: ', err);
      res.sendStatus(500);
    });
});

//------Routes for Profile Table--------//
// Create data entry for profile
router.post('/create-profile/:id', (req, res) => {
  const createBio = req.body;
  console.log(createBio);
  const queryText = `INSERT INTO "profile" ("user_id","bio") VALUES ('${createBio.id}','') RETURNING "id";`;
  const queryString = `UPDATE "profile" SET "bio" ="hey" WHERE "id" = $1;`;
  pool.query(queryText)
    .then((response) => {
      console.log(response.rows)
      pool.query(queryString, [response.rows[0].id])
        .then((response) => {
          res.sendStatus(200)
        })
        .catch((err) => {
          res.sendStatus(500)
        })
      console.log('bio posted', response)
      res.sendStatus(201);
    })
    .catch((err) => {
      console.log('err posting bio', err);
      res.sendStatus(500);
    })
});
// this will UPDATE user bio and profile image
router.put('/profile/:id', (req, res) => {
  const newProfileData = req.body;
  const profileID = req.params.id;
  const queryText = `UPDATE "profile" SET "bio" = $1
                      WHERE "user_id" = $2;`;
  console.log(req.body);
  pool.query(queryText, [newProfileData.bio, profileID])
    .then((response) => {
      res.sendStatus(200);
    })
    .catch((err) => {
      console.log('Error with PUT (portfolio: ', err);
      res.sendStatus(500);
    });
});
//------ End Routes for Profile Table--------//

//this will UPDATE the list of professionals the user is working with
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

    .then((response) => {
      res.sendStatus(200);
    })
    .catch((err) => {
      console.log('Error with PUT (portfolio: ', err);
      res.sendStatus(500);
    });
});

router.get('/producers', (req,res) => {
  const queryString = `SELECT * FROM 'user' WHERE 'role_id'='2';`

  pool.query(queryString)
    .then((response) => {
      res.send(response.rows);
    })
    .catch((err) => {
      res.sendStatus(500);
    })
})

module.exports = router;


/*



*/