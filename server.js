var express = require('express')
var mongoose = require('mongoose');
var cors = require('cors');
var app = express();
var bodyParser = require('body-parser')
var port = process.env.PORT || 8080

//mconnect to database
mongoose.connect('mongodb://test:test12345@ds117821.mlab.com:17821/story', { useNewUrlParser: true })

var nameSchema = new mongoose.Schema({
  usery: String,
  pass: String
});

var Users = mongoose.model("Users", nameSchema);

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/client'));


app.post('/someUrl',(req,res)=>{
   console.log('body info',req.body);
   new Users(req.body).save(function(err,data){
     if (err) throw err;
     res.json(data)
   })
})

app.listen(port,function(){
  console.log('listening')
})