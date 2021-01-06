const Province = require('../models/province');


module.exports.postProvince = async (serviceData) => {
    try {
        let province = new Province({...serviceData})
        let result = await province.save();
        return result.toObject();
    } catch (error) {
        console.log('Something we wrong: postProvince', error);
        throw new Error(error)
    }
}

