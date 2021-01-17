const express = require('express');
const router = express.Router();
const provinceController = require('../controller/provinceController');


router.post('/new', provinceController.postProvince);
router.get('/daily', provinceController.getDailyUpdate);
router.get('/cdaily', provinceController.getDailyCumulative);
router.get('/provinces', provinceController.getProvinces)
router.get('/cprovinces', provinceController.getProvinceCumulative);



module.exports = router;    