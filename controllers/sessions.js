const express = require('express');
const bcrypt = require('bcrypt');
const sessionsRouter = express.Router();
const User = require('../models/user.js');
const Plan = require('../models/plans.js')

//I
sessionsRouter.get('/login', (req, res)=> {
    res.render('login.ejs')
})



//D
sessionsRouter.get('/logout', (req, res) => {
    req.session.destroy((error) => {
        if (error) {
            res.send(error);
        } else {
            res.render('index.ejs');
        }
    });
});

//U

sessionsRouter.put('/edit', async (req, res) => {
    try {
        const foundUser = await User.findById(req.session.currentUser._id);

        foundUser.name = req.body.name;
        foundUser.email = req.body.email;
        foundUser.phone = req.body.phone;

        await foundUser.save();
        req.session.currentUser = foundUser
        res.redirect('/sessions/account');

    } catch (error) {
        console.error(error);
        res.status(500).send('Error updating personal information');
    }
});

sessionsRouter.put('/password', async (req, res) => {
    try {
        const foundUser = await User.findById(req.session.currentUser._id);

        
        if (req.body.newPassword) {
            const newPassword = await bcrypt.hash(req.body.newPassword, 10);
            foundUser.password = newPassword;
            await foundUser.save();
            res.redirect('/sessions/account');
        } else {
            
            res.status(400).send('New password is required');
        }

    } catch (error) {
        console.error(error);
        res.status(500).send('Error updating password');
    }
   
});

//update plan

sessionsRouter.put("/:id", async (req,res)=> {
    
await Plan.findByIdAndUpdate(
    req.params.id,
    req.body,
{
    new:true
}
)
res.redirect("/sessions/plan")
})


//C


sessionsRouter.post('/login', async (req, res) => {
    try {
      const foundUser = await User.findOne({ email: req.body.email });
      if (!foundUser) {
        res.render('login.ejs', { 
            message: 'Email not found' 
        });
      } else {
        const passwordMatches = await bcrypt.compare(req.body.password, foundUser.password);
        if (passwordMatches) {
          req.session.currentUser = foundUser;
          res.redirect('/cities');
        } else {
          res.render('login.ejs', {
             message: 'Invalid Password'
             });
        }
      }
    } catch (error) {
      console.error(error);
      res.status(500).send('Error logging in user');
    }
  });

  //create new trip plan 

  sessionsRouter.post('/plan', (req,res) =>{
    const createdPlan = new Plan (req.body)
    createdPlan.save().then(res.redirect('/myplan'))
})
  
  //E

  sessionsRouter.get("/edit", async (req,res) => {
    const foundUser = await User.findById(
        req.params.id,
        );
    res.render("edit.ejs", {
        user: foundUser,
    })
})
//Edit  plan ... it works
sessionsRouter.get("/:id/edit", async (req, res) => {
    const foundPlan = await Plan.findById(req.params.id)
      res.render("plan-edit.ejs", {
        plan: foundPlan,
      })
    })


  //S 

  sessionsRouter.get('/account', (req, res) => {
    res.render('account.ejs', {
        
    });
}); 

sessionsRouter.get('/plan', (req, res) => {
	
    res.render('plan.ejs', {
        
    });
}); 

//show plan saved 

sessionsRouter.get('/myplan', async (req, res) => {
    const foundPlans = await Plan.find({}).exec(); // Fetch all plans from the database
    res.render('show-plan.ejs', {
        plans: foundPlans, // Pass the array of plans to the template
    });
});







module.exports = sessionsRouter;