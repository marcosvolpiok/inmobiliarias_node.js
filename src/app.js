const express = require('express'),
    path = require('path'),
    morgan = require('morgan'),
    mongoose = require('mongoose'),
    app = express();

// importing routes
const indexRoutes = require('./routes/index');


// connection to db
mongoose.connect('mongodb://localhost/crud-mongo')
  .then(db => console.log('db connected'))
  .catch(err => console.log(err));

// settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: true}))


// routes
app.use('/', indexRoutes);


// starting the server
app.listen(app.get('port'), () => {
    console.log(`server on port ${app.get('port')}`);
});