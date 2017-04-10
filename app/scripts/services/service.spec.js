describe('service', function() {
  var service;

  beforeEach(angular.mock.module('app.service'))

  beforeEach(inject(function(_service_){
    service = _service_
  }));

  it('should exist', function(){
    expect(service).toBeDefined()
  });
});
