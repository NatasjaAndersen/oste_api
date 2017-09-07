module.exports = (server) => {
    server.get('/customers', function (req, res, next) {
        res.send({"kundenr": "ef22", "navn": "Natasja Andersen"});
        return next();
       });
    };