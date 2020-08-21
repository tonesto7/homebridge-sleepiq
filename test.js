const API = require("./API.js");
const creds = require("./creds.json");
const api = new API(creds.login.username, creds.login.password);

api.login().then((res) => {
    console.log("login: ", res);
    api.familyStatus().then((famStat) => {
        console.log("familyStatus: ", famStat);
        console.log("bedId: ", JSON.parse(famStat).beds[0].bedId);
        api.footWarmingStatus().then((fwStat) => {
            console.log("footWarmingStatus: ", fwStat);
        });
    });
});