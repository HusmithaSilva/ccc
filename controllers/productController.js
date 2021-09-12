const express = require('express');
const ProductMod = require('../models/product');

const router = express.Router();

//submit product
router.post('/addproduct', async (req, res)=>{
   const adprod = new ProductMod({
        name: req.body.name,
        description: req.body.description,
        quantity: req.body.quantity
   });
   try{
   const savdprod = await adprod.save();
   res.json(savdprod);
   }catch(err){
       res.json(err);
   }
   
});

//get all product
router.get('/findAllProduct',  async (req, res) => {
    try{
        const getprod = await ProductMod.find();
        res.json(getprod);
    }catch(err){
        res.json(err);
    }
});

//get specific post
router.get('/:prodId', async(req, res) => {
    try{
        const getprodID = await ProductMod.findById(req.params.prodId);
    res.json(getprodID);
    }catch(err){
        res.json(err);
    }
    
});


//delete products
router.delete('/deleteProduct/:prdId', async (req, res) => {
   try{
        const deleprod = await ProductMod.deleteOne({ _id: req.params.prdId});
        res.json(deleprod);
   }catch(err){
       res.json(err);
   }
});

//update product
router.patch('/editProduct/:pId', async (req, res) => {
    try{
        const updatedprod = await ProductMod.updateOne({_id: req.params.pId}, 
            {$set: {name: req.body.name}});

            res.json(updatedprod);
    }catch(err){
        res.json(err);
    }
});

module.exports = router;