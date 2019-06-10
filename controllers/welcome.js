class Welcome {
    constructor(){
        console.log('test')
    }
    index(req,res,next){
        res.send('welcome controller');
    }

    form(req,res,next){
        res.send('form panel')
    }
}

module.exports = Welcome;

