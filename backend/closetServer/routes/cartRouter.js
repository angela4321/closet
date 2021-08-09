const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const multer = require('multer');
const cors = require('./cors');

const itemSchema = require('../schemas/itemSchema');
var CartItems = mongoose.model('CartItems',itemSchema);


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, '../../frontend/src/images');
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
});

const imgFilter = (req, file, cb) => {
    if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
        return cb(new Error("Invalid"), false);
    }
    cb(null, true);
}


const upload = multer({ storage: storage, fileFilter: imgFilter });

const cartRouter = express.Router();
cartRouter.use(bodyParser.json());

cartRouter.route('/')
    .options(cors.corsWithOptions, (req, res) => { res.sendStatus(200); })
    .get(cors.corsWithOptions, (req, res, next) => {
        CartItems.find(req.query)
            .then((items) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(items);
            }, (err) => next(err))
            .catch((err) => next(err));
    })
    .post(cors.corsWithOptions, upload.single("image"), (req, res, next) => { //TODO add upload.single
        req.body.image = __dirname + req.file.path;
        console.log(req.body);
        CartItems.create(req.body)
            .then((item) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(item)
            }, (err) => next(err))
        //.catch((err) => next(err));
    })
    .delete(cors.corsWithOptions, (req, res, next) => {
        CartItems.remove({})
            .then((response) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(response);
            }, (err) => next(err))
            .catch((err) => next(err));
    })


cartRouter.route('/:itemId')
    .options(cors.corsWithOptions, (req, res) => { res.sendStatus(200); })
    .get(cors.corsWithOptions, (req, res, next) => {
        CartItems.findById(req.params.itemId)
            .then((item) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(item);
            }, (err) => next(err))
            .catch((err) => next(err));
    })
    .delete(cors.corsWithOptions, (req, res, next) => {
        CartItems.findByIdAndRemove(req.params.itemId)
            .then((item) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(item);
            }, (err) => next(err))
            .catch((err) => next(err));
    })

module.exports = cartRouter;