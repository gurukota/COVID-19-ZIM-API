const provinceService = require('../service/provinceService');
const constants = require('../constants');

module.exports.postProvince = async (req, res) => {
    let response = {...constants.defaultServerResponse};
    try {
        const responsefromService = await provinceService.postProvince(req.body);
        response.status = 200;
        response.message =constants.controllerMessage.PROVINCE_CREATED;
        response.body = responsefromService;
    } catch (error) {
        console.log('Something went wrong: Controller: postProvince', error);
        response.message = error.message;
    }
    return res.status(response.status).send(response)
}

module.exports.getDailyUpdate = async (req, res) => {
    let response = {...constants.defaultServerResponse};
    try {
        const responsefromService = await provinceService.getDailyUpdate();
        response.status = 200;
        response.message = constants.controllerMessage.DAILY_FETCHED;
        response.body = responsefromService;
    } catch (error) {
        console.log('Something went wrong: Controller: getDailyUpdate', error);
        response.message = error.message;
    }
    return res.status(response.status).send(response)
}


module.exports.getProvinces = async (req, res) => {
    let response = {...constants.defaultServerResponse};
    try {
        const responsefromService = await provinceService.getProvinces();
        response.status = 200;
        response.message = constants.controllerMessage.PROVINCE_DAILY_FETCHED;
        response.body = responsefromService;
    } catch (error) {
        console.log('Something went wrong: Controller: getProvinces', error);
        response.message = error.message;
    }
    return res.status(response.status).send(response)
}

module.exports.getDailyCumulative = async (req, res) => {
    let response = {...constants.defaultServerResponse};
    try {
        const responsefromService = await provinceService.getDailyCumulative();
        response.status = 200;
        response.message = constants.controllerMessage.DAILY_CUMULATIVE_FETCHED;
        response.body = responsefromService;
    } catch (error) {
        console.log('Something went wrong: Controller: getDailyCumulative', error);
        response.message = error.message;
    }
    return res.status(response.status).send(response)
}

module.exports.getProvinceCumulative = async (req, res) => {
    let response = {...constants.defaultServerResponse};
    try {
        const responsefromService = await provinceService.getProvinceCumulative();
        response.status = 200;
        response.message = constants.controllerMessage.PROVINCE_CUMULATIVE_FETCHED;
        response.body = responsefromService;
    } catch (error) {
        console.log('Something went wrong: Controller: getProvinces', error);
        response.message = error.message;
    }
    return res.status(response.status).send(response)
}