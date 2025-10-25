const { ObjectId } = require("mongodb");
const { getDatabase } = require("../config/MongoConnect");

class Checker {
    constructor({ _id, username, labname, status }) {
        Object.assign(this, { _id, username, labname, status });
    }

    static async collection() {
        return getDatabase().collection("Checkers");
    }

    static async findOne(query) {
        const collection = await Checker.collection();
        const myData = await collection.findOne(query);
        return myData ? new Checker(myData) : null;
    }

    static async create({ username, labname, status = false }) {
        const collection = await Checker.collection();
        const result = await collection.insertOne({ username, labname, status });
        return result;
    }

    static async updateOne(filter, updateDoc) {
        const collection = await Checker.collection();
        const result = await collection.updateOne(filter, updateDoc);
        return result;
    }
}

module.exports = Checker;