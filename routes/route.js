const express = require('express');
const router = express.Router();
const provinceController = require('../controller/provinceController');


router.post('/new', provinceController.postProvince);
router.get('/daily', provinceController.getDailyUpdate);
router.get('/cdaily', provinceController.getDailyCumulative);
router.get('/province', provinceController.getProvinces)
router.get('/cprovince', provinceController.getProvinceCumulative);



module.exports = router;    