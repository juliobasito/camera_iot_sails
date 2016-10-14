/**
 * Created by jules-basse on 13/10/2016.
 */

module.exports = {
    getClient : function (req,res) {
        Client.findOne({
            email : 'toto@gmail.com'
        }).exec(function (err,user) {
            console.log(user.email)
        })
    },
    getClientWithOrder : function (req,res)
    {
        Client.findOne({
            email : 'toto@gmail.com'
        }).populate('orders')
            .exec(function (err,user) {
            console.log(user.email)
        })
    }
}
