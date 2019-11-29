const db = require("../models");

testobject = {
    property: "values"
}

module.exports = {
    searchBook: function (req, res) {
        res.json(testobject);
    },

    findAll: function (req, res) {
        db.Book
            .find(req.query)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },

    saveBook: function (req, res) {
        db.Book
            .create(req.body)
            .then(dbModel => res.json(dbModel))
    },

    deleteBook: function (req, res) {
        db.Book
        .deleteOne({_id: req.params.id}, err => {
            if (err)
            handleError(err);
        }).then(response => res.json(response))
    }
}