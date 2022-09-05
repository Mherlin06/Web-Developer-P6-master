const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config({ path:'./config/.env'});


const app = express();

// Connection to DataBase
mongoose.connect('mongodb+srv://' + process.env.DB_USER_PASS + '@projet6.c5rfnv1.mongodb.net/?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch((err) => console.log('Connexion à MongoDB échouée !', err ));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use('/api/auth/signup', (req, res, next) => {
    const users = [
        {
            email: 'momo@mail.fr' ,
            password: 'momopass',
        }
    ];
    res.status(200).json(users);
});

module.exports = app;