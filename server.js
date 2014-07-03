var express =       require('express')
    , http =        require('http');


var app = express();


app.use(express.json());
app.engine('html', require('ejs').renderFile);
app.use(express.urlencoded());
app.use(express.static(__dirname+'/site'));
//app.use(express.multipart());
app.use(express.methodOverride());
app.use(app.router);
app.use(function(err, req, res, next){
  //return error default
  console.log("Default Error:" + err);
  return res.send(500);
});

 app.get('/', function(req, res){
     app.render('index.html');
 });


app.set('port', process.env.PORT || process.argv[2] || 8000);
http.createServer(app).listen(app.get('port'), function(){
    console.log("Express server listening on port " + app.get('port'));
   // console.log(app.routes);
});


exports.app = app;