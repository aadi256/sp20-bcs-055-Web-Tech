var express = require("express");
var router = express.Router();
var Product = require("../models/product");
var checkSessionAuth = require("../middlewares/checkSessionAuth");

/* GET home page. */
router.get("/", async function (req, res, next) {
	let products = await Product.find({});
	res.render("products/list", { title: "Products", products });
});
router.get("/add", checkSessionAuth, async function (req, res, next) {
	res.render("products/add");
});
router.post("/add", async function (req, res, next) {
	let product = new Product(req.body);
	await product.save();
	res.redirect("/products");
});
router.get("/delete/:id", async function (req, res, next) {
	let product = await Product.findByIdAndDelete(req.params.id);
	console.log(product);
	res.redirect("/products");
});
router.get("/edit/:id", async function (req, res, next) {
	let product = await Product.findById(req.params.id);
	res.render("products/edit", { product });
});
router.post("/edit/:id", async function (req, res, next) {
	let product = await Product.findById(req.params.id);
	product.name = req.body.name;
	product.price = req.body.price;
	await product.save();
	res.redirect("/products");
});
//// mycart
router.get("/mycart/:id", async function (req, res, next) {
	let product = await Product.findById(req.params.id);
	let cart = [];
	if (req.cookies.cart) cart = req.cookies.cart;
	cart.push(product);
	res.cookie("cart", cart);
	res.redirect("/products");
});
router.get("/mycart/delete/:id", function (req, res, next) {
	console.log("first");
	let cart = [];
	if (req.cookies.cart) cart = req.cookies.cart;
	cart.splice(
		cart.findIndex((c) => c.id == req.params.id),
		1
	);
	res.cookie("cart", cart);
	res.redirect("/mycart");
});
module.exports = router;
