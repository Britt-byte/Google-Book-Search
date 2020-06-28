const db = require("../models")

module.exports = {
    findAllSaved: (req, res) => {
        db.BooksSaved
        .find()
        .then(function(result) {
            res.json(result) 
        })
        .catch(err => res.status(422).json(err));
    },

    create: (req, res) => {
        db.BooksSaved.create({
            title: req.body.title,
            link: req.body.link,
            author: req.body.author,
            description: req.body.description,
            id: req.body.id
        })
    },

    remove: (req, res) => {
        db.BooksSaved
        .findById({ id: req.params.id})
        .then(dbModel => dbModel.remove())
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    }
}