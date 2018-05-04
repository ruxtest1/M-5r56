'use strict';

module.exports = function() {
	var assets = {views:{},vars:{}}
	var path = path || require('path');
	var app = app || require(path.resolve(__dirname,"../../server/server.js"));
	var fs = fs || require('fs');
	var config = config || JSON.parse(fs.readFileSync(path.resolve(__dirname,"../config.json"),"UTF-8"));
	
	fs.readdirSync(__dirname + "/views").forEach(function(group){
		let dir = path.resolve(__dirname,"../assets/views/"+group)+"/";
		if(fs.existsSync(dir+config.lang+".ejs")){
			assets.views[group] = dir+config.lang+".ejs"
		}
	});
	fs.readdirSync(__dirname + "/vars").forEach(function(group){
		let dir = path.resolve(__dirname,"../assets/vars/"+group)+"/";
		if(fs.existsSync(dir+config.lang+".json")){
			assets.vars[group] = JSON.parse(fs.readFileSync(dir+config.lang+".json",config.encoding))
		}
		if(fs.existsSync(dir+"config.json")){
			assets.vars[group] = JSON.parse(fs.readFileSync(dir+"config.json",config.encoding))
		}
	});
	assets.models = app.models;
	assets.config = config;
	return assets;
}()
