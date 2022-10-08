"use strict";
let mongoose = require('mongoose');
const URI = process.env.DATABASE_URL;
mongoose.connect(`${URI}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}, (err) => {
    if (err)
        throw err;
    console.log('Connect success to Mongo 🍃');
});
