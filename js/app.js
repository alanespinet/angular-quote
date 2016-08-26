const app = angular.module('QuoteOfTheDay', []);

app.controller('QuoteController', ['$scope', 'quoteService', function($scope, quoteService){
  quoteService.getQuote().success(res => $scope.quote = res);
}]);

app.factory('quoteService', ['$http', function($http){
  return {
    getQuote: function(){
      return $http.get('http://fvi-grad.com:4004/quote');
    }
  };
}]);
