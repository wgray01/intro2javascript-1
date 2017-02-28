var app = angular.module('app', []);

app.controller('recipesCtrl', function($scope) {
    $scope.Name = 'Welcome to Angular';
    $scope.Recipes = ['Fried Chicken', 'T-Bone Steak', 'Dirty Rice'];
});