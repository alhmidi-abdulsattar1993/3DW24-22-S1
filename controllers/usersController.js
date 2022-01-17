const models = require('../models');

/* Get all users */
module.exports.getfindAll = async  function(req, res) {
	    models.User.findAll().then(function(user) {
		            res.status(200).json(user)
		        });
	    };

/* Get user by Id function */
module.exports.getUserByOne = async  function(req, res) {
	        models.User.findOne({ where: {id:req.params.id } }).then(function(user) {
			            res.status(200).json(user)
			        })
	   };

/* Find or create user function*/
module.exports.findOrCreate = async function(req, res){ 
	models.User.findOrCreate({
		    where: { firstname: req.params.firstname },
		    defaults: {
			            lastname: req.params.lastname
			        }
	});
	res.status(200).json({
        message :'User created'
		        }) // The boolean indicating whether this instance was just created
};


/* Delete User function */
module.exports.deleteUser = async function(req, res){ 
	models.User.destroy({ where: {id:req.params.id } } ).then(function(){
			res.status(200).json({message : 'User deleted', id : req.params.id})
	})

		};


/* update User function */
module.exports.updateUser = async function(req, res) {
	    models.User.update({
		   firstname: req.params.firstname,
		   lastname: req.params.lastname
		        }, { where: { id: req.params.id }  }).then(function(user) {
			     res.status(200).json({ message: "user updated" });
	        });
};


