var http = require('http');

http.get(process.argv[2], function(response){
	var counter = 0;
	var str = '';
	response.on('data', function(data){
		str += String(data);
	});
	response.on('end', function(){
		for (var i = 0; i < str.length; i++) {
			counter++;
		};
		console.log(counter);
		console.log(str);
	})
})

// Correct Answer
// var http = require('http')
// var bl = require('bl')

// http.get(process.argv[2], function (response) {
//   response.pipe(bl(function (err, data) {
//     if (err)
//       return console.error(err)
//     data = data.toString()
//     console.log(data.length)
//     console.log(data)
//   }))  
// })

