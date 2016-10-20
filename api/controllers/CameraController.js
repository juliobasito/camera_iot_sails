/**
 * CameraController
 *
 * @description :: Server-side logic for managing cameras
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    add : function (req,res) {
        Camera
            .create(_.omit(req.allParams(),'id'))
            .then(function(camera){
                return {
                    camera: camera
                }

            })
            .then(res.created)
            .catch(res.serverError)
    }
};

