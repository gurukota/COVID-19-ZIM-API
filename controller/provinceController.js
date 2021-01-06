const provinceService = require('../service/provinceService');

module.exports.postProvince = async (req, res) => {
    let response = {};
    try {
        const responsefromService = await provinceService.postProvince(req.body);
        response.status = 200;
        response.message = 'Posted successfully';
        response.body = responsefromService;
    } catch (error) {
        console.log('Something went wrong: Controller: postProvince', error);
        response.status = 400;
        response.message = error.message;
        response.body = {};
    }
    return res.status(response.status).send(response)
}

module.exports.getProvinceSummary = async (req, res) => {
    let response = {};
    try {
        const responsefromService = await provinceService.getProvinceSummary();
        response.status = 200;
        response.message = 'Posted successfully';
        response.body = responsefromService;
    } catch (error) {
        console.log('Something went wrong: Controller: postProvince', error);
        response.status = 400;
        response.message = error.message;
        response.body = {};
    }
    return res.status(response.status).send(response)
}