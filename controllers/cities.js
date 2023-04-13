const express = require('express');
const citiesRouter = express.Router();
const City = require('../models/cities');

const citiesSeed = require('../models/cities.js');

citiesRouter.get('/', async (req, res) => {
	const allCities = await City.find({})
    res.render('index.ejs', {
        cities: allCities
    }
    );
}); 
citiesRouter.get('/about', async (req, res) => {
	const allCities = await City.find({})
    res.render('about.ejs', {
        cities: allCities
    }
    );
}); 

citiesRouter.get('/us', async (req, res) => {
	const allCities = await City.find({})
    res.render('us.ejs', {
        cities: allCities
    }
    );
}); 

citiesRouter.get('/can', async (req, res) => {
	const allCities = await City.find({})
    res.render('can.ejs', {
        cities: allCities
    }
    );
}); 

citiesRouter.get('/mex', async (req, res) => {
	const allCities = await City.find({})
    res.render('mex.ejs', {
        cities: allCities
    }
    );
}); 

citiesRouter.get('/:id', async (req, res) => {
	const foundCity = await City.findById(req.params.id).populate('mustSee').exec()
    console.log(foundCity)
    res.render('show.ejs', {
        
        city: foundCity,
        
    });
}); 

module.exports = citiesRouter