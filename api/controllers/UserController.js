/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    me: function (req, res) {
        return res.ok({
            user: req.user
        })
    },

    getCamera: function (req, res) {
        UserRoleCamera.find({'owner': req.user.id})
            .populate('cameras')
            .then(function (cameras) {
                var camerastab = [];
                console.log(cameras);
                for (i = 0; i < cameras.length; i++) {
                    console.log(cameras[i].cameras)
                    camerastab[i] = cameras[i].cameras;
                }
                return [camerastab]
            }).spread(function (cameras) {
                return res.ok({
                    cameras: cameras
                })
            }
        );
    },

    searchUsers: function (req, res) {
        User.find({username: {contains: req.param('usern')}})
            .exec(function (err, users) {
                if (err) {
                    return res.serverError(err);
                }
                return res.ok({
                    pseudoUsers: users
                })
            })
    }
};
