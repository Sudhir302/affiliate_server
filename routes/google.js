const express= require('express');
const router = express.Router();
const googleUser = require('../models/users')

router.post('/google/user', async(req,res)=>{
    try {
        const { email, name } = req.body.userDetails
        const newUser = await new googleUser({
            userName: name,
            userEmail: email,
        })
        await newUser.save();
        return res.status(201).json({message:"user added", success: true})
    } catch (err) {
        console.error(err);
        return res.status(500).json({message: 'Internal Server Error', success: false});
    }
})

module.exports = router;