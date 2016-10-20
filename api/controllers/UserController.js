/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	me: function (req, res){
		return res.ok ({
				user: req.user
		})
	},

	getCamera: function (req, res) {
			User.find({id: req.user.id})
				.populate('user_role_camera')
				.exec(function(err, users) {
					if(err){
					}

					return res.ok ({users: users})
				}
			);
		}
};
