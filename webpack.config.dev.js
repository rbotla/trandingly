var webpack = require('webpack');
var path = require('path');

module.exports = {
	devtool: 'inline-source-map', // provides specific line number when error occurs during build

	entry: [
		'webpack-dev-server/client?http://localhost:8080/', // Let webpack know which URL to launch.. picks up index.html by default
		'webpack/hot/only-dev-server', // For hot loading modules without re-compiling
		'./src/index.js' // Let webpack know where to start for depedency tracing
	],

	output: {
		path: path.join(__dirname, 'public'), // Only for production deployment
		filename: 'bundle.js' // The consolidated cleint side library name. This is referenced in the index.html
	},

	// where should webpack lookin for the depedencies mentioned in respective files 
	resolve: {
		modules: ['node_modules', 'src'],
		extensions: ['.js']
	},

	module: {
		loaders: [
			{
				test: /\.js?$/,
				exclude: /node_modules/,
				loaders: [
					'react-hot-loader', 
					'babel-loader?presets[]=react,presets[]=es2015'
				]
			}
		]
	},

	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoEmitOnErrorsPlugin(),
	]

}