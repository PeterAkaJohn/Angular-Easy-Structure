describe('GameController', function(){
  beforeEach(angular.mock.module('app.controller'))
  var $controller;

  beforeEach(inject(function(_$controller_){
    $controller = _$controller_;
  }));

  it('should be defined', function(){
    expect($controller).toBeDefined();
  });

  describe('test controller functions, variables update correctly', function(){

    beforeEach(function(){
      $scope = {};
      controller = $controller('Controller', { $scope: $scope});
    });
  })
})
