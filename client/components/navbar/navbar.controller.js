'use strict';

angular.module('handDbApp')
  .controller('NavbarCtrl', function ($scope, $location, Auth) {
    $scope.menu = [

    {
      'title': 'Home',
      'link': '/'
    },
    {
        'title': 'Preflop Hand Ranges',
        'link': '/PreflopHandRange'
    },

    ];

    $scope.isCollapsed = true;
    $scope.isLoggedIn = Auth.isLoggedIn;
    $scope.isAdmin = Auth.isAdmin;
    $scope.getCurrentUser = Auth.getCurrentUser;

    $scope.logout = function() {
      Auth.logout();
      $location.path('/login');
    };

    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });