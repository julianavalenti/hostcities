const bcrypt = require('bcrypt');
const express = require('express');
const userRouter = express.Router();
const User = require('../models/user.js');


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


module.exports = userRouter;