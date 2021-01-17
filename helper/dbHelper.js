const mongoose = require("mongoose");
const constants = require('../constants');
module.exports.formatData = (data) => {
    if (Array.isArray(data)) {
        let newDataList = [];
        for (const val of data) {
            newDataList.push(val.toObject());
        }
        return newDataList;
    }
    return data.toObject();
}

module.exports.checkObjectId = (id) => {
    if (!mongoose.Types.ObjectId.isValid(id)){
        throw new Error(constants.databaseMessage.INVALID_ID)
    }
}