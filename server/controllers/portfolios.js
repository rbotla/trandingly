var mongoose = require('mongoose'),
Portfolio = mongoose.model('Portfolio');
//Stock = mongoose.model('Stocks');

exports.findAll = function(req, res){
  Portfolio.find({},function(err, results) {
    return res.send(results);
  });
};

exports.findById = function(req, res){
  var id = req.params.id;
  Portfolio.findOne({'_id':id},function(err, result) {
    return res.send(result);
  });
};

exports.add = function(req, res) {
  Portfolio.create(req.body, function (err, Portfolio) {
    if (err) return console.log(err);
    return res.send(Portfolio);
  });
}

exports.addStock = function(req, res) {
  Portfolio.create(req.body, function (err, Portfolio) {
    if (err) return console.log(err);
    return res.send(Portfolio);
  });
}
exports.update = function(req, res) {
  var id = req.params.id;
  var updates = req.body;

  Portfolio.update({"_id":id}, req.body,
    function (err, numberAffected) {
      if (err) return console.log(err);
      console.log('Updated %d portfolios', numberAffected);
      res.send(202);
  });
}
exports.delete = function(req, res){
  var id = req.params.id;
  Portfolio.remove({'_id':id},function(result) {
    return res.send(result);
  });
};  
exports.import = function(req, res){
  Portfolio.create(
    { "name": "IT Portfolio" },
    { "name": "Healthcare Portfolio." },
    { "name": "Dad's Portfolio" },
    { "name": "Watchlist Portfolio" }
  , function (err) {
    if (err) return console.log(err);
    return res.sendStatus(202);
  });
};
