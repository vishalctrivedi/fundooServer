const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const dbConfig = require('./config/database.config');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect(
    dbConfig.url, {
        useNewUrlParser: true
    }).then(() => {
        console.log("connected to database");
    }).catch(err => {
        console.log("Could not connect to database    " + err);
        process.exit();
    })

app.get('/', (req, res) => {
    res.json({ "message": "Hi welcome to fundoo notes" })
});

require('./routes/routes')(app);

app.listen(3000, () => { console.log("Listening to port 3000") })