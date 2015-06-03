var fs = require('fs');
var file = process.argv[2];

fs.readFile(file, function(err, content){
	console.log(String(content).split('\n').length-1);
})