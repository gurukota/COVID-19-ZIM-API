const express = require('express');
const router = express.Router();
const provinceController = require('../controller/provinceController');


router.post('/new', provinceController.postProvince);
router.get('/daily', provinceController.getDailyUpdate);
router.get('/cumulativedaily', provinceController.getDailyCumulative);
router.get('/provinces', provinceController.getProvinces)
router.get('/cumulativeprovince', provinceController.getProvinceCumulative);



module.exports = router;    