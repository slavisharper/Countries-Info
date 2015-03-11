/**
 * Created by Slavi on 3/7/2015.
 */
app.controller('CountriesCtrl', function($scope, $ionicScrollDelegate, cashedResourcesService){
    'use strict';

    $scope.isSearchActive = false;
    $scope.search = {};
    $scope.countries = cashedResourcesService.getAll();
    $scope.toggleSearch = function(){
        if($scope.isSearchActive){
            $scope.isSearchActive = false;
            $scope.search.name = '';
        }
        else{
            $ionicScrollDelegate.scrollTop(true);
            $scope.isSearchActive = true;
        }
    }
});