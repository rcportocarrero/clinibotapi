const express = require('express');
const morgan = require('morgan');
const app = express();
const cors= require('cors');


// settings
app.set('port', process.env.PORT || 4000);

// middlewares
app.use(morgan());
app.use(cors());
app.use(express.urlencoded({extended: false}));
app.use(express.json());

// routes
app.use('/api/users', require('./routes/users'));
app.use('/api/pacient', require('./routes/pacient'));
app.use('/api/plans', require('./routes/plans'));
app.use('/api/payments', require('./routes/payments'));
app.use('/api/specialist', require('./routes/specialist'));

//app.use('/api/hotels', require('./routes/hotels'));

// starting the server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});