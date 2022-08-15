const express = require ('express');
const req = require('express/lib/request');
const breads = express.Router();
const Bread = require('../models/breads.js')

// Index
breads.get('/', req, res =>{
    res.send (Bread);
});
// SHOW
breads.get('/:arrayIndex',(req,res) =>{
    res.send (Bread[req.params.arrayIndex]);
});

module.exports = breads;