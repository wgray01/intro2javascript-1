var app = angular.module('app', []);

app.controller('headCtrl', function($scope) {
    $scope.TitleH1 = 'HTML5, CSS3, and Javascript'
    $scope.TitleSmall = ' Programming'
});

app.controller('recipesCtrl', function($scope) {
    $scope.Name = 'Welcome to Angular';
    $scope.Recipes = ['Fried Chicken', 'T-Bone Steak', 'Dirty Rice'];
});

app.controller('recipesCtrl1', function($scope) {
    $scope.Recipe = {
        name: "Fried Chicken",
        description: "How to make fried chicken",
        steps: ["Step 1", "Step 2", "Step 3"]
    };
});