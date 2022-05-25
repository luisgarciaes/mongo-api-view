let express = require('express');
const mongoose = require('mongoose')
const app = express()

let personRoute = require('./routes/person');
let personsRoute = require('./routes/persons');
let mainRoute = require('./routes/main');

mongoose.Promise = global.Promise;

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }))
app.use(personRoute);
app.use(personsRoute);
app.use(mainRoute);
app.use('/assets', express.static(__dirname + '/public'));


let PORT = process.env.PORT || 3000;

require("dotenv").config();
mongoose.connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then((db) => console.log("Mongodb is connected"))
    .catch((err) => console.error(err));

app.listen(PORT, () => {
    console.log('escuchando en el puerto 3000')
})