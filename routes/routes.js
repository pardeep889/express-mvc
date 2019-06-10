
module.exports = {
    routes: function(app,start){
        app.get('/',start.index);
        app.get('/form',start.form);
    }
}