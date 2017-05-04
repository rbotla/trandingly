const routes = function(app){

	var portfolios = require('./controllers/portfolios');
	app.get('/api/portfolios/import', portfolios.import);
	app.get('/api/portfolios', portfolios.findAll);
	app.get('/api/portfolios/:id', portfolios.findById);
	app.post('/api/portfolios', portfolios.add);
	app.put('/api/portfolios/:id', portfolios.update);
	app.delete('/api/portfolios/:id', portfolios.delete);
}

module.exports = routes;