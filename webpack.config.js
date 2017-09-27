const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

const PATH = {
	app:path.join(__dirname,'app'),
	bulid:path.join(__dirname,'bulid')
}

const commonConfig = {
	entry:{
		app:['react-hot-loader/patch','./app/index.js']
	},
	output:{
		path:PATH.bulid,
		filename:'[name].js'
	},
	module: {
        loaders:[
            { test: /\.(js|jsx)$/,
              include: __dirname,
              exclude: /node_modules/,
              loader: "babel-loader",
              query:{
              	"presets": ["react", "es2015"],
              	"plugins":["react-hot-loader/babel"]}
            }
        ]
    },
	plugins:[
		new HtmlWebpackPlugin({
			title:'react-demo-test'
		})
	],
	devtool:'eval-source-map'
}

module.exports = commonConfig;