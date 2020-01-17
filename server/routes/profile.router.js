const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// Im expecting to use this route so users can update their profile while in 
// their protect route. I then want to use this information so other users 
// can see all of this info, but without the input field of upload buttons 
// for media files to setup their profile.
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

router.post('/', (req, res) => {

});

module.exports = router;