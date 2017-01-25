var express = require('express');
var app = express();
app.use('/static', express.static('webapp'));
app.get('/', function (req, res) {
  res.send('Hai hru!')
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})