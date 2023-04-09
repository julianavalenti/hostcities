const express = require("express")
const mongoose = require ("mongoose")
const City = require("./models/cities")
const app = express ();
require("dotenv").config()
const cityData = require ("./hostCities.js")


mongoose.connect(process.env.DATABASE_URL)

const db = mongoose.connection;
db.on('error', (err) => console.log(err.message + ' is mongod not running?'));
db.on('connected', () => console.log('mongo connected'));
db.on('disconnected', () => console.log('mongo disconnected'));

const cityDB = async () => {
    await City.deleteMany({})
    await City.insertMany(cityData)

}

cityDB().then(() => {
    mongoose.connection.close()
}) 

// cityDB()