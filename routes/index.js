const express = require('express');
const router  = express.Router();

// Load the Place DB document mongoose model
const Place = require('../models/Place')
// GET home page 
router.get('/',
  (_, res, next) =>
{
  Place.find({}, 
    (error, queryResults) =>
    {
      if(error) next(error)
      else res.render('index', {places: queryResults, gMapAPIKey: process.env.GMAPS_API_KEY})
    }
    )
});

module.exports = router
