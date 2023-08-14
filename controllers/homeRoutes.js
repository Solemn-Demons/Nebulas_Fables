// to redirect to home page
const router = require("express").Router();
const { User } = require("../models");
const sequelize = require("../config/connection");

//get login from homepage
router.get("/login", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/");
    return;
  }
  //render handlebars login
  res.render("login");
});

//get signup from homepage
router.get("/signup", (req, res) => {
  if (req.session.logged_in) {
    res.direct("/");
    return;
  }
  //render handlebars signup
  res.render("signup");
});

module.exports = router;
