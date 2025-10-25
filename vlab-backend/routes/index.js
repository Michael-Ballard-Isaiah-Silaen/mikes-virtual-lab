const AuthRouter = require("./AuthRouter");
const ProfileRouter = require("./ProfileRouter");
const CheckerRouter = require("./CheckerRouter");

const router = require("express").Router();

router.get("/", (req, res) => {
  res.send(":3");
});

router.use("/auth", AuthRouter);
router.use("/profile", ProfileRouter);
router.use("/checker", CheckerRouter);

module.exports = router;
