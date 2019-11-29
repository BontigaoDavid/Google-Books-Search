const router = require("express").Router();
const booksController = require("../../controller/booksController");

// Matches with "/api/books"
router.route("/")
    .get(booksController.findAll)
    .post(booksController.saveBook);

//   .get(booksController.findAll)
//   .post(booksController.create);

// Matches with "/api/books/:title" 
router.route("/:id")
  .delete(booksController.deleteBook);

module.exports = router;
