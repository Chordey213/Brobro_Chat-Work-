const express = require('express');
const app = express();
const http = require('http').Server(app);

app.set('view engine', 'pug');
app.use(express.static(__dirname));

app.get('/', function(req, res){
    res.render('index')
});

const server = app.listen(3000, ()=>{
    console.log('Server is running on port', server.address().port)
});