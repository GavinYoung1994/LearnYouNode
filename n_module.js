var mymodule = require('./Filtered.js');

mymodule(process.argv[2],process.argv[3],function(err,data){
	if(err!==null){
		console.log(err);
	}else{
		for (var i = 0; i < data.length; i++) {
			console.log(data[i]);
		};
	}
});