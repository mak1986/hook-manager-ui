(function() {
	'use strict';

	function SectionKindController($routeParams, CONFIG, CrudUtility, ResourceManager) {

		var vm = CrudUtility.init(this, 'section_kind');

		this.list = function() {
			CrudUtility.list(vm, vm["type"]);
		};

		this.show = function() {
			CrudUtility.show(vm, vm["type"]);
		};

		this.form = function() {
			CrudUtility.form(vm, vm["type"]);
		};

		this.store = function(resource) {
			CrudUtility.store(vm, vm["type"], resource);
		};

		this.update = function(resource) {
			CrudUtility.update(vm, vm["type"], resource);
		};
		
		this.destroy = function(resource) {
			CrudUtility.destroy(vm, vm["type"], resource);
		};

	}

	SectionKindController.$inject = [
		'$routeParams',
		'CONFIG',
		'CrudUtility',
		'ResourceManager'
	];

	angular
		.module('_Controllers')
		.controller('SectionKindController', SectionKindController);
})();