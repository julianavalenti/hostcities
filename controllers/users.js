const bcrypt = require('bcrypt');
const express = require('express');
const userRouter = express.Router();
const User = require('../models/user.js');
const City = require("../models/cities.js")


userRouter.get('/register', (req, res)=> {
    res.render('./session/register.ejs')
})


//C

userRouter.post('/register', async (req, res) => {
    try {
      req.body.password = await bcrypt.hash(req.body.password, 10);
      const createdUser = await User.create(req.body);
      res.redirect("/cities");
    } catch (error) {
      console.error(error);
      res.status(500).send('Error creating user');
    }
  });

  // Will did this one. Will really DID this one

userRouter.post('/saves', async (req,res) => {
   req.body.mustSeeId 
   User.findbyIdAndUpdate(
   req.session.currentUser._id,
   {$push: {saves: req.body.mustSeeId}}
   )

   res.redirect("/cities")
})


module.exports = userRouter;