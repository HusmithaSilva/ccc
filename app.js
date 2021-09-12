const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bodyparser = require('body-parser');
const cors = require('cors');
let productController = require('./controllers/productController');
let userController = require('./controllers/userController');

require('dotenv/config');


//connect to DB
mongoose.connect(process.env.DB_CONNECTION, 
    { useNewUrlParser: true,   useUnifiedTopology: true } , () => 
   console.log('connect to dbs')
   );


//middlewears   
app.use(cors());
app.use(bodyparser.json());
app.use('/product', productController);
app.use('/user', userController);

   //listen port
app.listen(3002);