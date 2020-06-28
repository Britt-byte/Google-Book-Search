const router = require("express").Router();
const booksController = require("../../controllers/booksControllers");

router.route("/")
    .post(booksController.create);

router.route("/saved")
    .get(booksController.findAllSaved);

router.route("/delete/:id")
    .delete(booksController.remove);

    module.exports = router;