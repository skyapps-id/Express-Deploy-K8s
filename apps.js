const express    = require('express');
const bodyParser = require('body-parser');
const routesv1     = require('./routes/v1');
const config     = require('./config/config');

const app        = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api/v1', routesv1);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  res.json({
    status: 'Not Found',
    data: null
  });
  res.statusCode = 404;
});

app.listen(config.app.port);
console.log('Debug ' + config.app.debug);
console.log('Express API running on port ' + config.app.port);
// Example cek configmap and secret
console.log('Database host ' + config.db.host);
console.log('Database name ' + config.db.name);
console.log('Database username ' + config.db.username);
console.log('Database password ' + config.db.password);