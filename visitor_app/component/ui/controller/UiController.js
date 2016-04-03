(function() {
	'use strict';

	function UiController($location, $rootScope, $routeParams, CONFIG, ResourceManager, UserInterface) {

		var vm = this;
		vm.ui = UserInterface;

		vm.getHref = function(location){
			return '#/' + vm.ui.getLanguage() + '/' + location;
		};
		
		vm.getSections = function(){
			if($routeParams.page){
				for(var id in vm.ui.site.pages){
					if($routeParams.page == vm.ui.site.pages[id].name){
						return vm.ui.site.pages[id].sections;
					}
				}
			}
		};

		vm.getRouteParam = function(key){
			return $routeParams[key];
		};

		vm.getSectionView = function(file){
			return '/shared/section/' + file + '.html';
		};

		vm.mainMenuHasHome = function(){
			var id;
			
			for(id in vm.ui.site.pages){
				if(vm.ui.site.pages[id].name == 'home'){
					return true;
				}
			}

			return false;
		};
	}

	UiController.$inject = [
		'$location',
		'$rootScope',
		'$routeParams',
		'CONFIG',
		'ResourceManager',
		'UserInterface'
	];

	angular
		.module('_Controllers')
		.controller('UiController', UiController);
})();