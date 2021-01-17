const Province = require('../database/models/province');
const OldData = require('../database/models/oldData');
const { formatData, checkObjectId } = require('../helper/dbHelper');
const constants = require('../constants');

module.exports.postProvince = async (serviceData) => {
    try {
        let province = new Province({...serviceData})
        let result = await province.save();
        return formatData(result);
    } catch (error) {
        console.log('Something we wrong: postProvince', error);
        throw new Error(error)
    }
}

module.exports.getDailyUpdate = async () => {
    try {
        var result = {};
        await Province.find()
        .then((data) => {
            let cases = 0;
            let active = 0;
            let recovered = 0;
            let deaths = 0;
            data.map((d)=>{
                cases = cases+parseInt(d['cases']);
                active = active+parseInt(d['active']);
                recovered = recovered+parseInt(d['recovered']);
                deaths = deaths+parseInt(d['deaths']);
            });
            result.cases = cases;
            result.active = active;
            result.recoverd = recovered;
            result.deaths = deaths;
        })
        return result;
    } catch (error) {
        console.log('Something we wrong: getDailyUpdate', error);
        throw new Error(error)
    }
}

module.exports.getProvinces = async () => {
    try {
        let result;
        await Province.find()
        .then((data)=>{
            result =  data;
        })
        return formatData(result);
    } catch (error) {
        console.log('Something we wrong: getProvinces', error);
        throw new Error(error)
    }
}

module.exports.getDailyCumulative = async () => {
    try {
        var result = {};
        await Province.find()
        .then((data) => {
            let cases = 0;
            let active = 0;
            let recovered = 0;
            let deaths = 0;
            let tests = 0;
            data.map((d)=>{
                cases = cases+parseInt(d['cases']);
                active = active+parseInt(d['active']);
                recovered = recovered+parseInt(d['recovered']);
                deaths = deaths+parseInt(d['deaths']);
                tests = tests+parseInt(d['tests']);
            });
            result.cases = cases;
            result.active = active;
            result.recovered = recovered;
            result.deaths = deaths;
            result.tests =tests;
        })
        await OldData.find()
        .then((data) => {
            let cases = 0;
            let recovered = 0;
            let deaths = 0;

            data.map((d)=>{
                cases = cases+parseInt(d['cases']);
                recovered = recovered+parseInt(d['recovered']);
                deaths = deaths+parseInt(d['deaths']);
            });
            result.cases += cases;
            result.recovered += recovered;
            result.deaths += deaths;
        })
        return result;
    } catch (error) {
        console.log('Something we wrong: getDailyCumulative', error);
        throw new Error(error)
    }
}


module.exports.getProvinceCumulative = async () => {
    try {
        let result;
        await Province.find()
        .then((data)=>{
            result =  data;
        })
        let final=[];
        await OldData.find()
        .then((data)=>{
            for (let i = 0; i < data.length; i++) {
                let arr1 = data[i];
                let arr2 = result[i];
                arr1['cases'] +=  arr2['cases'];
                arr1['recovered'] +=  arr2['recovered'];
                arr1['deaths'] +=  arr2['deaths'];
                final.push(arr1);
            }
        })
        return formatData(final);
    } catch (error) {
        console.log('Something we wrong: getProvinces', error);
        throw new Error(error)
    }
}