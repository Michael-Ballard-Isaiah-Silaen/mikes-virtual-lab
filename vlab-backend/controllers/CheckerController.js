const Checker = require("../models/Checker");
const { CustomError } = require("../middlewares/ErrorHandler");

class CheckerController {
    static async getStatus(req, res, next) {
        try {
            const { labname } = req.params;
            const { username } = res.locals.user;
            if (!username || !labname) {
            throw new CustomError(400, "Username and labname are required");
            }
            const checker = await Checker.findOne({ username, labname });
            res.status(200).json({ status: checker ? checker.status : false });
        } catch (error) {
            next(error);
        }
    }
    static async toggleStatus(req, res, next) {
        try {
            const { labname } = req.params;
            const { username } = res.locals.user;
            if (!username || !labname) {
            throw new CustomError(400, "Username and labname are required");
            }
            const existingChecker = await Checker.findOne({ username, labname });
            let newStatus;
            if (existingChecker) {
            newStatus = !existingChecker.status;
            await Checker.updateOne({ username, labname }, { $set: { status: newStatus } });
            } 
            else {
                newStatus = true;
                await Checker.create({ username, labname, status: newStatus });
            }
            res.status(200).json({ status: newStatus });
        } catch (error) {
            next(error);
        }
    }
}

module.exports = CheckerController;