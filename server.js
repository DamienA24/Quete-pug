const express = require('express');
const app = express();
const coucouRoutes = require('./routes/coucou');

app.use('/', coucouRoutes);

// view engine setup
app.set('view engine', 'pug');


let server = app.listen(3000, function() {
  console.log('Server started on port 3000');
});