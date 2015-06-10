var http = require('http');

http.get(process.argv[2], function(response){
	response.on('data', function(data){
		console.log(String(data));
	});
})

// correct answer
    // var http = require('http')
    
    // http.get(process.argv[2], function (response) {
    //   response.setEncoding('utf8')
    //   response.on('data', console.log)
    //   response.on('error', console.error)
    // })

