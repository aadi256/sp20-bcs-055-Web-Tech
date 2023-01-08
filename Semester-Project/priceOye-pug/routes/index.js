var express = require("express");
var router = express.Router();
var Product = require("../models/product");

/* GET home page. */
router.get("/", async function (req, res, next) {
	let products = await Product.find({});
	res.render("index", { title: "PriceOye", products });
});

router.get("/mycart", function (req, res, next) {
	console.log(req.session.user);
	let cart = req.cookies.cart;
	if (!cart) cart = [];
	res.render("mycart", { cart });
});

module.exports = router;
