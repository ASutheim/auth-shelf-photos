const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * Get all of the items on the shelf
 */
router.get('/', (req, res) => {
  console.log("Inside router side of get request");

  if (req.isAuthenticated()) {
  const queryText = `SELECT * FROM "item"`;
  pool
  .query(queryText)
  .then((result) => {
    res.send(result.rows);
    console.log("Sending items back from the server:", result.rows);
  }).catch((error) => {
    console.log("Error in fetching data from database", error)
    res.sendStatus(500);
  });
}
else {
  res.sendStatus(403);
}
});


/**
 * Add an item for the logged in user to the shelf
 */
router.post('/', (req, res) => {

    if (req.isAuthenticated()){ 

        const queryText = `INSERT INTO "item" ("image_url" , "description" , "user_id") VALUES ($1, $2, $3)`
        console.log(req.body);
        console.log(req.user);
        pool.query(queryText, [req.body.image_url , req.body.description , req.user.id ])
            .then(result => {
                res.sendStatus(201)
            }).catch(err => {
                console.log('Error in POST /shelf.router' , err)
                res.sendStatus(500)
            })
    } else {
        res.sendStatus(403);
    }
});

/**
 * Delete an item if it's something the logged in user added
 */
router.delete('/:id', (req, res) => {
  if (req.isAuthenticated()){ 
    console.log('REQ.USER.ID is:', req.user.id);
    console.log('REQ.BODY is:', req.body.user_id);
    console.log('REQ.PARAMS.ID is:', req.params.id);
    if (req.user.id === req.body.user_id) {
      const queryText = "DELETE FROM item WHERE id=$1;";
      pool.query(queryText, [req.params.id])
      .then(result => {
        res.sendStatus(201);
      }).catch(error => {
        res.sendStatus(500);
      })
    }
    else{
      res.sendStatus(403);
    }
  }
  else {
    res.sendStatus(403);
  }
  // endpoint functionality
});

/**
 * Update an item if it's something the logged in user added
 */
router.put('/:id', (req, res) => {
  // endpoint functionality
});

/**
 * Return all users along with the total number of items
 * they have added to the shelf
 */
router.get('/count', (req, res) => {
  // endpoint functionality
});

/**
 * Return a specific item by id
 */
router.get('/:id', (req, res) => {
  // endpoint functionality
});

module.exports = router;
