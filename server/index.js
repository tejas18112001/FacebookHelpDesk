const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());


//
const userRoutes = require('./routes/userRoutes');
app.use('/api/auth/', userRoutes);

try {
    mongoose.connect(`${process.env.DATABASE_URL}/test2`, {
        useNewUrlParser: true,
        useUnifiedTopology: true,

    });
    console.log("Db connected sucessfully");



} catch (err) {
    console.log("error : ", err);
}



app.listen(process.env.PORT, () => {
    console.log(`Listening on the port ${process.env.PORT}`);
})