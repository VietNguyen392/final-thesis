
let mongoose: any = require('mongoose');
const URI = process.env.DATABASE_URL;
mongoose.connect(
  `${URI}`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err: String) => {
    if (err) throw err;
    console.log('Connect success to Mongo 🍃');
  },
);
