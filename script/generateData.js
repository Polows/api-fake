/* This script generates mock data for local development.
 This way you don't have to point to an actual API,
 but you can enjoy realistic, but randomized data,
 and rapid page loads due to local, static data.
 */

const jsonFilePath = "./db/database.json";
const jsf = require('json-schema-faker');
const schema = require('./schema');
const fs = require('fs');

var json = JSON.stringify(jsf(schema));

fs.writeFile(jsonFilePath, json, function (err) {
    if (err) {
        return console.log(err);
    } else {
        console.log("Mock data generated.");
    }
});