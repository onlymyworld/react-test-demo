const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const PATH = {
	app:path.join(__dirname,'app'),
	bulid:path.join(__dirname,'bulid')
}

const commonConfig = {
	entry:{
		app:PATH.app+'/index.js'
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
              query:{"presets": ["react", "es2015"]}
            }
        ]
    },
	plugins:[
		new HtmlWebpackPlugin({
			title:'react-demo-test',
			filename:'../index.html',
			template:'my-index.html',
			hash:true
		})
	]
}

module.exports = commonConfig