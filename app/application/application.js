define(function(require){
	'use strict';
	
	var Region = require('system/spa/region');

	function Application(){
		this.shellRegion = Object.resolve(Region);
		this.securityRegion = Object.resolve(Region);
	}

	Application.dependsOn = [];

	Application.prototype.attach = function attach($body) {
		var self = this;
		self.shellRegion.setElement($body.find($("#shell")));
		self.securityRegion.setElement($body.find($("#security")));

    };

    Application.prototype.activate = function activate() {
        
    };

	return Application;
});