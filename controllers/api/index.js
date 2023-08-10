const router = require("express").Router();
const userRoutes = require("./userRoutes");
const mythosRoutes = require("./mythos-routes");
const starRoutes = require("./star-routes");

router.use("/users", userRoutes);
router.use("/mythos", mythosRoutes);
router.use("/star", starRoutes);

module.exports = router;
