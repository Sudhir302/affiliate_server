require('dotenv').config()
const express = require('express');
const router =  express.Router();
const productModel = require('../models/product');
const jwt = require('jsonwebtoken');

// logging if admin
router.post('/admin/login', (req, res)=>{
    try {
        const username = req.body.username;
        const password = req.body.password
        if(!username || !password){
            return res.status(400).json({message: 'not found', success: false});
        }
        if(username === process.env.ADMIN_USER && password === process.env.ADMIN_PASSWORD){
            const token = jwt.sign(
                {userId: process.env.ADMIN_ID}, process.env.JWT_SECRET_KEY, {expiresIn: '1h'}
            )
            res.cookie("token", token,{
                httpOnly: true,
                secure: true,
                sameSite:'none',
                maxAge: 60*60*1000
            })
            return res.status(200).json({message: "Greeting Admin", success: true});
        }
        else{
            return res.status(403).json({message: 'You are not Admin', success: false})
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({message: 'Internal server Error', success: false});
    }
})

// admin show route
router.get('/admin/productlist', async (req,res)=>{
    try {
        const products = await productModel.find();
        if(products.length === 0){
            return res.status(200).json({message: "Database is Empty", success: true, products:[]})
        }
        return res.status(200).json({message: "All Product List", success: true, products});
    } catch (error) {
        console.error(error);
        return res.status(500).json({message: 'internal server error', success: false});
    }
})

// product create Route;
router.post('/admin/create', async (req, res)=>{
    let {productName, productLink, productImage, productDescription} = req.body.productValue;
    let productCategory = req.body.productCategory;
    try {
        const newProduct = await productModel({
            productName, 
            productLink, 
            productImage,
            productDescription,
            productCategory
        })
        await newProduct.save();
        return res.status(201).json({message: 'Product added', success: true});
    } catch (error) {
        console.log(error)
        return res.status(500).json({message: 'internal error', success: false});
    }
})

// edit route 
router.get('/admin/productlist/:id/edit', async (req,res)=>{
    try {
        const{ id } = req.params;
        const product = await productModel.findById(id);
        if(!product){
            return res.status(404).json({message: "Product not Found", success: false});
        }
        return res.status(200).json({product});
    } catch (error) {
        console.error(error);
        return res.status(500).json({message: 'internal server error', success: false});
    } 

})

//update route
router.put('/admin/productlist/:id/update', async (req,res)=>{
    try {
        const { id } = req.params;
        await productModel.findByIdAndUpdate(id, req.body, {new: true});
        return res.status(200).json({message: "Product updated Successfylly", success: true})
    } catch (error) {
        console.error(error);
        return res.status(500).json({message: 'internal server error', success: false});
    }
})

//delete route 
router.delete('/admin/productlist/:id/delete', async (req,res)=>{
    try {
        const {id} = req.params;
        await productModel.findByIdAndDelete(id)
        return res.status(200).json({message: 'Product Deleted', success: true});
    } catch (error) {
        console.error(error);
        return res.status(500).json({message: 'internal server error', success: false});
    }
})
module.exports = router;