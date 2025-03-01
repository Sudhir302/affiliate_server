require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const port = 5000;
const cookieParser = require('cookie-parser');
const verifyToken = require('./middlewares/verifytoken')

// importing routes
const admin = require('./routes/admin');
const product = require('./routes/product');
const google = require('./routes/google');



const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors({origin: process.env.CORS_URI, credentials: true}));


// connection to database
const main = async ()=>{
    try {
        await mongoose.connect(process.env.DATABASE_URI)
    } catch (error) {
        console.log(error)
    }
}
main().then(()=>{
    console.log('connected to database')
}) 
.catch((err)=>{
    console.log(err)
})

app.use('/api',admin);
app.use('/api',product);
app.use('/api',google);

app.get('/api/admin/login', verifyToken, (req,res)=>{
    return res.json({message: "authorised", user: req.user, isAuthenticated: true})
})

// app is listining
app.listen(port,'0.0.0.0', ()=>{
    console.log(`listining on port ${port}`);
})