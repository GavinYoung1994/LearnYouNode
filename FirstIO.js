var fs = require('fs');
var file = process.argv;
var content = String(fs.readFileSync(file[2]));
var counter = content.split('\n').length;
console.log(counter-1);