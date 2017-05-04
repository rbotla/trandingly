var mongoose = require('mongoose'),
Schema = mongoose.Schema;

var PortfolioSchema = new Schema({
  name: String
});

PortfolioSchema.pre('save', function(next) {
  // get the current date
  var currentDate = new Date();  
  this.updated_at = currentDate;
  if (!this.created_at)
    this.created_at = currentDate;

  next();
});

mongoose.model('Portfolio', PortfolioSchema);
