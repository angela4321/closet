const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('./cors');
const Outfit = require('../schemas/outfitSchema')

const outfitRouter = express.Router();
outfitRouter.use(bodyParser.json());

outfitRouter.route('/')
.options(cors.corsWithOptions, (req, res) => { res.sendStatus(200); })
    .get(cors.corsWithOptions,(req, res, next) => {
        Outfit.find(req.query)
            .then((items) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(items);
            }, (err) => next(err))
            .catch((err) => next(err));
    })
    .post(cors.corsWithOptions,(req, res, next) => {
        Outfit.create(req.body)
            .then((item) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(item)
            }, (err) => next(err))
            //.catch((err) => next(err));
    })
    .delete(cors.corsWithOptions,(req, res, next) => {
        Outfit.remove({})
            .then((response) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(response);
            }, (err) => next(err))
            .catch((err) => next(err));
    })


outfitRouter.route('/:outfitId')
.options(cors.corsWithOptions, (req, res) => { res.sendStatus(200); })
    .get(cors.corsWithOptions,(req, res, next) => {
        Outfit.findById(req.params.outfitId)
            .then((item) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(item);
            }, (err) => next(err))
            .catch((err) => next(err));
    })
    .delete(cors.corsWithOptions,(req,res,next)=>{
        Outfit.findByIdAndRemove(req.params.outfitId)
            .then((item) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(item);
            }, (err) => next(err))
            .catch((err) => next(err));
    })

module.exports = outfitRouter;