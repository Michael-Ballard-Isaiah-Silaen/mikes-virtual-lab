const CheckerController = require("../controllers/CheckerController");
const Authentication = require("../middlewares/Authentication");

const CheckerRouter = require("express").Router();

CheckerRouter.use(Authentication);
CheckerRouter.get("/:labname", CheckerController.getStatus);
CheckerRouter.post("/:labname", CheckerController.toggleStatus);

module.exports = CheckerRouter;