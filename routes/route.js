const express = require('express');
const router = express.Router();
const province = require('../models/province');
const provinceController = require('../controller/provinceController');


router.get('/summary', (req, res) => {
  province.find()
    .then((data) => {
      var confirmed = 0;
      var death = 0;
      var cured = 0;
      var total = 0;
      data.map((d) => {
        confirmed = confirmed + parseInt(d['active']);
        death = death + parseInt(d['death']);
        cured = cured + parseInt(d['cured']);
        total = total + parseInt(d['total']);
      });

      res.json({
        'Active cases': confirmed,
        'Recovered': cured,
        Death: death,
        'Total Cases': total,
      });
    })
    .catch((err) => {
      console.log('Error is ', err.message);
    });
});

router.get('/provinces', (req, res) => {
  province.find()
    .then((data) => {
      res.json({ provinces: data });
    })
    .catch((err) => {
      console.log('Error is ', err.message);
    });
});

  router.get('/province/:provincename', (req, res) => {
    var provinceid = req.url.split('/');
    provinceid = provinceid[2].replace(/%20/g, ' ');
    console.log(provinceid);
    province.find({ name: provinceid })
      .then((data) => {
        res.json({ data });
      })
      .catch((err) => {
        console.log('Error is ', err.message);
      });
  });
  
  router.get('/latest', (req, res) => {
    res.json({ message: 'Latest Data Updated' });
  });
  

  router.post('/new', provinceController.postProvince);


module.exports = router;    