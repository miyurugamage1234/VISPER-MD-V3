const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}


module.exports = {

SESSION_ID: process.env.SESSION_ID === undefined ? 'PUT SESSION ID HERE' : process.env.SESSION_ID, 
PORT: process.env.PORT === undefined ? 'ZAAysBfRPcz2ymd6mGKngJN4QszYXJ3DTFwa' : process.env.PORT,    
SESSION_NAME: process.env.SESSION_NAME === undefined ? 'miyurugamage1234' : process.env.SESSION_NAME, 

};

