const Service = require('../services/cheeses');
module.exports = (server) => {
    
server.get('/cheeses',(req, res) => { // Et route, vi bruger GET metoden. Indeholder to parametre et route og et callback(req og res).
    res.send(Service.getAll());// response sender noget data. send udskriver det i browseren.  req er det data jeg beder om, det er det inden i ({})  
    
   });
   server.get('/cheeses/:varenr', (req, res) => {
    res.send(Service.getOne(req.params.varenr));      
    });
};