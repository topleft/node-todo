var express = require('express');
var router = express.Router();
var todos = [];

router.get('/', function(req, res, next) {
  res.render('index', { title: 'ToDo List' });
});

router.post("/submit", function(req, res){
  var itemTitle = req.body.itemTitle;
  var itemDetails = req.body.itemDetails;
  var itemLocation = req.body.itemLocation;
  todos.push({title: itemTitle, details: itemDetails, location: itemLocation});
  res.render('list', {title: 'ToDo List', todos: todos})
});




module.exports = router;
