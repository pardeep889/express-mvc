const Welcome = require('../controllers/welcome');
const welcome = new Welcome();


exports.index = function(req, res, next) {
    welcome.index(req,res,next);
};

exports.form = function(req,res,next){
    welcome.form(req,res,next)
} 
