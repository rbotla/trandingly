var webpack = require('webpack');
var path = require('path');

module.exports = {

	entry: {
	  main: [
	      './src/index.js'
	    ]
	},

	output: {
		path: path.join(__dirname, 'dist'), // Only for production deployment
		filename: 'bundle.js', // The consolidated cleint side library name. This is referenced in the index.html
    publicPath: '/dist/'
	},

	// where should webpack lookin for the depedencies mentioned in respective files 
	resolve: {
		modules: ['node_modules', 'src'],
		extensions: ['.js']
	},

	module: {
		rules: [
			{
				test: /\.js?$/,
				exclude: /node_modules/,
				use: [
					'babel-loader',
				]
			},
			{
				test: /\.css?$/,
				use: [
					'style-loader',
					'css-loader'
				]				
			}
		]
	},

	plugins: [

	]

}