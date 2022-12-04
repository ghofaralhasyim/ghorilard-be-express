const mongoose = require('mongoose');
// const dotenv = require('dotenv');
// dotenv.config();
mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true }).then(() => {
    console.log("Successfully connect to MongoDB.");
})

// mongoose.connect('mongodb://127.0.0.1:27017/pervaProject');