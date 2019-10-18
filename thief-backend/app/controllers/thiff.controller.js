const Thiff = require('../models/thiff.model.js');
const express = require('express');
const app = express();
const router = express.Router();

router.post('/', function (req, res, next) {

    // Create a Note
    const thiff = new Thiff({
        name: req.body.name,
        age: req.body.age,
        gender : req.body.gender,
        mobileNumber : req.body.mobileNumber,
        crime : req.body.crime,
        section : req.body.section
    });

    // Save Note in the database
    thiff.save()
        .then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Thiff Details."
            });
        });
});

router.get('/', function (req, res) {
    Thiff.find().then(thiffs => {
        res.send(thiffs);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving notes."
        });
    });
});

router.get('/thiffById/:id', function (req, res, next) {
    Thiff.findById(req.params.id).then(thiff => {
        if (!thiff) {
            return res.status(404).send({
                message: "Thiff not found with id " + req.params.id
            });
        } else {
            res.send(thiff);
        }
    }).catch(err => {
        if (err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Thiff not found with id " + req.params.id
            });
        }
        return res.status(500).send({
            message: "Error retrieving thiff with id " + req.params.id
        });
    });
});


router.put('/:id', function (req, res, next) {
    

    // Find note and update it with the request body
    Thiff.findByIdAndUpdate(req.params.id, {
        name: req.body.name,
        age: req.body.age,
        gender : req.body.gender,
        mobileNumber : req.body.mobileNumber,
        crime : req.body.crime,
        section : req.body.section
    },
        { new: true })
        .then(thiff => {
            if (!thiff) {
                return res.status(404).send({
                    message: "Thiff not found with id " + req.params.id
                });
            }
            res.send(thiff);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Thiff not found with id " + req.params.id
                });
            }
            return res.status(500).send({
                message: "Error updating thiff with id " + req.params.id
            });
        });
});


router.delete('/:id', function (req, res, next) {
    Thiff.findByIdAndRemove(req.params.id)
        .then(thiff => {
            if (!thiff) {
                return res.status(404).send({
                    message: "Thiff not found with id " + req.params.id
                });
            }
            res.send({ message: "Thiff Details deleted successfully!" });
        }).catch(err => {
            if (err.kind === 'ObjectId' || err.name === 'NotFound') {
                return res.status(404).send({
                    message: "Thiff not found with id " + req.params.id
                });
            }
            return res.status(500).send({
                message: "Could not delete thiff with id " + req.params.id
            });
        });
});

module.exports = router;