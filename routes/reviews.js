var express = require('express');
var router = express.Router();
var lodash = require('lodash');

var reviews = [
	{
	name: 'McDo',
	placeType: 'Fastfood',
	stars: 3
	},
	{
	name: 'Quick',
	placeType: 'Fastfood',
	stars: 5
	}
];

/* GET reviews */
router.get('/', function(req, res, next) {
  //res.render('reviews', { title: 'Reviews', reviews: reviews });
  res.send(reviews);
});

/* POST reviews */
router.post('/', function(req, res, next) {
	console.log('body', req.body);
  reviews.push({
	name: req.body.name,
	placeType: req.body.placeType,
	stars: req.body.stars
	});
  res.send(reviews);
});

/* DELETE reviews */
router.delete('/', function(req, res, next) {
  res.send(reviews=[]);
});

/* GET review */
router.get('/:id', function(req, res){
  res.send(reviews[req.params.id]);
});

/* PUT review */
router.put('/:id', function(req, res){
  reviews[req.params.id].name = req.body.name;
  reviews[req.params.id].placeType = req.body.placeType;
  reviews[req.params.id].stars = req.body.stars;
  res.send(reviews[req.params.id]);
});

/* DELETE review */
router.delete('/:id', function(req, res) {
  reviews = lodash.pullAt(reviews, [req.params.id]-1);
  res.send(reviews);
});

module.exports = router;
