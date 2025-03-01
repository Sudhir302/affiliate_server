const express = require('express');
const router = express.Router();
const productModel = require('../models/product')

// displaying all the product

router.get('/products', async (req,res)=>{
    try {
        const products = await productModel.find();
        return res.json(products);
    } catch (error) {
        console.log(error)
        return res.status(500).json({message: 'internal error', success: false});
    }
})


//this is category route

router.post('/product/category', async (req,res) =>{
    try {
        const value = req.body.category
        if(!value){
            return res.status(400).json({message: "Category is required", success: false})
        }
        const products = await productModel.find({productCategory: value});
        return res.status(200).json(products)
    } catch (error) {
        console.log(error)
        return res.status(500).json({message: 'internal error', success: false});
    }
})

//This is search route

router.get('/product/search', async(req,res)=>{
    try {
        const searchTerm = req.query.q;
        console.log("Searching for:", searchTerm);
        if(!searchTerm){
            return res.status(400).json({message: 'Search term is required', success: false})
        }

        const products = await productModel.find({
            $or:[
                {
                    productName: {$regex: searchTerm, $options: "i"}
                },
                {
                    productDescription: {$regex: searchTerm, $options: "i"}
                }
            ]
        });
        return res.status(200).json(products);
    } catch (error) {
        console.log(error);
        return res.status(500).json({message: 'internal server error', success: false})
    }
})

module.exports = router;