angular.module('editableItemApp', [])
	.directive('makeEditable', function() {
		return {
			restrict: 'A',
			transclude: true,
			templateUrl: 'editableItemTemplate.html',
			scope: true,
        }
    });

