const restify = require('restify');//Vi læser biblioteket restify ind

const server = restify.createServer({ //Her laver vi en server som vi sætter in i const kaldet server
 name: 'osteapi', //Navnet på serveren
 version: '1.0.0' //Hvilken version det er
});
server.use(restify.plugins.bodyParser());

require('./routes/index')(server);


server.listen(8080, function () { //at vi sætetr servern til at lytte til en port
 console.log('%s listening at %s', server.name, server.url);
});