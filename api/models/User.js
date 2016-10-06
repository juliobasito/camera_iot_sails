/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  shema : true, /* Remove if mongoBD is used */
  attributes: {
    username: {},
    password: {},
    email: {},
    firstName: {},
    lastName: {},

  toJson: function (){
    var obj = this.toObject();
    delete obj.password;
    return obj;
    }
  },
  /*Value current object*/

  beforeUpdate: function (value, next){
    /*todo hash password if necessary*/
    return next();
  },
  beforeCreate: function (value, next){
    /*todo hash password*/
    SecurityService.hashPassword(value);
    return next();
  }
};
