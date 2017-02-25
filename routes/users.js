var express = require('express');
var router  = express.Router();

Users = require('../models/user');

router.get('/', function(req, res)
{
	getAllUsers(err, Users)
	{
		if(err){
			res.send(err);
		}
		res.json(Users);
	}
	
});

router.post('/',function(req,res)
{
	var user = req.body;
	Users.addUser(user, function(err, user)
	{
		if(err)
		{
			res.send(err);
		}
		res.json(user);
	});
});

module.exports = router;