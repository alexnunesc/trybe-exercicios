let moment = require("moment");

let br = moment('17071994', 'DDMMYYYY');

let  fromNow = br.fromNow();

console.log('tetra há ' + fromNow);