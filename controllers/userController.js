const express = require('express');
const UserMod = require('../models/user');

const router = express.Router();

router.post('/login', (req, res) => {
   const email =  req.body.email;
   const password =  req.body.password;

   UserMod.find({ email: req.body.email })
        .exec()
        .then(user => {
            if(user.length < 1) {
                res.status(404).json({
                    Error: "No User"
                })
            } else {
                if(user[0].phone == req.body.password) {
                    res.status(200).json({
                        email: user[0].email,
                        first_name: user[0].first_name,
                        last_name: user[0].last_name,
                        phone: user[0].phone,
                        address: user[0].address,

                    })
                } else {
                    res.status(401).json({
                        "Error": "No authentication"
                    })
                }
            }
        })
});
router.post('/adduser', async (req, res)=>{
    const adusr = new UserMod({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        
        phone: req.body.phone,
        address: req.body.address
        
    });
    try{
    const saveusr = await adusr.save();
    res.json(saveusr);
    }catch(err){
        res.json(err);
    }
    
 });

 router.get('/findAllUser',  async (req, res) => {
    try{
        const getusr = await UserMod.find();
        res.json(getusr);
    }catch(err){
        res.json(err);
    }
});


router.get('/getusr/:prodId', async(req, res) => {
    try{
        const getusrID = await UserMod.findById(req.params.prodId);
    res.json(getusrID);
    }catch(err){
        res.json(err);
    }
    
});

router.delete('/deleteUser/:email', async (req, res) => {
    try{
         const deluser = await UserMod.deleteOne({ email: req.params.email});
         res.json(deluser);
    }catch(err){
        res.json(err);
    }
 });

 router.patch('/editusr/', async (req, res) => {
    try{
        const updatedusr = await UserMod.updateOne({email: req.body.email}, 
            {$set: {first_name: req.body.first_name,
                last_name: req.body.last_name,
                address: req.body.address,
                }});

            res.json(updatedusr);
    }catch(err){
        res.json(err);
    }
});

 module.exports = router;