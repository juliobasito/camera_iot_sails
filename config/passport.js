/**
  * Passport configuration
  */

var passport = require ('passport');
var localStrategy = require ('passport-local');
var jwtStrategy = require ('passport-jwt');

var EXPIRES = 60*24;
var SECRET= "aoifjaodfghjkmpoifjofjapfjajfngzqg";
var ALGO = "HS256";


/**
  * Config for local strategy
  */

var LOCAL_STRATEGY_CONFIG = {
  usernameField : 'email',
  PasswordField : 'password',
}

/**
  * Config for jwt strategy
  */

var JWT_STRATEGY_CONFIG = {
  secretOrKey : SECRET,
  issuer : '',
  audience : ''
}

function onLocalStrategyAuth (email,password,next){
  User.findOne({email: email})
    .exect(function(error,user){
      if(error) return next (error, false, {});
      if(!user) return next (null, false,{
        code : 'E_USER_NOT_FOUND',
        message : 'email or password is wrong'
      });
      if(!SecurtyService.comparePassword(password, user)){
        return next (null, user,{
          code : 'E_USER_PASSWORD_MISMATCH',
          message : 'email or password is wrong'
        })
      }
    })
    return next (null, user, {})
}

function onJwtStrategyAuth (payload,next){
  var user = payload.user;
  return next (null, user, {})
}

passport.use(
  new localStrategy(LOCAL_STRATEGY_CONFIG, onLocalStrategyAuth())
);
passport.use(
  new jwtStrategy(JWT_STRATEGY_CONFIG, onJwtStrategyAuth())
);

module.exports.jwtSettings = {
  expires : EXPIRES,
  algo : ALGO,
  secret: SECRET
}
