var fs = require('fs');
// var extLength = -process.argv[3].length;
// fs.readdir(process.argv[2], function(err, list){
// 	for(var i = 0; i<list.length; i++){
// 		if(!err){
// 			if(list[i].slice(extLength-1) === '.'+process.argv[3]){
// 				console.log(list[i]);
// 			}
// 		}else{
// 			throw err;
// 		}
// 	}
// })



module.exports = function(directory, extname, callback){
	var extLength = -extname.length;
	var new_list = [];
	fs.readdir(directory, function(err, list){
		if(err){
			return callback(err);
		}
		for(var i = 0; i<list.length; i++){
			if(list[i].slice(extLength-1) === '.'+extname){
				new_list.push(list[i]);
			}
		}
		callback(null,new_list);
	})
}
